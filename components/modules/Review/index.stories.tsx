import { Review as ReviewComponent } from "./index"

export function Review() {
  return (
    <ReviewComponent
      _id=""
      likeDislikeDifference={5}
      negativeReview="It's very bad"
      positiveReview="It's very good"
      position="Front End Developer"
      rating={5}
      userReaction={'like'}
    />
  )
}

const story = {
  title: "Components/Modules/Review",
  component: Review,
  args: {},
}

export default story;  