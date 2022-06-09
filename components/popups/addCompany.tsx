import addCompanyRequest from "database/functions/company/addCompanyRequest";
import { Dispatch, SetStateAction, useState } from "react";
import style from "styles/components/popups/addCompanyPopup.module.sass";

interface Args {
    closePopup: () => void
}

export default function AddCompanyPopup(args: Args) {
    const { closePopup } = args;
    const [companyName, setCompanyName] = useState("");
    const [companyWebsite, setCompanyWebsite] = useState("");

    async function upload() {
        // console.log("uploading", companyName, companyWebsite);
        addCompanyRequest(companyName, companyWebsite);

        closePopup();
    }
    
    function handleClosing(e: any) {
        if(e.target !== e.currentTarget) return;
        
        closePopup();
    }   

    return (
        <div className={style.addCompanyPopup} onClick={handleClosing}>
            <div className={style.container}>
                <p className={style.closeButton} onClick={closePopup}>X</p>

                <h2>დაამატეთ კომპანია</h2>

                <div className={style.inputs}>
                    {/* <input type="text" />

                    <input type="text" /> */}

                    <Input label="კომპანიის სახელი" setState={setCompanyName}/>
                
                    <Input label="კომპანიის საიტი (Optional)" setState={setCompanyWebsite}/>
                </div>

                <button onClick={upload}>დამატება</button>
            </div>
        </div>
    )
}

interface InputArgs {
    label: string,
    setState: Dispatch<SetStateAction<string>>
}

function Input(args: InputArgs) {
    const { label, setState } = args;

    return (
        <div className={style.input}>
            <label htmlFor="">{ label }</label>

            <input type="text" id="" onChange={e => setState(e.target.value)}/>
        </div>
    )
}