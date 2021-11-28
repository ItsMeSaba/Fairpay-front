import axios from "axios";


export default async function fetchVanacies(filters: Record<string, string[]>) {
    const results = await axios.post<any[]>("http://localhost:5000/api/vacancies", { filters });
        
    return results.data;
}
