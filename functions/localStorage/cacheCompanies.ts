import { Company } from "types";
import getCachedCompanies from "./getCachedCompanies"

// export default function cacheCompanies(companies: any[]) {
//     const alreadyCachedCompanies = getCachedCompanies();
//     let companiesToCache: any[] = [];
//     const timestamp = alreadyCachedCompanies?.timestamp;

//     if (alreadyCachedCompanies) companiesToCache = alreadyCachedCompanies.companies; 

//     companiesToCache.push(...companies);
//     alert("SETTING CACHED COMPANIES IN LOCALST")

//     localStorage.setItem("cachedCompanies", JSON.stringify({
//         companies: companiesToCache,
//         timestamp,
//     }))
// }

export default function cacheCompanies(companies: { [key: string]: Company }) {
    const alreadyCachedCompanies = getCachedCompanies();

    // alert("SETTING CACHED COMPANIES IN LOCALST")

    localStorage.setItem("cachedCompanies", JSON.stringify({
        companies: { ...(alreadyCachedCompanies?.companies ?? {}), ...companies },
        timestamp: alreadyCachedCompanies?.timestamp ?? Date.now(),
    }))
}