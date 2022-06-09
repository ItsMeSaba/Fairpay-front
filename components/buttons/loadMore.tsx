import style from "styles/components/buttons/loadMore.module.sass";

interface Args {
    cb: (...args: any[]) => any
}

export default function LoadMoreButton(args: Args) {
    const { cb } = args;

    return (
        <div className={style.container}>
            <button onClick={cb}>მეტის ჩატვირთვა</button>
        </div>
    )
}