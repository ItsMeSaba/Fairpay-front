import style from 'styles/components/sliderMenu.module.sass';
import Link from 'next/link';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import CloseIcon from '@mui/icons-material/Close';

interface Args {
    closeSlider: (...args: any) => any
    openSlider: boolean 
    openAuthPopup: (...args: any) => any
}

export function SliderMenu(args: Args) {
    const { closeSlider, openSlider, openAuthPopup } = args;

    const translate = openSlider ? "translateX(0)" : "translateX(100%)";

    return (
        <div className={style.sliderMenu} style={{ transform: translate }}>
            <div className={style.top}>
                {/* <AccountCircleRoundedIcon fontSize="medium" style={{ fill: status === "authenticated" ? "green" : "red" }} /> */}
                <div onClick={openAuthPopup}>
                    <AccountCircleRoundedIcon fontSize="large" />
                </div>

                <div onClick={closeSlider}> 
                    <CloseIcon fontSize="large" />
                </div>
            </div>

            <ul className={style.links}> 
                {/* <li>
                    <Link href="/salaries">
                        ხელფასები
                    </Link>
                </li> */}
                <li>       
                    <Link href="/companies">
                        კომპანიები
                    </Link>
                </li>
                {/* <li>       
                    <Link href="/technologies">
                        ტექნოლოგიები
                    </Link>
                </li> */}
                {/* <li>
                </li> */}
            </ul>
        </div>
    )
}