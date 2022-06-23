
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
import { useSession } from "next-auth/react"
import to from "await-to-js"

interface Args {
    close: () => void,
    presetCompany: string | null
}

export default function SubmitSalary(args: Args) {
    const { close, presetCompany } = args;
    const [position, setPosition] = useState("");
    const [company, setCompany] = useState(presetCompany ?? "");
    const [technologies, setTechnologies] = useState<string[]>([]);
    const [seniority, setSeniority] = useState("");
    const [salary, setSalary] = useState("");
    const [currency, setCurrency] = useState("gel");
    const [error, setError] = useState("");
    const { data: userData } = useSession();

    function handleClosing(e: any) {
        if(e.target !== e.currentTarget) return;
        
        close();
    }

    async function upload() {
        if (!userData?.user.userId) return setError("You must be logged in to submit a review");

        const dataToUpload = {
            technologies,
            company,
            position,
            seniority,
            salary,
            currency,
            userId: userData?.user.userId,
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
