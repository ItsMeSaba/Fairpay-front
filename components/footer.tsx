import style from "styles/components/footer.module.sass"
import Link from "next/link"


export default function Footer() {
    return (
        <div className={style.footer}>
            {/* ყველა უფლება დაცულია */}

            <div className={style.list}>
                <a target="_blank" rel="noreferrer" href="https://www.privacypolicygenerator.info/live.php?token=VRzOXte81KlGzx47hYa1EUO7IgHvAfe1">Privacy Policy</a>

                <a target="_blank" rel="noreferrer" href="">დეველოპერთან დაკავშირება</a>
            </div>

            <div className={style.list}>
                <Link href="/info/dataUsage">ინფორმაციის გამოყენება</Link>
            </div>
        </div>
    )
}