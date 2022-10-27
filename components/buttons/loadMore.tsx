import style from "styles/components/buttons/loadMore.module.sass";

interface Args {
    cb: (...args: any[]) => any,
    buttonColor?: string
}

export default function LoadMoreButton(args: Args) {
    const { cb, buttonColor } = args;

    return (
        <div className={style.container}>
            <button onClick={cb} style={{ backgroundColor: buttonColor }}>მეტის ჩატვირთვა</button>
        </div>
    )
}