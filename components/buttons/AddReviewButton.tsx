import { GlobalContext } from "context";
import clickWithoutPropogation from "functions/utils/clickWithoutPropogation";
import useCheckAuth from "hooks/useCheckAuth";
import { Types } from "mongoose";
import { useContext } from "react";
import style from "styles/components/buttons/buttons.module.sass"
import { CSSProperties } from "react";

interface Props {
    companyName: string,
    companyId: string,
    displayLongName?: boolean,
    customStyle?: CSSProperties,
}

export default function AddReviewButton(props: Props) {
    const { companyId, companyName, displayLongName, customStyle } = props;

    // const { status } = useCheckAuth();
    const { openAuthPopup, openReviewPopup, authData } = useContext(GlobalContext);
    const { status } = authData;

    return (
        <button 
            style={{ transform: "translate('-100%')", maxWidth: displayLongName ? "1000px" : "250px", ...customStyle }} 
            title="შეფასება დამატება" 
            className={style.blueButton} 
            onClick={e => clickWithoutPropogation(e, status !== "authenticated" ? openAuthPopup : () => openReviewPopup(companyName, companyId))}
        >
            { displayLongName ? "შეფასების დამატება" : "შეფასება" }
        </button>
    )
}