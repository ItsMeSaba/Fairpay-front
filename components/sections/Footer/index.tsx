import styles from "./styles.module.scss"
import Link from "next/link"
import Image from "next/image"
import UkraineFlag from "images/UA.png"

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.list}>
        <a target="_blank" rel="noreferrer" href="https://www.privacypolicygenerator.info/live.php?token=VRzOXte81KlGzx47hYa1EUO7IgHvAfe1">Privacy Policy</a>

        <a target="_blank" rel="noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&to=sbsilagadze@gmail.com&su=Fairpay">დეველოპერთან დაკავშირება</a>  
      </div>

      <div className={styles.list}>
        <Link href="/info/dataUsage">ინფორმაციის გამოყენება</Link>

        <Link href="/info/destination">მიზანი</Link>
      </div>

      <a className={styles.deleteRequest} target="_blank" rel="noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&to=fairpay.ge@gmail.com&su=ინფორმაციის წაშლა">დაკავშირება წაშლის მოთხოვნასთან დაკავშირებით</a>
  
      <div className={styles.flag}>
        <p className={styles.label}>Fairpay stands with Ukraine</p>

        <Image width={40} height={40} alt="UkraineFlag" src={UkraineFlag} />
      </div>
    </footer>
  )
}