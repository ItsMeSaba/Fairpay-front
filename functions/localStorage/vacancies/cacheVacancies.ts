import { Vacancies } from "types";
import getCachedVacancies from "./getCachedVacancies";

export default function cacheVacancies(companyId: string, vacancies: Vacancies) {
    const cachedVacancies = getCachedVacancies(companyId);
    
    localStorage.setItem(`cv-${companyId}`, JSON.stringify({
        vacancies: [ ...(cachedVacancies?.vacancies ?? []), ...vacancies ],
        timestamp: cachedVacancies?.timestamp ?? Date.now(),
    }));
}