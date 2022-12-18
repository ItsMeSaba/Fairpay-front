import style from "styles/components/submitReview.module.sass"
import reviewLady from "public/images/reviewLady.png"
import reviewLady2 from "public/images/reviewLady2.png"
import reviewLady3 from "public/images/reviewLady3.png"
import Image from "next/image"
// import StarRatings from 'react-star-ratings';
import roundedStar from "public/images/roundedStar.svg"
import { useEffect, useMemo, useState } from "react"
import { Rating } from 'react-simple-star-rating'
import PositionInput from "../inputs/positionInput"
import axios from "axios"
import TechnologyInput from "components/inputs/technologyInput"
import CompanyInput from "components/inputs/companyInput"
import { SubmitReviewSchema } from "joiSchemas"
import to from "await-to-js"
import { Types } from "mongoose"
import useCheckAuth from "hooks/useCheckAuth"
import { GlobalContext } from "context"
import { useContext } from 'react'
import getRatingText from "functions/reviews/getRatingText"
import { toast } from "react-toastify"
import successToast from "functions/toasts/successToast"

interface Args {
    close: () => void,
    companyName: string | null,
    companyId: Types.ObjectId,
}

export default function SubmitReview(args: Args) {
    const { close, companyName, companyId } = args; 
    const [rating, setRating] = useState(0);
    const [positiveReview, setPositiveReview] = useState("");
    const [negativeReview, setNegativeReview] = useState("");
    const [position, setPosition] = useState("");
    const [company, setCompany] = useState(companyName ?? "");
    const [error, setError] = useState("");
    // const { user } = useCheckAuth();
    const { user } = useContext(GlobalContext).authData;
    const ratingData = useMemo(() => getRatingText(rating), [rating]);

    function handleClosing(e: any) {
        if(e.target !== e.currentTarget) return;
        
        close();
    }   

    async function upload() {
        if (!user?.id) return setError("ავტორიზაციის გავლა არ დაფიქსირებულა");

        const dataToUpload = {
            rating,
            positiveReview,
            negativeReview,
            position,
            userId: user.id,
            companyId
        }
    
        const { error: validationError, value: validatedData } = SubmitReviewSchema.validate(dataToUpload);

        if (validationError) return setError(validationError.message);
        

        const [error, response] = await to(axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/reviews`, validatedData));

        if (error) return setError((error as any).response.data.message);

        successToast("რევიუ დამატებულია");
        close();
    }

    return (    
        <div className={style.submitReview} onClick={handleClosing}>
            <div className={style.container}>
                <div className={style.avatar}>
                    {/* Illustration is taken from https://icons8.com/illustrations/style--business-3d */}
                    <Image src={reviewLady3} alt="https://icons8.com/illustrations/style--business-3d" /> 
                </div>

                <div className={style.right}>
                    <div className={style.rating}>
                        <Rating
                            onClick={setRating}
                            ratingValue={rating}
                            // allowHalfIcon={true}
                            className={style.stars}
                        />

                        <span className={style.ratingNumber}>{rating/20}/5 (სავალდებულო)</span>
                    </div>

                    { ratingData &&
                        <div>
                            <p style={{ padding: "0 0 0 .5rem", color: ratingData.color }}>{ ratingData.text }</p>
                        </div>
                    }

                    {/* <input type="text" placeholder="პოზიცია" /> */}
                    <div className={style.inputsBlock}>
                        <CompanyInput setState={setCompany} state={company} />

                        <PositionInput setState={setPosition} state={position} className={style.positionInput} customStyle={{ marginLeft: window?.innerWidth < 768 ? "0" : "1.5rem" }} />
                    </div>

                    <div className={style.reviewText}>
                        <textarea value={positiveReview} onChange={e => setPositiveReview(e.target.value)} name="" id="" cols={70} rows={9} placeholder="დადებითი (არასავალდებულო)"></textarea>
                    </div>

                    <div className={style.reviewText}>
                        <textarea value={negativeReview} onChange={e => setNegativeReview(e.target.value)} name="" id="" cols={70} rows={9} placeholder="უარყოფითი (არასავალდებულო)"></textarea>
                    </div>

                    { error && <h5 className={style.error}>{ error }</h5> }

                    <button onClick={upload} className={style.submit}>დამატება</button>
                </div>
            </div>
        </div>
    )
}

// function Submit() {
//     return (
//         <button onClick={upload} className={style.submit}>დამატება</button>
//     )
// }