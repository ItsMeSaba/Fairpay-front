import axios from "axios";
import { ReviewType } from "types";

interface Options {
    page: number
}

export default async function fetchReviews(companyId: string, options: Options) {
    // const cachedData = localStorage.getItem(companyId);
    // const url
    const response = await axios.get<ReviewType[]>(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/reviews/${companyId}`, {
        // const response = await axios.get(`http://localhost:7000/api/reviews/${companyId}`, {
        params: {
            page: options.page
        }
    });

    return response.data;
}