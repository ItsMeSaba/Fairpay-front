import { IReview } from "types";
import getCachedReviews from "./getCachedReviews";

export default function cacheReviews(companyId: string, reviews: { [key: string]: IReview }) {
    const cachedReviews = getCachedReviews(companyId);
    
    localStorage.setItem(`cr-${companyId}`, JSON.stringify({
        reviews: { ...(cachedReviews?.reviews ?? {}), ...reviews },
        timestamp: cachedReviews?.timestamp ?? Date.now(),
    }));
}