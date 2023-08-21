import { IASalaryItem } from "../../typescript/types/components/salaryItem";
import Image from "next/image"
import space from "../../public/images/companies/space.png";
import vendoo from "../../public/images/companies/vendoo.png";
import bog from "../../public/images/companies/bog.png"
import fourk from "../public/images/4k.jpg";
import company1 from "../../public/images/companies/fortunejack.png";
import company2 from "../../public/images/companies/company2.png";
import { Currency, Vacancy, VacancyWithCompany, ValidCompanyNames } from "types";
import getCompanyImagePath, { getCompanyImage } from "functions/companies/getCompanyImage/getCompanyImage";
import { getCurrencyCharacter } from "utils/getCurrencyCharacter";
import { SalaryProps } from "./types";

import styles from "./styles.module.scss"
import { TechnologyNames } from "../TechnologyNames";

export function Salary({ salary: salaryData }: SalaryProps) {
  const { company, companyId, salary, position, date, currency, technologies, seniority } = salaryData;
  const companyImage = company?.name && getCompanyImage(company.name as ValidCompanyNames);

  return (
    <div className={styles.salary} data-with-company-image={Boolean(companyImage)}>
      {companyImage &&
        <div className={styles.companyImage}>
          <Image quality="100" src={companyImage} alt="companyImage" width={150} height={150} />
        </div>
      }

      <div className={styles.content}>
        <div className={styles.salaryInfo}>

          <p className={styles.companyName}>{company?.name}</p>
          
          <div className={styles.companyMobile}>
            {companyImage && <Image className={styles.companyImageMobile} quality="50" src={companyImage} alt="companyImage" width={50} height={50} />}

            <p className={styles.companyNameMobile}>{company?.name}</p>
          </div>

          <h2 className={styles.position}>{position} {seniority && `(${seniority})`}</h2>
          <h5>{(new Date(date))?.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</h5>
        </div>

        {technologies && <TechnologyNames technologies={technologies} />}
      </div>

      <div className={styles.salaryAmmount}>
        {salary} - {Number(salary) + 500} {getCurrencyCharacter(currency as Currency)}
      </div>
    </div>
  )
}