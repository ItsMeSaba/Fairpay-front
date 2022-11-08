import style from "styles/components/popups/authPopup.module.sass"
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import { Dispatch, SetStateAction, useContext } from "react";
import useCheckAuth from "hooks/useCheckAuth";
import axios from "axios";
import { rememberCurrentPage } from "functions/sessionStorage/rememberCurrentPage";
import { GlobalContext } from "context";
import loadingGif from "../../public/images/loading.gif"
import Image from "next/image";

interface Args {
    closeAuth: (...args: any) => any
}

export default function AuthPopup(args: Args) {
    const { closeAuth } = args;
    // const { status } = useCheckAuth();
    const { status } = useContext(GlobalContext).authData;

    function handleClosing(e: any) {
        if(e.target !== e.currentTarget) return;
        
        closeAuth();
    }

    async function logout() {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/users/auth/dc`, false, { withCredentials: true });

        if (res.status === 200) location.reload();
    }

    function login() {
        rememberCurrentPage();

        location.replace(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/users/auth/facebook`);
    }
    
    return (
        <div className={style.authPopup} onClick={handleClosing}>
            <div className={style.container}>
                <h2>ავტორიზაცია</h2>
                <br />
                <h4 className={style.important}>ანონიმურობა დაცულია.</h4>
                <br />
                {/* IMPORTANT */}
                <h4 className={style.important}>პირადი ინფორმაცია, რომელიც შეიძლება პირის იდენტიფიცირებისთვის იქნას გამოყენებული, როგორიცაა: სახელი, გვარი, იმეილი, სოციალური ქსელის მისამართი არ გამოიყენება.</h4>
                <br />
                <br />

                {/* { status === "authenticated" && <button className={style.logOut} onClick={() => signOut()}>გასვლა</button> } */}
                { status === "authenticated" && <button className={style.logOut} onClick={logout}>გასვლა</button> }

                { status === "unauthenticated" &&
                    <div className={style.buttons}>
                        {/* <a href="http://localhost:7000/api/users/auth/facebook" onClick={rememberCurrentPage}> */}
                        <div onClick={login}>
                            <FacebookLoginButton
                                // onClick={() => signIn("facebook")}
                                style={{ maxWidth: "400px", width: "100%", padding: "0 50px", borderRadius: "30px" }} 
                            />
                        </div>
                        {/* </a> */}

                        {/* <GoogleLoginButton 
                            onClick={() => signIn("google")} 
                            style={{ width: "400px", boxShadow: "0 0 3px black" }} 
                        /> */}
                    </div>
                }

                { status === "loading" && 
                    <div className={style.buttons} style={{ maxWidth: "90px" }}>
                        <Image src={loadingGif} alt="Gif" />
                    </div>
                }
            </div>
        </div>
    )
}