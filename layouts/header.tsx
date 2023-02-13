// import style from "../styles/components/header.module.sass";
import style from "styles/components/header.module.sass"
import Image from "next/image"
import bgImage from "../public/images/bg3.jpg"
import Link from 'next/link'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MenuIcon from '@mui/icons-material/Menu';
// import Search from "./search";
import useCheckAuth from "hooks/useCheckAuth";
import { GlobalContext } from "context";
import { useContext} from "react";
import Search from "components/search";
interface Args {
    openAuth: (...args: any) => any
    openSliderMenu: (...args: any) => any
}

export function Header(args: Args) {
    const { openAuth, openSliderMenu } = args;
    // const { user, status } = useCheckAuth();
    const { status } = useContext(GlobalContext).authData;

    return (
        <>
            <header className={style.header}>
                <div className={style.websiteName}>
                    <Link href="/">
                        <h1>
                            Fairpay
                        </h1>
                    </Link>

                    <h6>Tech</h6>

                    <div className={style.pill}>BETA</div>
                </div>

                <div className={style.searchDiv}>
                    <Search />
                </div>


                <ul className={style.links}> 
                    <li>       
                        <Link href="/companies">
                            კომპანიები
                        </Link>
                    </li>

                    <li onClick={openAuth}>
                        <PersonOutlineIcon fontSize="medium" style={{ fill: status === "authenticated" ? "green" : "red" }} />
                    </li>
                </ul>


                <div className={style.burgerButton} onClick={openSliderMenu}>
                    <MenuIcon fontSize="large" />
                </div>
            </header>
        </>
    )
}


function Links() {
    return (
        <ul> 
            <li>
                <Link href="/salaries">
                    ხელფასები
                </Link>
            </li>
            <li>       
                <Link href="/companies">
                    კომპანიები
                </Link>
            </li>
            <li>       
                <Link href="/technologies">
                    ტექნოლოგიები
                </Link>
            </li>
            <li>
                <AccountCircleRoundedIcon fontSize="medium" />
            </li>
        </ul>
    )
}