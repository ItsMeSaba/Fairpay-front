import style from "styles/components/popups/authPopup.module.sass"
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import { Dispatch, SetStateAction } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

interface Args {
    closeAuth: (...args: any) => any
}

export default function AuthPopup(args: Args) {
    const { closeAuth } = args;
    const { status } = useSession();

    function handleClosing(e: any) {
        if(e.target !== e.currentTarget) return;
        
        closeAuth();
    }

    return (
        <div className={style.authPopup} onClick={handleClosing}>
            <div className={style.container}>
                <h2>აუთენთიკაცია</h2>
                <br />
                <h4>ანონიმურობა დაცულია, პირადი ინფორმაცია არ გამოიყენება საიტზე</h4>
                <br />
                <br />

                { status === "authenticated" && <button className={style.logOut} onClick={() => signOut()}>გასვლა</button> }

                { status === "unauthenticated" && 
                    <div className={style.buttons}>
                        <FacebookLoginButton onClick={() => signIn("facebook")} style={{ width: "400px", boxShadow: "0 0 3px black" }} />

                        <GoogleLoginButton onClick={() => signIn("google")} style={{ width: "400px", boxShadow: "0 0 3px black" }} />
                    </div>
                }
            </div>
        </div>
    )
}