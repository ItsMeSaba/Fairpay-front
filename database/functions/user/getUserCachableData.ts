import axios from "axios";


export default async function cacheUserData(userId: string | null) {
    console.log("Caching user data", userId);
    if (!userId) return false;

    const userData = localStorage.getItem("userData");
    
    if (userData) {
        console.log("User data found in cache");
        const parsedData = JSON.parse(userData);
        
        if (isFreshData(parsedData.timeStamp)) {
            console.log("DATA IS FRESH")
            return parsedData;
        }
    }
    
    console.log("Data isnot frech, fetching new data");
    const newData = await axios.post("http://localhost:7000/api/users/getUserCachableData", { userId });

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
