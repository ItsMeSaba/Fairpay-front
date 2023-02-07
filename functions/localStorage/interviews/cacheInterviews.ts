import mongoDocsArrayToObject from "functions/utils/mongoDocArrayToObject";
import { Interview } from "types";
import getCachedInterviews from "./getCachedInterviews";


// export default function cacheInterviews(companyId: string, interviews: Interview[]) {
//     const cachedVacancies = getCachedInterviews(companyId);
    
//     localStorage.setItem(`cv-${companyId}`, JSON.stringify({
//         interviews: [ ...(cachedVacancies?.interviews ?? []), ...interviews ],
//         timestamp: cachedVacancies?.timestamp ?? Date.now(),
//     }));
// }

export default function cacheInterviews(companyId: string, interviews: Interview[]) {
    const cachedVacancies = getCachedInterviews(companyId);

    localStorage.setItem(`ci-${companyId}`, JSON.stringify({
        interviews: [ ...(cachedVacancies?.interviews ?? []), ...interviews ],
        timestamp: cachedVacancies?.timestamp ?? Date.now(),
    }));
}