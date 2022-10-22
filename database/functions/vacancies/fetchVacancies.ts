import axios from "axios";
import { fetchVanacyDto } from "dtos";
import mongoose from "mongoose";


// First we check if cached vacancies are available and return them if they are
// Else fetch and cache the vacancies
export default async function fetchVanaciesByCompanyId(companyId: string, options?: { limit?: number, skip?: number }) {
    const cachedData = localStorage.getItem(companyId);

    if (!!cachedData) {
        const parsedData = JSON.parse(cachedData);
        
        if (isFreshData(parsedData.timestamp)) {
            return parsedData.vacancies;
        }
    }

    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/vacancies/companyId/${companyId}`, {
    // const response = await axios.get(`http://localhost:7000/api/vacancies/companyId/${companyId}`, {
        params: {
            limit: options?.limit ?? null,
            skip: options?.skip ?? null,
        }
    });

    // "cv-" stands for "company vacancies"
    localStorage.setItem(`cv-${companyId}`, JSON.stringify({
        vacancies: response.data,
        timestamp: Date.now(),
    }));

    return response.data;
}

function isFreshData(oldTimeStamp: number) {
    // Check if cached data is from last 6 hours
    return (Date.now() - oldTimeStamp) < 1000 * 60 * 60 * 6;
}
