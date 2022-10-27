import isTimestampValid from "functions/utils/isTimestampValid";
import { Vacancies } from "types";

interface cachedVacancies {
    timestamp: number,
    vacancies: Vacancies,
}

type GetCachedVacanciesReturns = null | cachedVacancies;

export default function getCachedVacancies(companyId: string): GetCachedVacanciesReturns {
    const cachedVacancies = localStorage.getItem(`cv-${companyId}`);

    if (cachedVacancies) {
        const parsedData: cachedVacancies = JSON.parse(cachedVacancies);

        if (isTimestampValid(parsedData.timestamp, "3h")) {
            return parsedData;
        } else localStorage.removeItem(`cv-${companyId}`);
    }

    return null;
}