import axios from "axios";


export default async function cacheUserData(userId: string | null) {
    console.log("Caching user data", userId);
    if (!userId) return false;

    const userData = localStorage.getItem("userData");
    
    if (userData) {
        const parsedData = JSON.parse(userData);
        
        if (isFreshData(parsedData.timeStamp)) {
            return parsedData;
        }
    }
    
    const newData = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/users/getUserCachableData`, { userId });

    localStorage.setItem("userData", JSON.stringify({
        user: newData.data,
        timeStamp: Date.now(),
    }));

    return newData.data;
}


function isFreshData(oldTimeStamp: number) {
    // Check if cached data is from last 12 hours
    return (Date.now() - oldTimeStamp) < 1000 * 60 * 60 * 12;
}
