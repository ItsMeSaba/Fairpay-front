import axios from "axios";


interface UserLikesAndDislikes {
    likedReviews: string[],
    dislikedReviews: string[],
}

export default async function fetchUserLikesAndDislikes(userId: string | null | undefined) {
    if (!userId) {
        return {
            likedReviews: [] as string[],
            dislikedReviews: [] as string[],
        }
    }

    // const cached = localStorage.getItem("LDs");

    // if (cached) return JSON.parse(cached); 

    const userLikesAndDislikes = await axios.post<UserLikesAndDislikes>("http://localhost:7000/api/users/getUserLikesAndDislikes", { userId });

    // LDs stands for "likes and dislikes"
    // localStorage.setItem("LDs", JSON.stringify(userLikesAndDislikes.data));

    return userLikesAndDislikes.data;
}