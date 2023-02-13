

import axios from 'axios';

interface SalaryData {
    // Your salary data interface goes here
}

interface QueryParams {
    technologies?: string[];
    seniority?: string;
}

async function fetchVacanciesByTechnologies(queryParams: QueryParams) {
    try {
        const response = await axios.get<SalaryData>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/vacancies/byTechnologies`, {
            params: queryParams
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export default fetchVacanciesByTechnologies;