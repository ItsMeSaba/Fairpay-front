export interface ReviewProps {
  _id: string,
  rating: number,
  positiveReview: string,
  negativeReview: string,
  position: string,
  userReaction?: "like" | "dislike" | null,
  likeDislikeDifference: number,
}