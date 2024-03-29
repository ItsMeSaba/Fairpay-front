import style from 'styles/components/sliderMenu.module.sass';
import Link from 'next/link';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import CloseIcon from '@mui/icons-material/Close';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Search from '../components/search';
import clickWithoutPropogation from 'functions/utils/clickWithoutPropogation';
import useCheckAuth from 'hooks/useCheckAuth';
import { useContext } from "react"
import { GlobalContext } from 'context';

interface Args {
    closeSlider: (...args: any) => any
    openSlider: boolean 
    openAuthPopup: (...args: any) => any
}

export function SliderMenu(args: Args) {
    const { closeSlider, openSlider, openAuthPopup } = args;
    // const { status } = useCheckAuth();
    const { status } = useContext(GlobalContext).authData;
    const translate = openSlider ? "translateX(0)" : "translateX(100%)";

    return (
        // <div className={style.container} style={{ transform: translate }} onClick={e => clickWithoutPropogation(e, closeSlider)}>
        <div className={style.container} style={{ transform: translate }}>
            {/* <div className={style.sliderMenu} style={{ transform: translate }}> */}
            <div className={style.sliderMenu} onClick={() => null} >
                <div className={style.top}>
                    <div onClick={openAuthPopup}>
                        <PersonOutlineIcon fontSize="large" style={{ fill: status === "authenticated" ? "green" : "red" }} />
                    </div>

                    <div onClick={closeSlider}> 
                        <CloseIcon fontSize="large" />
                    </div>
                </div>

                <Search width="100%" />

                <ul className={style.links}> 
                    <li onMouseUpCapture={closeSlider}>       
                        <Link href="/companies" >
                            კომპანიები
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}