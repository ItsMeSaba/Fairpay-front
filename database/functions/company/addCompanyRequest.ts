import axios from "axios";

export default async function addCompanyRequest(companyName: string, companyWebsite?: string) {
    const respone = await axios.post("http://localhost:7000/api/companies/companyRequest", {
        companyName,
        companyWebsite
    })

    return respone.data;
}