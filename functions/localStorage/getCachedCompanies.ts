// type getCachedCompaniesReturns = null | {
//     timestamp: number,
//     companies: any[],
// }

import { Company } from "types";

type getCachedCompaniesReturns = null | {
    timestamp: number,
    companies: { [key: string]: Company },
}

export default function getCachedCompanies(): getCachedCompaniesReturns {
    const cachedCompanies = localStorage.getItem("cachedCompanies");

    return cachedCompanies ? JSON.parse(cachedCompanies) : null;
}