import LoadMoreButton from "components/buttons/loadMore";
import dummyData from "components/salaryItems/dummyData";
import { SalaryItems } from "components/salaryItems/salaryItems";
import fetchVanacies from "database/functions/vacancies/fetchVacancies";
import mongoose from "mongoose";
import { useEffect, useRef, useState } from "react";

interface Args {
    companyId: string
}

export default function CompanySalaries(args: Args) {
    const [vacancies, setVacancies] = useState<any[]>([]);
    const { companyId } = args;
    const skip = useRef(0);
    const isFirstRun = useRef(true);
    const areSalariesLeft = useRef(true);
    const isFirstFetchDone = useRef(false);

    async function fetch(reset = false) {
        const vacancies = await fetchVanacies(companyId, { skip: skip.current });
        
        if (vacancies.length === 0) areSalariesLeft.current = false;
        else skip.current += vacancies.length;

        if (!isFirstFetchDone.current) isFirstFetchDone.current = true;
        
        setVacancies(currentVacancies => reset ? vacancies : [...currentVacancies, ...vacancies]);
    }

    useEffect(() => {
        isFirstFetchDone.current = false;
        isFirstRun.current = true;
        areSalariesLeft.current = true;

        skip.current = 0;
        
        fetch(isFirstRun.current);
    }, [companyId])

    return (
        <div className="div">
            { vacancies.length > 0 && <SalaryItems vacancies={vacancies} />}

            { areSalariesLeft.current && <LoadMoreButton cb={() => fetch(false)} /> }

            { vacancies.length === 0 && isFirstFetchDone.current && <h1 style={{ textAlign: "center", padding: "4rem 0" }}>ვაკასიები არ მოიძებნა</h1> }
        </div>
    )
}