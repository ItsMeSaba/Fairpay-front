import { SalaryItem, SalaryItemWithoutCompany } from "./salaryItem";
import style from "styles/components/salaryItem.module.sass";
import dummyData from "components/salaryItems/dummyData";
import outline1 from "../../public/images/outline1.svg"
import Image from "next/image"
import { Vacancies } from "types";

interface Args {
    vacancies: Vacancies
}

export function SalaryItems(args: Args) {
    const { vacancies } = args;

    return (
        <div className={style.salaryItems}>
            <p style={{
                fontSize: "1.3rem",
                color: "white",
                textAlign: "center", 
                margin: "2rem 0",
                textShadow: `
                    0.03em 0 black,
                    0 0.03em black,
                    -0.03em 0 black,
                    0 -0.03em black
                `
            }}>
                ინფორმაცია წარმოდგენილია ინდივიდუალური თვიური ანაზღაურებების სახით
            </p>

            {
                vacancies.map((vacancy, index: number) => 
                // dummyData.map((vacancy, index: number) => 
                    <SalaryItemWithoutCompany vacancy={vacancy} key={index} />
                    // <SalaryItem vacancy={vacancy} key={index} />
                )
            }
        </div>
    )
}