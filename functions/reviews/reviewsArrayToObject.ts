import { ReviewType } from "types";


export default function reviewsArrayToObject(reviewsArray: ReviewType[]) {
    if (!Array.isArray(reviewsArray) || reviewsArray.length === 0) return {};

    const reviewsObject: { [key: string]: ReviewType } = {};

    for (let i = 0; i < reviewsArray.length; i++) {
        reviewsObject[reviewsArray[i]._id] = reviewsArray[i];
    }

    return reviewsObject;
}