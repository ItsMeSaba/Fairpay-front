
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

interface Args {
    close: () => void
}

export default function SubmitSalary(args: Args) {
    const { close } = args;
    const [position, setPosition] = useState("");
    const [company, setCompany] = useState("");
    const [technologies, setTechnologies] = useState<string[]>([]);
    const [seniority, setSeniority] = useState("");
    const [salary, setSalary] = useState(0);
    const [currency, setCurrency] = useState(0);

    function handleClosing(e: any) {
        if(e.target !== e.currentTarget) return;
        
        close();
    }

    async function upload() {
        await axios.post("http://localhost:5000/api/userVacancy", {
            technologies,
            company,
            position,
            seniority,
            salary,
        })

        close();
    }

    return (
        <div className={style.submitSalary} onClick={handleClosing}>
            <div className={style.container}>
                    {/* <h1>ანაზღაურების დამატება</h1> */}

                    <div className={style.left}>
                        <div className={style.avatar}>
                            <Image src={moneyMan3} quality={100} alt="money" />
                        </div> 
                    </div>


                    <div className={style.right}>
                        <div className={style.fields}>
                            {/* <Input name="პოზიცია" />
                            <Input name="კომპანია" /> */}
                            <PositionInput displayLabel={true} state={position} setState={setPosition} customStyle={{ padding: "0 1.3rem" }}/>

                            <CompanyInput state={company} setState={setCompany} customStyle={{ padding: "0 1.3rem" }} />

                            <SeniorityInput setSeniority={setSeniority} />
                            {/* <Input name="გამოცდილება" /> */}
                            
                            {/* <Input name="ანაზღაურება" type="number" /> */}
                            {/* <SalaryInput /> */}
                            {/* <div className={style.salaryInput}>
                                
                                <select name="cars" id="cars">
                                    <option value="gel">₾</option>
                                    <option value="usd">$</option>
                                    <option value="eur">€</option>
                                </select>
                            </div> */}
                            <SalaryInput />

                            
                            <TechnologyInput state={technologies} setState={setTechnologies} />
                        </div>

                        {/* <Submit /> */}
                        
                        <button className={style.submit} onClick={upload}>დამატება</button>
                    </div>
                </div>
        </div>
    )
}

interface InputArgs {
    name: string
    type?: "text" | "number"
}

// function Input(args: InputArgs) {
//     const { name, type } = args;

//     return (
//         // <div className={style.inputBlock}>
//         //     <label htmlFor="input">{ name }</label>
            
//         //     <input type={type ?? "text"} id="input"/>
//         // </div>
//         <PositionInput />
//     )
// }


function SalaryInput() {
    return (
        <div className={`${style.inputBlock} ${style.salaryInputBlock}`}>
            <label htmlFor="input">ანაზღაურება</label>
            
            <div className={style.inputs}>
                <input autoComplete="off" type="number" id="input"/>

                <select name="cars" id="cars">
                    <option value="gel">₾</option>
                    <option value="usd">$</option>
                    <option value="eur">€</option>
                </select>
            </div>
        </div>
    )
}

interface SeniorityInputArgs { 
    setSeniority: Dispatch<SetStateAction<string>> 
}

function SeniorityInput(args: SeniorityInputArgs) {
    const { setSeniority } = args;

    return (
        // <div className={`${style.inputBlock} ${style.seniorityInputBlock}`}>
        <div className={`${style.inputBlock} ${style.seniorityInputBlock}`}>
        {/* // <div className={`inputBlock ${style.seniorityInputBlock}`}> */}
            <label htmlFor="input">გამოცდილება</label>
            
            <div className={style.inputs}>                
                <select onChange={e => setSeniority(e.target.value)} className={`${style.inputBlock}`} name="cars" id="cars">
                    <option value="intern">Intern</option>
                    <option value="junior">Junior</option>
                    <option value="middle">Middle</option>
                    <option value="senior">Senior</option>
                    <option value="lead">Lead</option>
                </select>
            </div>
        </div>
    )
}

function Submit() {
    return (
        <button className={style.submit}>დამატება</button>
    )
}