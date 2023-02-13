import LoadMoreButton from "components/buttons/loadMore";
import Reviews from "components/review/reviews";
import { GlobalContext } from "context";
import addUserReactionField from "database/reviews/addUserReactionField";
import fetchReviews from "database/reviews/fetchReviews";
import fetchUserLikesAndDislikes from "database/user/getUserLikesAndDislikes";
import fetchVanacies from "database/vacancies/fetchVacanciesByCompanyId";
import cacheReviews from "functions/localStorage/reviews/cacheReviews";
import getCachedReviews from "functions/localStorage/reviews/getCachedReviews";
import reviewsArrayToObject from "functions/reviews/reviewsArrayToObject";
import useCheckAuth from "hooks/useCheckAuth";
import { useEffect, useRef, useState, useContext } from "react";
import { ReviewType } from "types";

interface Args {
    companyId: string
}

export default function CompanyReviews(args: Args) {
    const { companyId } = args;
    const [reviews, setReviews] = useState<{ [key: string]: ReviewType }>({});
    const skip = useRef(0);
    const isFirstRun = useRef(true);
    const areReviewsLeft = useRef(true);
    const isFirstFetchDone = useRef(false);
    const loadedFromCache = useRef(false);
    const { user } = useContext(GlobalContext).authData;

    async function fetch(reset = false) {
        // let reviews = await fetchReviews(companyId, skip.current);
        
        // if (!loadedFromCache.current) {
        //     const cachedReviews = getCachedReviews(companyId);

        //     loadedFromCache.current = true;
        //     if (cachedReviews) {
        //         console.log("LOADING FROM CACHE")
        //         skip.current += Object.values(cachedReviews.reviews).length;
        //         return setReviews(currentReviews => reset ? cachedReviews.reviews : { ...currentReviews, ...cachedReviews.reviews });
        //     }
        // }
        
        const fetchedReviews = await fetchReviews(companyId, skip.current);

        if (fetchedReviews.length === 0) areReviewsLeft.current = false;

        else {
            skip.current += fetchedReviews.length;
        }
        
        const reviewsWithUserReaction = fetchedReviews.length > 0 ? await addUserReactionField(fetchedReviews, user?.id) : [];

        const reviewsObject = reviewsArrayToObject(reviewsWithUserReaction);
        // cacheReviews(companyId, reviewsObject);

        if (!isFirstFetchDone.current) isFirstFetchDone.current = true;

        setReviews(reviews => reset ? reviewsObject : { ...reviews, ...reviewsObject })
    }

    useEffect(() => {
        isFirstFetchDone.current = false;
        isFirstRun.current = true;
        areReviewsLeft.current = true;

        skip.current = 0;
        
        fetch(isFirstRun.current);
    }, [companyId]);

    return (
        <div style={{ padding: "1rem 0" }}>
            { Object.values(reviews).length > 0 && <Reviews reviews={Object.values(reviews) as any} /> }

            { areReviewsLeft.current && <LoadMoreButton cb={() => fetch(false)} /> }

            { Object.values(reviews).length === 0 && isFirstFetchDone.current &&
                <h1 
                    style={{ 
                        color:"white", 
                        textAlign: "center", 
                        padding: "15rem 0", 
                    }}>
                    შეფასებები არ მოიძებნა
                </h1> 
            }
        </div>
    )
}