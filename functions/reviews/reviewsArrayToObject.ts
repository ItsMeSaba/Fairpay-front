import { IReview } from "types";


export default function reviewsArrayToObject(reviewsArray: IReview[]) {
    if (!Array.isArray(reviewsArray) || reviewsArray.length === 0) return {};

    const reviewsObject: { [key: string]: IReview } = {};

    for (let i = 0; i < reviewsArray.length; i++) {
        reviewsObject[reviewsArray[i]._id] = reviewsArray[i];
    }

    return reviewsObject;
}