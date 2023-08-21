import style from "styles/components/submitInterview.module.sass"
import reviewLady3 from "images/coffeWoman.png"
import Image from "next/image"
// import StarRatings from 'react-star-ratings';
import { useEffect, useMemo, useState } from "react"
import { Rating } from 'react-simple-star-rating'
import PositionInput from "../inputs/positionInput"
import axios from "axios"
import TechnologyInput from "components/inputs/technologiesListInput"
import CompanyInput from "components/inputs/companyInput"
import { SubmitInterviewSchema, SubmitReviewSchema } from "joiSchemas"
import to from "await-to-js"
import { Types } from "mongoose"
import useCheckAuth from "hooks/useCheckAuth"
import { GlobalContext } from "context"
import { useContext, useRef, LegacyRef } from 'react'
import getRatingText from "functions/reviews/getRatingText"
import { toast } from "react-toastify"
import successToast from "functions/toasts/successToast"

interface Args {
    close: () => void,
    companyName: string | null,
    companyId: string,
}

export default function SubmitInterview(args: Args) {
    const { close, companyName, companyId } = args; 
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [error, setError] = useState("");
    const { user } = useContext(GlobalContext).authData;
    const ratingData = useMemo(() => getRatingText(rating), [rating]);

    function handleClosing(e: any) {
        if(e.target !== e.currentTarget) return;
        
        close();
    }   

    async function upload() {
        if (!user?.id) return setError("ავტორიზაციის გავლა არ დაფიქსირებულა");

        const dataToUpload = {
            userId: user.id,
            companyId,
            rating,
            comment,
        }

        const { error: validationError, value: validatedData } = SubmitInterviewSchema.validate(dataToUpload);

        if (validationError) return setError(validationError.message);

        const [error, response] = await to(axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/interviews`, validatedData, { withCredentials: true }));

        if (error) return setError((error as any).response.data.message);

        successToast("რევიუ დამატებულია");
        
        close();
    }

    return (    
        <div className={style.submitReview} onClick={handleClosing}>
            <div className={style.container}>
                <div className={style.avatar}>
                    {/* Illustration is taken from https://icons8.com/illustrations/style--business-3d */}
                    <img src={reviewLady3} alt="https://icons8.com/illustrations/style--business-3d" quality={70} /> 
                </div>

                <div className={style.right}>
                    {/* <p className={style.header}>რამდენი დღის განმავლობაში მიიღეთ უკუკავშირი?</p> */}

                    {/* <div className={style.didntContact}>
                        <input type="checkbox" name="" id="" onChange={(e) => setCompanyDidntAnswer(e.target.checked)} />

                        <p>არ დამიკავშირდნენ</p>
                    </div> */}


                    {/* { !companyDidntAnswer &&
                        <>
                            <input type="number" placeholder="დღე" />

                        </>
                        
                    } */}
                    <p className={style.header}>როგორ შეაფასებდით კომუნიკაციას/გასაუბრებას?</p>

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
            
                    <div className={style.comment}>
                        <textarea value={comment} onChange={e => setComment(e.target.value)} name="" id="" cols={70} rows={9} placeholder="კომენტარი (არასავალდებულო)"></textarea>
                    </div>

                    { error && <h5 className={style.error}>{ error }</h5> }

                    <button onClick={upload} className={style.submit}>დამატება</button>
                </div>
            </div>
        </div>
    )
}