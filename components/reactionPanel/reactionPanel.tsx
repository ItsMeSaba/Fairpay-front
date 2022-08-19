import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import ThumbDownRoundedIcon from '@mui/icons-material/ThumbDownRounded';
import style from "styles/components/reactionPanel.module.sass"
import { useSession } from 'next-auth/react';
import { useContext, useState } from 'react';
import { GlobalContext } from 'context';
import recordReaction from "../../database/functions/reviews/recordReaction"

interface Args {
    userReaction: "like" | "dislike" | null,
    reviewId: string,
    likeDislikeDifference: number,
}

export default function ReactionPanel(args: Args) {
    const { userReaction, reviewId, likeDislikeDifference } = args;
    const [currentUserReaction, setCurrentUserReaction] = useState<"like" | "dislike" | null>(userReaction);
    const [currentLikeDislikeDifference, setCurrentLikeDislikeDifference] = useState(likeDislikeDifference);
    const { data: userData, status } = useSession();
    const { openAuthPopup } = useContext(GlobalContext);

    async function handleClick(reaction: "like" | "dislike" | "unlike" | "undislike") {
        console.log("handleClick", reaction);

        if (!userData?.user.userId) return openAuthPopup();

        const result = await recordReaction(userData.user.userId, reviewId, reaction);

        if (result.success) {
            setCurrentLikeDislikeDifference(result.finalLikeDislikeDifference as number);
            setCurrentUserReaction(result.finalReaction);
        }   
    }


    console.log("ReactionPanel", currentLikeDislikeDifference   );
    return (
        <div className={style.reactionPanel}>
            {/* <div className={style.like}>
                <div className={style.count}>{ currentLikeCount }</div>

                <ThumbUpRoundedIcon 
                    color={currentUserReaction === "like" ? "primary" : "disabled"}
                    onClick={() => handleClick(currentUserReaction === "like" ? "unlike" : "like")}
                />
                </div>
                
                <div className={style.unlike}>
                <div className={style.count}>{ currentDislikeCount }</div>

                <ThumbDownRoundedIcon 
                    color={currentUserReaction === "dislike" ? "primary" : "disabled"}
                    onClick={() => handleClick(currentUserReaction === "dislike" ? "undislike" : "dislike")}
                />
            </div> */}
            <div className={style.container}>
                <ThumbUpRoundedIcon 
                    color={currentUserReaction === "like" ? "primary" : "disabled"}
                    onClick={() => handleClick(currentUserReaction === "like" ? "unlike" : "like")}
                />

                <div className={style.count}>{ currentLikeDislikeDifference }</div>

                
                <ThumbDownRoundedIcon 
                    color={currentUserReaction === "dislike" ? "error" : "disabled"}
                    onClick={() => handleClick(currentUserReaction === "dislike" ? "undislike" : "dislike")}
                />
            </div>
        </div>
    )
}