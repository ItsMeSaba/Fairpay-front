
import style from "styles/components/submitSalary.module.sass"
import moneyMan from "public/images/moneyMan.png"
import moneyMan2 from "public/images/moneyMan2.png"
import moneyMan3 from "public/images/moneyMan3.png"
import Image from "next/image"
import PositionInput from "components/inputs/positionInput"
import CompanyInput from "components/inputs/companyInput"
import { Dispatch, SetStateAction, useState } from "react"
import TechnologyInput from "components/inputs/technologyInput"
import axios from "axios"
import { SubmitSalarySchema } from "joiSchemas"
import { SalaryInput } from "components/inputs/salaryInput"
import { SeniorityInput } from "components/inputs/seniorityInput"
import to from "await-to-js"
import { Types } from "mongoose"
import useCheckAuth from "hooks/useCheckAuth"

interface Args {
    close: () => void,
    companyName: string | null,
    companyId: string,
}

export default function SubmitSalary(args: Args) {
    const { close, companyName: presetCompany, companyId } = args;
    const [position, setPosition] = useState("");
    const [company, setCompany] = useState(presetCompany ?? "");
    const [technologies, setTechnologies] = useState<string[]>([]);
    const [seniority, setSeniority] = useState("");
    const [salary, setSalary] = useState("");
    const [currency, setCurrency] = useState("gel");
    const [error, setError] = useState("");
    const { user } = useCheckAuth();

    function handleClosing(e: any) {
        if(e.target !== e.currentTarget) return;
            
        close();
    }

    async function upload() {
        if (!user?.id) return setError("ავტორიზაციის გავლა არ დაფიქსირებულა");

        const dataToUpload = {
            technologies,
            companyId,
            position,
            seniority,
            salary,
            currency,
            userId: user.id,
        }
        
        const { error: validationError, value } = SubmitSalarySchema.validate(dataToUpload);

        if (validationError) return setError(validationError.message);

        const [error, response] = await to(axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/vacancies`, value));

        if (error) return setError((error as any).response.data.message);

        close();
    }   

    return (
        <div className={style.submitSalary} onClick={handleClosing}>
            <div className={style.container}>
                    {/* <h1>ანაზღაურების დამატება</h1> */}

                    <div className={style.avatar}>
                        {/* Illustration is taken from https://icons8.com/illustrations/style--business-3d */}
                        <Image src={moneyMan3} quality={100} alt="https://icons8.com/illustrations/style--business-3d" />
                    </div> 


                    <div className={style.inputsDiv}>
                        <h5>ანაზღაურების ხარჯზე პირის ვაინაობის დადგენის გართულების მიზნით ანაზღაურება წარმოდგენილი იქნება დიაპაზონის სახით</h5>

                        <br />

                        <div className={style.fields}>
                            <CompanyInput displayLabel state={company} setState={setCompany} />

                            <PositionInput displayLabel state={position} setState={setPosition} />

                            <SeniorityInput setSeniority={setSeniority} />
                            
                            <SalaryInput salary={salary} setSalary={setSalary} setCurrency={setCurrency} />

                            <TechnologyInput state={technologies} setState={setTechnologies} />
                        </div>

                        { error && <h5 className={style.error}>{ error }</h5> }
                        
                        <button className={style.submit} onClick={upload}>დამატება</button>
                    </div>
                </div>
        </div>
    )
}
