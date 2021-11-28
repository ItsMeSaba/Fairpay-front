import { useState } from "react";
import style from "styles/components/filtration.module.sass"

interface PillButtonArgs {
    text: string
    active?: boolean
    toggleFilter: (filter: string, action: "add" | "remove") => void
}

export function FiltrationItem(args: PillButtonArgs) {
    const [isActive, setActive] = useState(false);
    const { text, toggleFilter } = args;

    function handleClick() {
        toggleFilter(text.toLowerCase(), isActive ? "remove" : "add");

        setActive(active => !active)
    }

    return (
        <button onClick={handleClick} className={`${style.filtrationItem} ${!isActive || style.active}`}>
            { text }
        </button>
    )
}