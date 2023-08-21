import { TechnologyNamesProps } from "./types";
import styles from "./styles.module.scss"

export function TechnologyNames({ technologies }: TechnologyNamesProps) {
  return (
    <div className={styles.technologyNames}>
      {technologies?.map(technology => 
        <span className={styles.technologyName} key={technology}>{technology}</span>
      )}
    </div>
  )
}