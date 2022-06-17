import axios from "axios";


export default async function fetchReviews(companyId: string, skip = 0) {
    const cachedData = localStorage.getItem(companyId);

    const response = await axios.get(`/${process.env.API_ENDPOINT}/api/reviews/${companyId}`, {
        params: {
            skip
        }
    });

    return response.data;
}