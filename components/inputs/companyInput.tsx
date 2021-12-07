import autoCompleteCompany from "functions/autocomplete/autoCompleteCompany";
import { ChangeEvent, CSSProperties, Dispatch, SetStateAction, useState } from "react";
import style from "styles/components/inputs.module.sass"

interface Args {
    setState: Dispatch<SetStateAction<string>>
    state: string
    customStyle?: CSSProperties
}

export default function CompanyInput(args: Args) {
    const { state, setState, customStyle } = args;
    const [companies, setCompanies] = useState<string[]>([]);
    const [isFocused, setFocused] = useState(false);

    function handleInput(event: ChangeEvent<HTMLInputElement>) {
        setState(event.target.value)

        if (event.target.value.length === 0) return setCompanies([]);

        setCompanies([...autoCompleteCompany(event.target.value)]);
    }

    const shouldDisplayList = companies.length > 0 && isFocused

    return (
        <div className={style.inputContainer} style={customStyle}>
            <label htmlFor="companyInput">კომპანია</label>
            
            <input autoComplete="off" value={state} id="companyInput" list="companyInput" onChange={handleInput} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} />

            <datalist id="companyInput" style={{ display: shouldDisplayList ? "block" : "none" }}>
                { companies.map(company => <option onMouseDownCapture={() => setState(company)} data-title={company} key={company} style={{ padding: ".5rem 1rem" }}>{ company }</option>) }
                {/* <option>test</option> */}
            </datalist>
        </div>
    )
}