import Filtration from "components/filtration";
import style from "styles/pages/salaries.module.sass"
import { useEffect } from "react"
import fetchVacanciesByTechnologies from "database/vacancies/fetchVacanciesByTechnologies";
import { Salary } from "components/salaries/salary";
import { useState } from "react"
import { Vacancy, VacancyWithCompany } from "types";
import TechnologiesListInput from "components/inputs/technologiesListInput";
import TechnologyInput from "components/inputs/technologyInput";

export default function SalariesPage() {
    const [salaries, setSalaries] = useState<VacancyWithCompany[]>([]);
    const [chosenTechnologies, setChosenTechnologies] = useState<any[]>([]);

    // useEffect(() => {
    //     (async () => {
    //         const res = await fetchVacanciesByTechnologies({ technologies: ["React"] });

    //         setSalaries(res as any);
    //     })()
    // }, [])

    return (
        <div className={style.salariesPage}>
            <Filtration setSalaries={setSalaries} />

            <div className={style.salaries}>
                { salaries.map(salary => <Salary key={salary?._id} vacancy={salary} />) }
            </div>
        </div>
    )
}