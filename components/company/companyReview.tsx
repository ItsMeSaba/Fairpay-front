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

    async function fetch(reset = false) {
        let reviews = await fetchReviews(companyId, skip.current);

        if (reviews.length === 0) areReviewsLeft.current = false;
        else skip.current += reviews.length;

        const reviewsWithUserReaction = reviews.length > 0 ? await addUserReactionField(reviews, userData?.user.userId) : [];

        setReviews(reviews => reset ? reviewsWithUserReaction : [...reviews, ...reviewsWithUserReaction])
    }

    useEffect(() => {
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
            <Reviews reviews={reviews as any} />

            { areReviewsLeft.current && <LoadMoreButton cb={() => fetch(false)} /> }
        </div>
    )
}