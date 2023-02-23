import technologyImages from "./technologyImages";


export default function getTechnologyImage(technology: string) {
    return technologyImages[technology] ?? null;
}