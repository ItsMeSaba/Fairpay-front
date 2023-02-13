import isTimestampValid from "functions/utils/isTimestampValid";
import { ReviewType } from "types";

interface CachedReviews {
    timestamp: number,
    reviews: { [key: string]: ReviewType },
}

type GetCachedVacanciesReturns = null | CachedReviews;

export default function getCachedReviews(companyId: string): GetCachedVacanciesReturns {
    const cachedReviews = localStorage.getItem(`cr-${companyId}`);

    if (cachedReviews) {
        const parsedData: CachedReviews = JSON.parse(cachedReviews);

        if (isTimestampValid(parsedData.timestamp, "3h")) {
            return parsedData;
        } else localStorage.removeItem(`cr-${companyId}`);
    }

    return null;
}