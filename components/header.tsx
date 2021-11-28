// import style from "../styles/components/header.module.sass";
import style from "../styles/components/header.module.sass"
import Image from "next/image"
import bgImage from "../public/images/bg3.jpg"
import Link from 'next/link'

export function Header() {
    return (
        <>
            <header className={style.header}>
                <div>
                    <Link href="/">
                        Salaries.ge
                    </Link>
                </div>

                <div></div>

                <div>
                    <Links />
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
            <li>მიზანი</li>
        </ul>
    )
}