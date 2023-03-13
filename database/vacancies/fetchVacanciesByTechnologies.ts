

import axios from 'axios';
import { VacancyWithCompany } from 'types';


interface QueryParams {
    technologies?: string[];
    seniorities?: string[];
    page?: number;
}

async function fetchVacanciesByTechnologies(queryParams: QueryParams) {
    try {
        const response = await axios.get<VacancyWithCompany[]>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/vacancies/byTechnologies`, {
            params: queryParams
        });

        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export default fetchVacanciesByTechnologies;