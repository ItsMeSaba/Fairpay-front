import { GlobalContext } from "context";
import clickWithoutPropogation from "functions/utils/clickWithoutPropogation";
import { Types } from "mongoose";
import { useSession } from "next-auth/react";
import { CSSProperties, useContext } from "react";
import style from "styles/components/buttons/buttons.module.sass"

interface Props {
    companyName: string,
    companyId: Types.ObjectId,
    customStyle?: CSSProperties,
    displayLongName?: boolean
}

export default function AddSalaryButton(props: Props) {
    const { companyId, companyName, customStyle, displayLongName } = props;

    const { status } = useSession();
    const { openAuthPopup, openSalaryPopup } = useContext(GlobalContext);

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