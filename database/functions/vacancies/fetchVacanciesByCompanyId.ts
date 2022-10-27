import axios from "axios";
import { fetchVanacyDto } from "dtos";
import mongoose from "mongoose";


interface Options {
    companyId: string,
    option: {
        limit?: number, 
        skip?: number, 
        dateOfLastVacancy: Date | null,
    }
}

export default async function fetchVanaciesByCompanyId(companyId: string, options: { limit?: number, skip?: number, dateOfLastVacancy: Date | null }) {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/vacancies/companyId/${companyId}`, {
    // const response = await axios.get(`http://localhost:7000/api/vacancies/companyId/${companyId}`, {
        params: {
            limit: options?.limit ?? null,
            skip: options?.skip ?? null,
            dateOfLastVacancy: options.dateOfLastVacancy,
        }
    });

    console.log("response.data?.[0].companyId", response.data?.[0]?.companyId, typeof response.data?.[0]?.companyId);

    // "cv-" stands for "company vacancies"
    return response.data;
}

function isFreshData(oldTimeStamp: number) {
    // Check if cached data is from last 6 hours
    return (Date.now() - oldTimeStamp) < 1000 * 60 * 60 * 6;
}
