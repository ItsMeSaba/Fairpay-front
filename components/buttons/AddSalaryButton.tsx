import { GlobalContext } from "context";
import clickWithoutPropogation from "functions/utils/clickWithoutPropogation";
import useCheckAuth from "hooks/useCheckAuth";
import { Types } from "mongoose";
import { CSSProperties, useContext } from "react";
import style from "styles/components/buttons/buttons.module.sass"

interface Props {
    companyName: string,
    companyId: Types.ObjectId,
    customStyle?: CSSProperties,
    displayLongName?: boolean,
    buttonColor?: string,
}

export default function AddSalaryButton(props: Props) {
    const { companyId, companyName, customStyle, displayLongName, buttonColor } = props;

    // const { status } = useCheckAuth();
    const { openAuthPopup, openSalaryPopup, authData } = useContext(GlobalContext);
    const { status } = authData;

    return (
        <button 
            style={{ transform: "translate('-100%')", ...customStyle }} 
            title="ანაზღაურების დამატება" 
            className={style.blueButton} 
            onClick={e => clickWithoutPropogation(e, status !== "authenticated" ? openAuthPopup : () => openSalaryPopup(companyName, companyId))}
        >
            { displayLongName ? "ანაზღაურების დამატება" : "ანაზღაურება" }
        </button>
    )
}