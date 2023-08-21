import Image from "next/image"
import styles from "./styles.module.scss"
import bussinesMan from "images/bussinesMan2.png"

export function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        {/* <div className={styles.blobOne}>
          <Image src={blobOne} alt="blob" width={500} height={500} />
        </div>

        <div className={styles.blobTwo}>
          <Image src={blobTwo} width={500} height={500} alt="blob" />
        </div> */}

        <h1 className={styles.title}>იცოდე შენი<br /><span className={styles.biggerTitle}>ფასი</span></h1>
      </div>

      <div className={styles.avatar}>
        <Image quality={80} className={styles.image} src={bussinesMan.src} width={bussinesMan.width} height={bussinesMan.height} alt="https://icons8.com/illustrations/style--business-3d" />
      </div>

      <div className={styles.wave}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path className={styles.path} d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </div>
  )
}