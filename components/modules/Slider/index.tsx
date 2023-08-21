import { GlobalContext } from "context";
import { useContext } from "react";
import Link from "next/link"
import styles from "./styles.module.scss"
import CloseIcon from '@mui/icons-material/Close';
import Search from "components/search";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { SliderProps } from "./types";

export function Slider(args: SliderProps) {
  const { close, isOpen, openAuthPopup } = args;
  const { status } = useContext(GlobalContext).authData;
  const translate = isOpen ? "translateX(0)" : "translateX(100%)";

  return (
    <div className={styles.slider} style={{ transform: translate }}>
      <div className={styles.container}>

        <div className={styles.top}>
          <div onClick={openAuthPopup}>
            <PersonOutlineIcon fontSize="large" style={{ fill: status === "authenticated" ? "green" : "red" }} />
          </div>

          <div onClick={close}>
            <CloseIcon fontSize="large" />
          </div>
        </div>

        <Search width="100%" />

        <ul className={styles.links}> 
          <li className={styles.link} onMouseUpCapture={close}>       
            <Link href="/companies" >
              კომპანიები
            </Link>
          </li>
        </ul>

      </div>
    </div>
  )
}