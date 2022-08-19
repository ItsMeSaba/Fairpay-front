import LoadMoreButton from "components/buttons/loadMore";
import Reviews from "components/review/reviews";
import dummyData from "components/salaryItems/dummyData";
import { SalaryItems } from "components/salaryItems/salaryItems";
import addUserReactionField from "database/functions/reviews/addUserReactionField";
import fetchReviews from "database/functions/reviews/fetchReviews";
import fetchUserLikesAndDislikes from "database/functions/user/getUserLikesAndDislikes";
import fetchVanacies from "database/functions/vacancies/fetchVacancies";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";

interface Args {
    companyId: string
}

interface IReview {
    rating: number,
    positiveReview: string,
    negativeReview: string,
    position: string,
    userReaction: string | null,
}

export default function CompanyReviews(args: Args) {
    const { companyId } = args;
    const [reviews, setReviews] = useState<any[]>([]);
    const { data: userData } = useSession();
    const skip = useRef(0);
    const isFirstRun = useRef(true);
    const areReviewsLeft = useRef(true);
    const isFirstFetchDone = useRef(false);

    async function fetch(reset = false) {
        let reviews = await fetchReviews(companyId, skip.current);

        if (reviews.length === 0) areReviewsLeft.current = false;
        else skip.current += reviews.length;

        const reviewsWithUserReaction = reviews.length > 0 ? await addUserReactionField(reviews, userData?.user.userId) : [];

        if (!isFirstFetchDone.current) isFirstFetchDone.current = true;

        setReviews(reviews => reset ? reviewsWithUserReaction : [...reviews, ...reviewsWithUserReaction])
    }

    useEffect(() => {
        isFirstFetchDone.current = false;
        isFirstRun.current = true;
        areReviewsLeft.current = true;

        console.log("USE EFFECT [companyId] --------------------->");

        skip.current = 0;
        
        fetch(isFirstRun.current);
    }, [companyId]);

    return (
        // <SalaryItems vacancies={vacancies} />
        <div>
            {/* <Reviews reviews={reviews as IReview[]} /> */}
            { reviews.length > 0 && <Reviews reviews={reviews as any} /> }

            { areReviewsLeft.current && <LoadMoreButton cb={() => fetch(false)} /> }

            { reviews.length === 0 && isFirstFetchDone.current && <h1 style={{ textAlign: "center", padding: "4rem 0" }}>შეფასებები არ მოიძებნა</h1> }
        </div>
    )
}