import axios from "axios";
import { getPreviousRememberedPage } from "functions/sessionStorage/getPreviousRememberPage";
import { useRouter } from "next/router";
import { useEffect } from "react"


export default function Co() {
    const router = useRouter();

    console.log(router.query);

    useEffect(() => {
        (async () => {
            if (!router.query.tk) return false;
            
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/users/auth/gud`, { tk: router.query.tk }, { withCredentials: true });
            
            const previousPage = getPreviousRememberedPage();

            if (!previousPage?.url) location.replace("/");

            else location.replace(previousPage.url);
        })()
    }, [router])
    

    return (
        <div></div>
    )
}