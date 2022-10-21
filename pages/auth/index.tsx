import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';  
import { useRouter } from 'next/router'

export default function Index() {
    // const navigate = useNavigate();
    const router = useRouter();

    useEffect(() => {
        router.replace("/")
        // router.replace("/auth#_=_", "/", { shallow: true })
        // router.replace("/auth", "/", { shallow: false })
        // location.href="http://localhost:3000/"
    }, [])

    return (
        <div>
            {/* <button onClick={() => router.replace('/')}>MOVE ON</button> */}
        </div>
    );
}