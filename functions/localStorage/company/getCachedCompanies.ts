// type getCachedCompaniesReturns = null | {
//     timestamp: number,
//     companies: any[],
// }

import { CompanyType } from "types";

type getCachedCompaniesReturns = null | {
    timestamp: number,
    companies: { [key: string]: CompanyType },
}

export default function getCachedCompanies(): getCachedCompaniesReturns {
    const cachedCompanies = localStorage.getItem("cachedCompanies");

    return cachedCompanies ? JSON.parse(cachedCompanies) : null;
}