import { Rating } from "react-simple-star-rating";
import styles from "./styles.module.scss"
import { FaRegUser } from "react-icons/fa";
import ReactionPanel from "components/reactionPanel/reactionPanel";
import { ReviewProps } from "./types";

export function Review(props: ReviewProps) {
  let { _id, rating, positiveReview, negativeReview, position, userReaction, likeDislikeDifference } = props;

  return (
    <div className={styles.review}>
      <div className={styles.user}>
        {/* <div className={styles.left}> */}
        <FaRegUser className={styles.userIcon} size={'2.5rem'} />            
        {/* </div> */}

        <div className={styles.right}>
          <div className={styles.position}>{ position }</div>
          
          <div className={styles.rating}>
            {/* <div className={style.number}>{ rating/20 }</div> */}
            
            <div className={styles.stars}> 
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

      { positiveReview.length > 0 && <p className={styles.positiveReview}>{ positiveReview }</p> }

      { negativeReview.length > 0 && <p className={styles.negativeReview}>{ negativeReview }</p> }
      
      <ReactionPanel reviewId={_id} userReaction={userReaction as "like" | "dislike"} likeDislikeDifference={likeDislikeDifference} />
    </div>
  )
}