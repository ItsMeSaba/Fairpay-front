import { CSSProperties } from "react";
import style from "styles/components/buttons/loadMore.module.sass";

interface Args {
    cb: (...args: any[]) => any,
    buttonColor?: string,
    style: CSSProperties
}

export default function LoadMoreButton(args: Args) {
    const { cb, buttonColor, style: customStyle } = args;

    return (
        <div className={style.container}>
            <button onClick={cb} style={{ backgroundColor: buttonColor, ...customStyle }}>მეტის ჩატვირთვა</button>
        </div>
    )
}