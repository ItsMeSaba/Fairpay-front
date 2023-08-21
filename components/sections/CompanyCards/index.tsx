import { useMemo } from "react";
import { CompanyCardsProps } from "./types";
import { CompanyCard } from "components/modules/CompanyCard";
import styles from "./styles.module.scss"

export function CompanyCards({ companies }: CompanyCardsProps) {
  const sortedCompanies = useMemo(
    () => (companies ?? []).sort((a, b) => b.documentsCount - a.documentsCount), 
    [companies?.length]
  );
    
  return (
    <div className={styles.companies}>
      {sortedCompanies.map((company, index) =>
        <CompanyCard
          company={company} 
          key={String(company._id)} 
        />
      )}
    </div>
  )
} 