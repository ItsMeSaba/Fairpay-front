import { Dispatch, SetStateAction } from "react";
import style from "styles/components/inputs.module.sass";

interface SeniorityInputArgs { 
    setSeniority: Dispatch<SetStateAction<string>> 
}

export function SeniorityInput(args: SeniorityInputArgs) {
    const { setSeniority } = args;

    return (
        <div className={style.seniorityInputBlock}>
            <label htmlFor="input">გამოცდილება</label>
            
            {/* <div className={style.options}>                 */}
                <select onChange={e => setSeniority(e.target.value)} name="cars" id="cars">
                    <option value="" selected disabled hidden></option>
                    <option value="intern">Intern</option>
                    <option value="junior">Junior</option>
                    <option value="middle">Middle</option>
                    <option value="senior">Senior</option>
                    <option value="lead">Lead</option>
                </select>
            {/* </div> */}
        </div>
    )
}
