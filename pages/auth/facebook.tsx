import axios from "axios";
import { useEffect } from "react"


export default function FacebookAuth() {
    console.log("ON PAGE FACEBOOK AUTH")
    useEffect(() => {
        axios.get("http://localhost:5000/api/auth/facebook").then(console.log)
    }, []);

    return (
        <h1>TEST</h1>
    )
}