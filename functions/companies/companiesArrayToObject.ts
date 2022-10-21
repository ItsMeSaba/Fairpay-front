import { Companies, Company } from "types";

export default function companiesArrayToOject(companiesArray: Companies) {
    const obj: { [key: string]: Company } = {};

    for (let i = 0; i < companiesArray.length; i++) {
        obj[String(companiesArray[i]._id)] = companiesArray[i]; 
    }

    return obj;
}