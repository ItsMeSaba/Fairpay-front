import axios from "axios";
import { InterviewType } from "types";

interface Options {
    dateOfLastInterview: Date | string | null
}

export default async function fetchInterviews(companyId: string, options: Options) {
    const { dateOfLastInterview } = options;
    
    console.log("dateOfLastInterview", dateOfLastInterview);
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/interviews/${companyId}`, {
    // const response = await axios.get(`http://localhost:7000/api/reviews/${companyId}`, {
        params: {
            dateOfLastInterview
        }
    });
    
    console.log("response", response);

    return response.data as InterviewType[];
}