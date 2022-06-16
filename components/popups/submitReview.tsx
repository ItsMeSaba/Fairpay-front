import style from "styles/components/submitReview.module.sass"
import reviewLady from "public/images/reviewLady.png"
import reviewLady2 from "public/images/reviewLady2.png"
import reviewLady3 from "public/images/reviewLady3.png"
import Image from "next/image"
// import StarRatings from 'react-star-ratings';
import roundedStar from "public/images/roundedStar.svg"
import { useEffect, useState } from "react"
import { Rating } from 'react-simple-star-rating'
import PositionInput from "../inputs/positionInput"
import axios from "axios"
import TechnologyInput from "components/inputs/technologyInput"
import CompanyInput from "components/inputs/companyInput"
import { SubmitReviewSchema } from "joiSchemas"
import { useSession } from "next-auth/react"
import to from "await-to-js"

interface Args {
    close: () => void,
    presetCompany: string | null
}

export default function SubmitReview(args: Args) {
    const { close, presetCompany } = args; 
    const [rating, setRating] = useState(0);
    const [positiveReview, setPositiveReview] = useState("");
    const [negativeReview, setNegativeReview] = useState("");
    const [position, setPosition] = useState("");
    const [company, setCompany] = useState(presetCompany ?? "");
    const [error, setError] = useState("");
    const { data: userData } = useSession();

    console.log("userData?.user.profileId", userData?.user.userId);

    function handleClosing(e: any) {
        if(e.target !== e.currentTarget) return;
        
        close();
    }   

    async function upload() {
        if (!userData?.user.userId) return setError("You must be logged in to submit a review");

        const dataToUpload = {
            rating,
            positiveReview,
            negativeReview,
            position,
            company,
            userId: userData.user.userId,
        }
    
        const { error: validationError, value: validatedData } = SubmitReviewSchema.validate(dataToUpload);

        if (validationError) return setError(validationError.message);
        

        const [error, response] = await to(axios.post("http://localhost:7000/api/reviews", validatedData));

        if (error) return setError(error.response.data.message);

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
                            allowHalfIcon={true}
                            className={style.stars}
                        />

                        <span className={style.ratingNumber}>{rating/20}/5</span>
                    </div>

                    {/* <input type="text" placeholder="პოზიცია" /> */}
                    <div className={style.inputsBlock}>
                        <CompanyInput setState={setCompany} state={company} />

                        <PositionInput setState={setPosition} state={position} className={style.positionInput} />
                    </div>

                    <div className={style.reviewText}>
                        <textarea value={positiveReview} onChange={e => setPositiveReview(e.target.value)} name="" id="" cols={80} rows={9} placeholder="დადებითი"></textarea>
                    </div>

                    <div className={style.reviewText}>
                        <textarea value={negativeReview} onChange={e => setNegativeReview(e.target.value)} name="" id="" cols={80} rows={9} placeholder="უარყოფითი"></textarea>
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