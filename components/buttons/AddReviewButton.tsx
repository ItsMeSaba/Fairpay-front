import { GlobalContext } from "context";
import clickWithoutPropogation from "functions/utils/clickWithoutPropogation";
import useCheckAuth from "hooks/useCheckAuth";
import { Types } from "mongoose";
import { useContext } from "react";
import style from "styles/components/buttons/buttons.module.sass"


interface Props {
    companyName: string,
    companyId: Types.ObjectId,
    displayLongName?: boolean
}

export default function AddReviewButton(props: Props) {
    const { companyId, companyName, displayLongName } = props;

    // const { status } = useCheckAuth();
    const { openAuthPopup, openReviewPopup, authData } = useContext(GlobalContext);
    const { status } = authData;

    return (
        <button 
            style={{ transform: "translate('-100%')" }} 
            title="შეფასება დამატება" 
            className={style.blueButton} 
            onClick={e => clickWithoutPropogation(e, status !== "authenticated" ? openAuthPopup : () => openReviewPopup(companyName, companyId))}
        >
            { displayLongName ? "შეფასების დამატება" : "შეფასება" }
        </button>
    )
}