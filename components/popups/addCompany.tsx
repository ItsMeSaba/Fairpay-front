import addCompanyRequest from "database/company/addCompanyRequest";
import successToast from "functions/toasts/successToast";
import { SubmitCompanyRequestSchema } from "joiSchemas";
import { Dispatch, SetStateAction, useState } from "react";
import style from "styles/components/popups/addCompanyPopup.module.sass";

interface Args {
    closePopup: () => void
}

export default function AddCompanyPopup(args: Args) {
    const { closePopup } = args;
    const [companyName, setCompanyName] = useState("");
    const [companyWebsite, setCompanyWebsite] = useState("");
    const [error, setError] = useState("");

    async function upload() {
        const { error: validationError, value: validationResult } = SubmitCompanyRequestSchema.validate({
            companyName,
            companyWebsite,
        });

        if (validationError) return setError(validationError.message);  

        addCompanyRequest(companyName, companyWebsite);

        successToast("კომპანიის მოთხოვნა მიღებულია")
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

                <h4>კომპანია დაემატება ვალიდაციის შემდეგ. სავარაუდო ლოდინის დრო 3დან 24 საათმდე</h4>

                <div className={style.inputs}>
                    {/* <input type="text" />

                    <input type="text" /> */}

                    <Input label="კომპანიის სახელი" setState={setCompanyName}/>
                
                    <Input label="კომპანიის საიტი (არასავალდებულო)" setState={setCompanyWebsite}/>
                </div>

                {  error && <h5 style={{ color: "red" }}>{ error }</h5> }

                <br />

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