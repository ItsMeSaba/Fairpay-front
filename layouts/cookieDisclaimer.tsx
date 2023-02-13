
import { useEffect, useState } from "react"
import style from "styles/components/cookieDisclaimer.module.sass"

export default function CookieDisclaimer() {
    const [display, setDisplay] = useState(false);


    function handleAccept() {
        // dac - did accept cookies
        localStorage.setItem("dac", JSON.stringify(true));
        
        setDisplay(false);
    }
    
    useEffect(() => {
        const hasAlreadyAccepted = JSON.parse(localStorage.getItem("dac") ?? "false");

        if (!hasAlreadyAccepted) setDisplay(true);
    }, [])

    
    if (!display) return null;

    return (
        <div className={style.cookieDisclaimer}>
            <div></div>
            
            <p>Website is using cookies</p>

            <button onClick={handleAccept}>Accept</button>
        </div>
    )
}