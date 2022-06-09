import Filtration from "components/filtration";
import { Header } from "components/header";
import { SalaryItems } from "components/salaryItems/salaryItems";
import { useState } from "react";


export default function Salaries() {
    const [vacancies, setVacancies] = useState<any[]>([]);

    return (
        <div className="salaries">    
            {/* <Header /> */}

            <Filtration setSalaries={setVacancies} />
            
            <SalaryItems vacancies={vacancies} />
        </div>

    )
}