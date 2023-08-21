import { TextWithImageProps } from "./types";
import styles from "./styles.module.scss"
import Image from "next/image";

export function TextWithImage({ description, title, image, isFlipped = false }: TextWithImageProps) {
  return (
    <div className={styles.textWithImage}>
      <div className={styles.content} style={{ order: isFlipped ? 1 : 0 }}>
        <h2 className={styles.title}>{title}</h2>

        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.imageContainer}>
        <Image className={styles.image} src={image.src} width={image.width} height={image.width} alt="decoaration" />
      </div>
    </div>
  )
}