import axios from "axios";
import { IReview } from "types";


export default async function fetchReviews(companyId: string, skip = 0): Promise<IReview[]> {
    // const cachedData = localStorage.getItem(companyId);
    // const url
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/reviews/${companyId}`, {
    // const response = await axios.get(`http://localhost:7000/api/reviews/${companyId}`, {
        params: {
            skip
        }
    });

    return response.data;
}