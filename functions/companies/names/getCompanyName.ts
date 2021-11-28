import { ValidCompanyNames } from "types";
import companyNames from "./companyNames";


/**
 * @returns Normalized company name
 */
export default function getCompanyName(companyName: string) {
    // Checks if name is already normalized one
    if (!!companyNames[companyName as ValidCompanyNames]) return companyName;

    const validNames = Object.keys(companyNames);
    const names = Object.values(companyNames);

    for (let i = 0; i < names.length; i++) {
        if (names[i].includes(companyName)) return validNames[i];
    }

    return companyName;
}