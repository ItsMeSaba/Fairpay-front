import isTimestampValid from "functions/utils/isTimestampValid";
import { Interview } from "types";

interface CachedInterviews {
    interviews: Interview[],
    timestamp: number,
}

export default function getCachedInterviews(companyId: string) {
    const cachedInterviews = localStorage.getItem(`ci-${companyId}`);

    if (cachedInterviews) {
        const parsedData: CachedInterviews = JSON.parse(cachedInterviews);

        if (isTimestampValid(parsedData.timestamp, "3h")) {
            return parsedData;
        } else localStorage.removeItem(`ci-${companyId}`);
    }

    return null;
}