import axios from "axios";

export default async function addCompanyRequest(companyName: string, companyWebsite?: string) {
    const respone = await axios.post(`/${process.env.API_ENDPOINT}/api/companies/companyRequest`, {
        companyName,
        companyWebsite
    })

    return respone.data;
}