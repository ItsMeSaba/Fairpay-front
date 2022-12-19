import style from "styles/components/footer.module.sass"
import Link from "next/link"
import Image from "next/image"
import UA from "../public/images/UA.png"

export default function Footer() {
    return (
        <>
        {/* <div className={style.waveOne}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={style.shapeFill}></path>
            </svg>
        </div> */}
        <div className={style.footer}>
            {/* ყველა უფლება დაცულია */}

            <div className={style.list}>
                <a target="_blank" rel="noreferrer" href="https://www.privacypolicygenerator.info/live.php?token=VRzOXte81KlGzx47hYa1EUO7IgHvAfe1">Privacy Policy</a>

                <a target="_blank" rel="noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&to=sbsilagadze@gmail.com&su=Fairpay">დეველოპერთან დაკავშირება</a>

            </div>

            <div className={style.list}>
                <Link href="/info/dataUsage">ინფორმაციის გამოყენება</Link>

                <Link href="/info/destination">მიზანი</Link>
            </div>

            <a className={style.deleteRequest} target="_blank" rel="noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&to=fairpay.ge@gmail.com&su=ინფორმაციის წაშლა">დაკავშირება წაშლის მოთხოვნასთან დაკავშირებით</a>
        
            <div className={style.Ukraine}>
                <p>Fairpay stands with Ukraine</p>

                <Image width="40px" height="40px" src={UA} />
            </div>
        </div>
        </>
    )
}