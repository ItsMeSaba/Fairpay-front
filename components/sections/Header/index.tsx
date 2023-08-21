import { useState } from "react";
import Search from "components/search"
import styles from "./styles.module.scss"
import Link from "next/link"
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { HeaderProps } from "./types";
import { useContext } from "react";
import { GlobalContext } from "context";
import { Slider } from "components/modules/Slider";

export function Header({ openAuth, openSliderMenu }: HeaderProps) {
  const { status } = useContext(GlobalContext).authData;
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Slider isOpen={isSliderOpen} close={() => setIsSliderOpen(false)} openAuthPopup={() => null} />

      <div className={styles.websiteInfo}>
        <Link href="/">
          <h1 className={styles.name}>
            Fairpay
          </h1>
        </Link>

        <h6 className={styles.category}>Tech</h6>

        <div className={styles.pill}>BETA</div>
    </div>

      <div className={styles.searchDiv}>
          <Search />
      </div>


      <ul className={styles.links}> 
        <li className={styles.pageLinks}>       
          <Link className={styles.link} href="/salaries">
            ანაზღაურებები
          </Link>

          <Link className={styles.link} href="/companies">
            კომპანიები
          </Link>
        </li>

        <li className={styles.authLink} onClick={openAuth}>
            <PersonOutlineIcon fontSize="medium" style={{ fill: status === "authenticated" ? "green" : "red" }} />
        </li>
      </ul>


      {/* <div className={styles.burgerButton} onClick={openSliderMenu}> */}
      <div className={styles.burgerButton} onClick={() => setIsSliderOpen(true)}>
        <MenuIcon fontSize="medium" />
      </div>
    </header>
  )
}