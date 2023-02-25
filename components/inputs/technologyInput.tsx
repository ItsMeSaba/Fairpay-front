import { useRef, useState } from "react";
import InputWithAutocomplete from "./autocompletePopup/AutocompletePopup";
import { FaBeer } from 'react-icons/fa';

interface Args {
    
}

export default function TechnologyInput() {
    const [options, setOptions] = useState<string[]>([]);
    const [isInputFocused, setInputFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const displayOptions = options.length > 0 && isInputFocused

    return (
        <InputWithAutocomplete options={options} displayOptions={displayOptions} onOptionClick={() => null}>
            <input 
                type="text"
                placeholder="ტექნოლოგია"
                ref={inputRef}
                onFocus={() => setInputFocused(true)} 
                onBlur={() => setInputFocused(false)}
                style={{ 
                    padding: ".8rem 1.4rem",
                    outline: "transparent", 
                    borderRadius: ".6rem", 
                    border: "solid 1px rgb(150, 150, 150)", 
                    fontSize: "1rem", 
                    fontFamily: "'Noto Sans Georgian', sans-serif",
                }}
            />
        </InputWithAutocomplete>
    )
}