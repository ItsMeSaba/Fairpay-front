import axios from "axios";
import { getPreviousRememberedPage } from "functions/sessionStorage/getPreviousRememberPage";
import { useRouter } from "next/router";
import { useEffect } from "react"


export default function Co() {
    const router = useRouter();

    useEffect(() => {
        (async () => {
            if (!router.query.code) return false;
            
            // const res = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/users/auth/gud`, { tk: router.query.tk }, { withCredentials: true });
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/users/getUserIdFromCode`, { code: router.query.code }, { withCredentials: true });
            
            const previousPage = getPreviousRememberedPage();

            if (!previousPage?.url) location.replace("/");

            else location.replace(previousPage.url);
        })()
    }, [router])
    

    return (
        <div></div>
    )
}