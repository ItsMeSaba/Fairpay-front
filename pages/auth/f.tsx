import axios from "axios";
import { getPreviousRememberedPage } from "functions/sessionStorage/getPreviousRememberPage";
import { useRouter } from "next/router";
import { useEffect } from "react";


/**
 * Facebook Auth Route
 */
export default function F() {
    const router = useRouter();

    useEffect(() => {
        (async () => {
            if (!router.query.code) return false;

            try {
                const res = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/users/auth/gud`, { code: router.query.code }, { withCredentials: true });
                
                const previousPage = getPreviousRememberedPage();

                if (!previousPage?.url) location.replace("/");

                else location.replace(previousPage.url);
            } catch (e) {
                location.replace("/");
            }
        })()
    }, [router])
    

    return (
        <div></div>
    )    
}
