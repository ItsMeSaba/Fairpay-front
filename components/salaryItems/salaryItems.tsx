import { SalaryItem } from "./salaryItem";
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
            {
                vacancies.map((vacancy, index: number) => 
                // dummyData.map((vacancy, index: number) => 
                    <SalaryItem vacancy={vacancy} key={index} />
                )
            }
        </div>
    )
}