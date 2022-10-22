import fetchUserLikesAndDislikes from "../user/getUserLikesAndDislikes";


/**
 * @returns Array of reviews with field for user reaction 
 */
export default async function addUserReactionField(reviews: any[], userId?: string) {
    if (!userId) return reviews;

    const userLikesAndDislikes = await fetchUserLikesAndDislikes(userId);

    return reviews.map(review => {
        if (userLikesAndDislikes.likedReviews.includes(review._id)) {
            review.userReaction = "like";
        } 

        else if (userLikesAndDislikes.dislikedReviews.includes(review._id)) {
            review.userReaction = "dislike";
        }

        else review.userReaction = null;

        return review;
    })
}