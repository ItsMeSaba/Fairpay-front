import { GlobalContext } from "context";
import clickWithoutPropogation from "functions/utils/clickWithoutPropogation";
import useCheckAuth from "hooks/useCheckAuth";
import { Types } from "mongoose";
import { useContext } from "react";
import style from "styles/components/buttons/buttons.module.sass"
import { CSSProperties } from "react";

interface Props {
    companyName: string,
    companyId: Types.ObjectId,
    displayLongName?: boolean,
    customStyle?: CSSProperties,
}

export default function AddInterviewButton(props: Props) {
    const { companyId, companyName, displayLongName, customStyle } = props;

    // const { status } = useCheckAuth();
    const { openAuthPopup, openInterviewPopup, authData } = useContext(GlobalContext);
    const { status } = authData;

    return (
        <button 
            style={{ transform: "translate('-100%')", maxWidth: displayLongName ? "1000px" : "250px", ...customStyle }} 
            title="გასაუბრების შეფასება" 
            className={style.blueButton} 
            onClick={e => clickWithoutPropogation(e, status !== "authenticated" ? openAuthPopup : () => openInterviewPopup(companyName, companyId))}
        >
            { displayLongName ? "გასაუბრების შეფასება" : "გასაუბრება" }
        </button>
    )
}