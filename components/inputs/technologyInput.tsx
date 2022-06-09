import autoCompleteTechnology from "functions/autocomplete/autoCompleteTechnology";
import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from "react"
import style from "styles/components/inputs.module.sass"

interface Args {
    state: string[],
    setState: Dispatch<SetStateAction<string[]>>
}

export default function TechnologyInput(args: Args) {
    const { state, setState } = args;
    const [technologies, setTechnologies] = useState<string[]>([]);
    const [isFocused, setFocused] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef<HTMLInputElement | null>(null);

    function handleInput(event: ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value)

        if (event.target.value.length === 0) return setTechnologies([]);

        setTechnologies(autoCompleteTechnology(event.target.value));
    }

    function handleAddingTechnology(newTechnology: string) {
        setState(technologies => [...technologies, newTechnology]);

        setInputValue("");
    }

    const displayList = inputValue.length > 0 && isFocused  ? "block" : "none";

    return (
        <div className={style.technologyInputContainer}>
            <label htmlFor="companyInput">ტექნოლოგიები</label>

            <div id="companyInput" className={style.technologyList} onClick={() => inputRef.current?.focus()}>
                { state.map(technology => <span className={style.technologyPill} key={technology} onClick={() => setState(technologies => technologies.filter(tech => tech !== technology))}>{technology}</span>) }

                <div className={style.inputBlock}>
                    <input ref={inputRef} autoComplete="off" value={inputValue} id="companyInput" list="companyInput" onChange={handleInput} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} />

                    <datalist id="companyInput" style={{ display: displayList }}>
                        { technologies.map(technology => !state.includes(technology) ? <option onMouseDownCapture={() => handleAddingTechnology(technology)} data-title={technology} key={technology} style={{ padding: ".5rem 1rem" }}>{ technology }</option> : null) }
                    </datalist>
                </div>
            </div>
        </div>
    )
}