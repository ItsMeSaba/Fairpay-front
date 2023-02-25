import style from "./autocompletePopup.module.sass"
import { Dispatch, SetStateAction, CSSProperties } from "react"

interface Args {
    children: React.ReactNode
    options: string[],
    onOptionClick: Dispatch<SetStateAction<string>>,
    displayOptions: boolean,
    style?: CSSProperties
}

export default function InputWithAutocomplete(args: Args) {
    const { options, children, onOptionClick, displayOptions, style: customStyle } = args;

    return (
        <div className={style.inputWithAutocomplete} style={customStyle}>
            <div className={style.inputBlock}>
                { children }
            </div>

            <datalist id="positionInput" style={{ display: displayOptions ? "block" : "none" }}>
                {/* { positions.map(position => <option onMouseDownCapture={() => setState(`${position} Developer`)} key={position}>{ position } Developer</option>) } */}
                { options.map(position => <option onMouseDownCapture={() => onOptionClick(position)} key={position}>{ position }</option>) }
            </datalist>
        </div>    
    )
}