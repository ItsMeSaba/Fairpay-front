import autoCompleteCompany from "functions/autocomplete/autoCompleteCompany";
import { ChangeEvent, CSSProperties, Dispatch, SetStateAction, useState } from "react";
import style from "styles/components/inputs.module.sass"

interface Args {
    setState: Dispatch<SetStateAction<string>>
    state: string
    customStyle?: CSSProperties,
    displayLabel?: boolean
}

export default function CompanyInput(args: Args) {
    const { state, setState, customStyle, displayLabel } = args;
    const [companies, setCompanies] = useState<string[]>([]);
    const [isFocused, setFocused] = useState(false);

    function handleInput(event: ChangeEvent<HTMLInputElement>) {
        setState(event.target.value)

        if (event.target.value.length === 0) return setCompanies([]);

        setCompanies([...autoCompleteCompany(event.target.value)]);
    }

    const displayList = companies.length > 0 && isFocused ? "block" : "none";
 
    return (
        <div className={style.companyInputBlock} style={customStyle}>
            { displayLabel && <label htmlFor="companyInput">კომპანია</label> }
            
            <input 
                placeholder={!displayLabel ? "კომპანია" : ""} 
                // disabled={!!presetCompany} 
                autoComplete="off" 
                value={state} 
                id="companyInput" 
                list="companyInput" 
                onChange={handleInput} 
                onFocus={() => setFocused(true)} 
                onBlur={() => setFocused(false)} 
                disabled={true}
            />

            <datalist id="companyInput" style={{ display: displayList }}>
                { 
                    companies.map(company => {
                        <option 
                            onMouseDownCapture={() => setState(company)} 
                            data-title={company} 
                            key={company} 
                            style={{ padding: ".5rem 1rem" }}
                        >
                            { company }
                        </option>
                    })
                }
            </datalist>
        </div>
    )
}