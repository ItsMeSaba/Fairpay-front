import style from "styles/components/reviews.module.sass"
import { Rating } from 'react-simple-star-rating'
import UserIcon from '@mui/icons-material/AccountCircleRounded';
import ReactionPanel from "components/reactionPanel/reactionPanel";
import mongoose from "mongoose";
import { IReview } from "types";
import LoadMoreButton from "components/buttons/loadMore";

interface ReviewsArgs {
    reviews: IReview[]
}

export default function Reviews(args: ReviewsArgs) {
    const { reviews } = args;
    


    return (
        <div className={style.reviews}>
            {
                reviews.map((review, index) => {
                    return (
                        <Review review={review} key={index} />
                    )
                })
            }
        </div>
    )
}

interface ReviewArgs {
    review: IReview
}

function Review(args: ReviewArgs) {
    let { rating, positiveReview, negativeReview, position, _id, userReaction, likeDislikeDifference } = args.review;

    console.log("Review", args.review);
    return (
        <div className={style.review}>
            <div className={style.user}>
                <div className={style.left}>
                    <UserIcon fontSize="large" />
                </div>

                <div className={style.right}>
                    <div className={style.position}>{ position }</div>
                    
                    <div className={style.rating}>
                        <div className={style.number}>{ rating/20 }</div>
                        
                        <div className={style.stars}> 
                            <Rating
                                ratingValue={rating}
                                initialValue={0}
                                allowHover={false}
                                readonly={true}
                                size={28}                        
                            />
                        </div>
                    </div>
                </div>

            </div>

            <div className={style.positiveReview}>{ positiveReview }</div>
            <div className={style.negativeReview}>{ negativeReview }</div>
            
            {/* ??? */}
            <ReactionPanel reviewId={_id} userReaction={userReaction as "like" | "dislike"} likeDislikeDifference={likeDislikeDifference} />
        </div>
    )
}