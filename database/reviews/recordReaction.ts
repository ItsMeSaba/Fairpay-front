import axios from "axios";

interface Response {
    success: boolean,
    finalReaction: null | "like" | "dislike",
    finalLikeDislikeDifference: null | number,
}

export default async function recordReaction(userId: string, reviewId: string, reaction: string) {
    const result = await axios.patch<Response>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/reviews/react`, {
        userId,
        reviewId,
        reaction
    });

    return result.data;
}   