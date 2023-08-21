import getTechnologyImage from "functions/technologies/getTechnologyImage/getTechnologyImage"
import Image from "next/image"
import style from "./technologies.module.sass"

interface Args {
    technologies: string[]
}

export default function Technologies({ technologies }: Args) {
    return (
        <div className={style.technologies}>
            { technologies.map(technology => <Technology technology={technology} key={technology} />) }
        </div>
    )
}

interface TechnologyArgs {
    technology: string
}

function Technology({ technology }: TechnologyArgs) {
    const image = getTechnologyImage(technology);
    
    if (!image) return null;

    return (
        <div className={style.technology}>
            <img src={image} alt={technology} title={technology} />
        </div>
    )
}