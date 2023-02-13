import Filtration from "components/filtration";
import style from "styles/pages/salaries.module.sass"
import { useEffect } from "react"
import fetchVacanciesByTechnologies from "database/vacancies/fetchVacanciesByTechnologies";
import { Salary } from "components/salaries/salary";
import { useState } from "react"
import { Vacancy, VacancyWithCompany } from "types";

export default function SalariesPage() {
    const [salaries, setSalaries] = useState<VacancyWithCompany[]>([]);

    // useEffect(() => {
    //     (async () => {
    //         const res = await fetchVacanciesByTechnologies({ technologies: ["React"] });

    //         setSalaries(res as any);
    //     })()
    // }, [])

    return (
        <div className={style.salariesPage}>
            {/* <Filtration setSalaries={setSalaries} /> */}

            <div className={style.salaries}>
                {  
                    salaries.map(salary => <Salary key={salary?._id} vacancy={salary} />)
                }
            </div>
        </div>
    )
}