import axios from "axios";
import mongoose from "mongoose";
import { CompanySearchResultType, CompanyType } from "types";

export async function fetchCompany(companyId: number) {
    // const response = await axios.post("${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/company", {
    //     ...company,
    // });
    // return response.data;

    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/companies/company/${companyId}`);

    return response.data;
}

export async function fetchCompanyByUrlName(urlName: string) {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/companies/companyByUrlName/${urlName}`);
    // const response = await axios.get(`http://localhost:7000/api/companies/companyByUrlName/${urlName}`);

    return response.data;
}

export async function fetchCompanies(page: number, documentsToFetch = 10): Promise<CompanyType[]> {
    // const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/companies`, {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/companies`, {
        params: {
            skip: page,
            limit: documentsToFetch,
            page: page
        }
    });

    return response.data;
}

export async function fetchCompaniesWithTechnologies(page: number, documentsToFetch = 10): Promise<CompanyType[]> {
    // const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/companies`, {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/companies/withTechnologies`, {
        params: {
            skip: page,
            limit: documentsToFetch,
            page: page
        }
    });

    return response.data;
}

export async function suggestCompanyBySearch(search: string) {
    const response = await axios.get<CompanySearchResultType[]>(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/companies/suggestCompanyBySearch`,
        { params: { search } }
    );

    return response.data;
}
