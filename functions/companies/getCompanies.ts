import { fetchCompanies } from "database/functions/company/fetchCompany";
import cacheCompanies from "functions/localStorage/cacheCompanies";
import deleteCachedCompanies from "functions/localStorage/deleteCachedCompanies";
import getCachedCompanies from "functions/localStorage/getCachedCompanies"
import isTimestampValid from "functions/utils/isTimestampValid";
import companiesArrayToOject from "./companiesArrayToObject";

const fetchLimit = 7;
const prefetched = 10;

// export default async function getCompanies(documentsToSkip = 0) {
//     const cachedCompanies = getCachedCompanies();

//     console.log("CACEHD COMPANIES", cachedCompanies);
//     if (cachedCompanies) {
//         const timestamp = cachedCompanies.timestamp;

//         console.log("isTimestampValid(timestamp, 1d)", isTimestampValid(timestamp, "1d"));
//         if (isTimestampValid(timestamp, "1d")) {

//             console.log(cachedCompanies.companies.length, documentsToSkip, prefetched)
//             if (cachedCompanies.companies.length > documentsToSkip - prefetched) {
//                 alert("LOADED FROM CACHE")
//                 return cachedCompanies.companies;
//             }

//         } else deleteCachedCompanies(); 
//     }    

//     const companies = await fetchCompanies(documentsToSkip);

//     cacheCompanies(companies);

//     return companies;
// }

export default async function getCompanies(documentsToSkip = 0) {
    const cachedCompanies = getCachedCompanies();

    const companies = await fetchCompanies(documentsToSkip);

    const companiesObject = companiesArrayToOject(companies);

    cacheCompanies(companiesObject);

    return companiesObject;
}