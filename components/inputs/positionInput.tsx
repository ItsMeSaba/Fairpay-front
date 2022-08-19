import autoCompletePosition from "functions/autocomplete/autoCompletePosition";
import autoCompleteTechnology from "functions/autocomplete/autoCompleteTechnology";
import { ChangeEvent, CSSProperties, Dispatch, SetStateAction, useState } from "react";
import style from "styles/components/inputs.module.sass"

interface Args {
    setState: Dispatch<SetStateAction<string>>
    state: string
    displayLabel?: boolean
    customStyle?: CSSProperties
    className?: string
    isRequired?: boolean
}

export default function PositionInput(args: Args) {
    const { state, setState, displayLabel, customStyle, className, isRequired } = args;

    const [positions, setPositions] = useState<string[]>([]);
    const [isFocused, setFocused] = useState(false);

    function handleInput(event: ChangeEvent<HTMLInputElement>) {
        setState(event.target.value)

        if (event.target.value.length === 0) return setPositions([]);

        const results = []

        // setPositions([...autoCompletePosition(event.target.value), ...autoCompleteTechnology(event.target.value, { limit: 3 })]);
        setPositions(autoCompletePosition(event.target.value));
    }

    const displayList = positions.length > 0 && isFocused ? "block" : "none";

    return (
        <div className={`${style.positionInputBlock} ${className}`} style={customStyle}>
            { displayLabel && <label htmlFor="positionInput">პოზიცია</label> }
            
            <input 
                autoComplete="off" 
                id="positionInput" 
                placeholder={!displayLabel ? `პოზიცია ${isRequired ? "" : "(არასავალდებულო)"}`: ""} 
                list="positionInput" 
                value={state} 
                onChange={handleInput} 
                onFocus={() => setFocused(true)} 
                onBlur={() => setFocused(false)} 
            />

            <datalist id="positionInput" style={{ display: displayList }}>
                {/* { positions.map(position => <option onMouseDownCapture={() => setState(`${position} Developer`)} key={position}>{ position } Developer</option>) } */}
                { positions.map(position => <option onMouseDownCapture={() => setState(position)} key={position}>{ position }</option>) }
            </datalist>
        </div>
    )
}