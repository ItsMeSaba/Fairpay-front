import style from "styles/components/button.module.sass"

interface Args {
    text: string
    styles?: Record<string, string>
}

export default function pillButton(args: Args) {
    const { text, styles } = args;

    return (
        <div className={style.button} style={styles}>{ text }</div>
    )
}