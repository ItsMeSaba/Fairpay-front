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

interface Args {
    close: () => void
}

export default function SubmitReview(args: Args) {
    const { close } = args; 
    const [rating, setRating] = useState(0);
    const [positiveReview, setPositiveReview] = useState("");
    const [negativeReview, setNegativeReview] = useState("");
    const [position, setPosition] = useState("");

    function handleClosing(e: any) {
        if(e.target !== e.currentTarget) return;
        
        close();
    }

    async function upload() {
        await axios.post("http://localhost:5000/api/userReview", {
            rating,
            positiveReview,
            negativeReview,
            position
        });

        close();
    }

    return (    
        <div className={style.submitReview} onClick={handleClosing}>
            <div className={style.container}>
                <div className={style.left}>
                    <div className={style.avatar}>
                        <Image src={reviewLady3} alt="reviewLady" /> 
                    </div>
                </div>

                <div className={style.right}>
                    <div className={style.startRating}>

                        <div className={style.rating}>
                            <Rating
                                onClick={setRating}
                                ratingValue={rating} /* Available Props */
                                allowHalfIcon={true}
                                
                            />

                            <span className={style.ratingNumber}>{rating/20}/5</span>
                        </div>

                        {/* <input type="text" placeholder="პოზიცია" /> */}
                        <PositionInput setState={setPosition} state={position} />

                        <div className={style.reviewText}>
                            <textarea value={positiveReview} onChange={e => setPositiveReview(e.target.value)} name="" id="" cols={80} rows={11} placeholder="დადებითი"></textarea>
                        </div>

                        <div className={style.reviewText}>
                            <textarea value={negativeReview} onChange={e => setNegativeReview(e.target.value)} name="" id="" cols={80} rows={11} placeholder="უარყოფითი"></textarea>
                        </div>

                        {/* <Submit /> */}
                        <button onClick={upload} className={style.submit}>დამატება</button>
                    </div>
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