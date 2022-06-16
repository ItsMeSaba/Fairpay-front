import axios from "axios";
import mongoose from "mongoose";

interface CompanyInfo {
    _id?: mongoose.Types.ObjectId;
    name?: string;
    urlName?: string;
    // vacancyCount: number
    // reviewCount: number
}

export async function fetchCompany(companyId: number) {
    // const response = await axios.post("${process.env.API_ENDPOINT}/api/company", {
    //     ...company,
    // });
    // return response.data;

    const response = await axios.get(`${process.env.API_ENDPOINT}/api/companies/company/${companyId}`);
    
    return response.data;
}

export async function fetchCompanyByUrlName(urlName: string) {
    const response = await axios.get(`${process.env.API_ENDPOINT}/api/companies/companyByUrlName/${urlName}`);
    
    return response.data;
}

export async function fetchCompanies(documentsToSkip = 0, documentsToFetch = 10) {
    const response = await axios.get(`${process.env.API_ENDPOINT}/api/companies`, {
        params: {
            skip: documentsToSkip,
            limit: documentsToFetch,
        }
    });

    return response.data;
}

export async function suggestCompanyBySearch(search: string) {
    const response = await axios.get<CompanyInfo[]>(
        `${process.env.API_ENDPOINT}/api/companies/suggestCompanyBySearch`,
        { params: { search } }
    );

    return response.data;
}
