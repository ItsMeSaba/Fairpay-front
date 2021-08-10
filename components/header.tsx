// import style from "../styles/components/header.module.sass";
import style from "../styles/components/header.module.sass"
import Image from "next/image"
import bgImage from "../public/images/bg3.jpg"

export function Header() {
    return (
        <>
            <header className={style.header}>
                <div>Salaries.ge</div>

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
            <li>Salaries</li>
            <li>Companies</li>
            <li>About</li>
        </ul>
    )
}