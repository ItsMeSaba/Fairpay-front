import { CompanyType } from "types";

export default function companiesArrayToOject(companiesArray: CompanyType[]) {
    const obj: { [key: string]: CompanyType } = {};

    for (let i = 0; i < companiesArray.length; i++) {
        obj[String(companiesArray[i]._id)] = companiesArray[i]; 
    }

    return obj;
}