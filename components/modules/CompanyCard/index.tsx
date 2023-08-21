import styles from "./styles.module.scss"
import Link from "next/link"
import StarRoundedIcon from '@mui/icons-material/StarBorderRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import { CompanyCardProps } from "./types";
import { getCompanyCoverImage } from "functions/companies/getCompanyCoverImage/getCompanyCoverImage";
import { ValidCompanyNames } from "types";
import { getCompanyImage } from "functions/companies/getCompanyImage/getCompanyImage";
import Image from "next/image"

export function CompanyCard({ company }: CompanyCardProps) {
  const { documentsCount, name, reviewCount, sumOfRatings, urlName, vacancyCount, color, technologies } = company;
  const coverImage = getCompanyCoverImage(name);
  const image = getCompanyImage(name as ValidCompanyNames);

  const reviewsExist = sumOfRatings > 0 && reviewCount > 0;
  const calculatedReview = reviewsExist ? sumOfRatings/reviewCount/20 : 0;

  return (
    <div className={styles.company}>
      <Link href={`/companies/${urlName}`}>
        <div className={styles.top}>
          {coverImage && 
            <div className={styles.coverImage} style={{ backgroundImage: `url(${coverImage.src})` }}>
            </div>
          }

          {!coverImage && 
            <div className={styles.noImage} style={{ backgroundColor: `#${color}` }}></div> 
          } 

          <div className={styles.companyImage}>
            <Image src={image.src} alt={name} width={100} height={100} />
          </div>
          
          <h2 className={styles.companyName} title={name}>{name}</h2>
        </div>

        <div className={styles.companyStatistics}>
          <div>
            <WorkRoundedIcon className={styles.briefcaseIcon} />

            <p>{vacancyCount} ანაზღ.</p>
          </div>

          <div>
            <StarRoundedIcon className={styles.starIcon} fontSize="medium" /> 

            <p>{calculatedReview.toFixed(1)}/5 ({reviewCount})</p>
          </div>
        </div>
      </Link>
    </div>
  )
}