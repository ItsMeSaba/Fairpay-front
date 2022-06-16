import axios from "axios";

interface Response {
    success: boolean,
    finalReaction: null | "like" | "dislike",
    finalLikeDislikeDifference: null | number,
}

export default async function recordReaction(userId: string, reviewId: string, reaction: string) {
    console.log("_----", userId, reviewId, reaction);

    const result = await axios.patch<Response>("http://localhost:7000/api/reviews/react", {
        userId,
        reviewId,
        reaction
    });

    console.log("result", result.data);

    return result.data;
}   