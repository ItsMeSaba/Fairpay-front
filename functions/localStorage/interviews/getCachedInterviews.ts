import isTimestampValid from "functions/utils/isTimestampValid";
import { InterviewType } from "types";

interface CachedInterviews {
    interviews: InterviewType[],
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