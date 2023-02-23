import axios from "axios";
import { fetchVanacyDto } from "dtos";
import mongoose from "mongoose";
import { Vacancy } from "types";


interface Options {
    page: number
}

export default async function fetchVanaciesByCompanyId(companyId: string, options: Options) {
    const { page } = options;

    const response = await axios.get<Vacancy[]>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/vacancies/companyId/${companyId}`, {
        // const response = await axios.get(`http://localhost:7000/api/vacancies/companyId/${companyId}`, {
        params: {
            // limit: options?.limit ?? null,
            // skip: options?.skip ?? null,
            // dateOfLastVacancy: options?.dateOfLastVacancy,
            page
        }
    });

    // "cv-" stands for "company vacancies"
    return response.data;
}

function isFreshData(oldTimeStamp: number) {
    // Check if cached data is from last 6 hours
    return (Date.now() - oldTimeStamp) < 1000 * 60 * 60 * 6;
}
