import style from "styles/components/inputs.module.sass"
import { Dispatch, SetStateAction } from "react";

interface SalaryInputArgs {
    salary: string,
    setSalary: Dispatch<SetStateAction<string>>
    setCurrency: Dispatch<SetStateAction<string>>
}

export function SalaryInput(args: SalaryInputArgs) {
    const { setSalary, setCurrency, salary } = args;

    return (
        <div className={style.salaryInputBlock}>
            <label htmlFor="input">ანაზღაურება</label>
            
            {/* <div className={style.inputs}> */}
            <div className={style.salaryInputWithCurrency}>
                <input value={salary} onChange={e => setSalary(e.target.value)} autoComplete="off" type="number" id="input"/>

                <select onChange={e => setCurrency(e.target.value)} name="cars" id="cars">
                    <option value="gel" selected>₾</option>
                    <option value="usd">$</option>
                    <option value="eur">€</option>
                </select>
            </div>
        </div>
    )
}