import { SalaryWithoutCompany } from "./salary";
import style from "styles/components/salaryItem.module.sass";
import outline1 from "../../public/images/outline1.svg"
import Image from "next/image"
import { Vacancies, VacancyWithCompany } from "types";

interface Args {
    vacancies: VacancyWithCompany[]
}

export function Salaries(args: Args) {
    const { vacancies } = args;

    return (
        <div className={style.salaryItems}>
            <p style={{
                fontSize: "1.3rem",
                color: "white",
                textAlign: "center", 
                margin: "2rem 0",
            }}>
                ინფორმაცია წარმოდგენილია ინდივიდუალური თვიური ანაზღაურებების სახით
            </p>

            {
                vacancies.map((vacancy, index: number) => 
                // dummyData.map((vacancy, index: number) => 
                    <SalaryWithoutCompany vacancy={vacancy} key={index} />
                    // <SalaryItem vacancy={vacancy} key={index} />
                )
            }
        </div>
    )
}