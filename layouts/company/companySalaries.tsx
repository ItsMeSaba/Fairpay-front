import LoadMoreButton from "components/buttons/loadMore";
import { Salaries } from "components/salaries/salaries";
import fetchVanacies from "database/vacancies/fetchVacanciesByCompanyId";
import cacheVacancies from "functions/localStorage/vacancies/cacheVacancies";
import getCachedVacancies from "functions/localStorage/vacancies/getCachedVacancies";
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
    const loadedFromCache = useRef(false);

    async function fetch(reset = false) {
        // const vacancies = await fetchVanacies(companyId, { skip: skip.current });
        // const newVacancies = await fetchVanacies(companyId, { dateOfLastVacancy: vacancies[vacancies.length-1]?.date });
        if (!loadedFromCache.current) {
            const cachedVacancies = getCachedVacancies(companyId);

            loadedFromCache.current = true;
            if (cachedVacancies) {
                return setVacancies(currentVacancies => reset ? cachedVacancies.vacancies : [...currentVacancies, ...cachedVacancies.vacancies]);
            }
        }
 
        const fetchedVacancies = await fetchVanacies(companyId, { dateOfLastVacancy: reset ? null : vacancies[vacancies.length-1]?.date });
        
        if (fetchedVacancies.length === 0) areSalariesLeft.current = false;
        else {
            skip.current += fetchedVacancies.length;
            cacheVacancies(companyId, fetchedVacancies);
        }
        
        if (!isFirstFetchDone.current) isFirstFetchDone.current = true;
        
        setVacancies(currentVacancies => reset ? fetchedVacancies : [...currentVacancies, ...fetchedVacancies]);
    }

    
    // const fetch = async (reset = false) => {
    //     if (!loadedFromCache.current) {
    //         const cachedVacancies = getCachedVacancies(companyId);

    //         loadedFromCache.current = true;
    //         if (cachedVacancies) {
    //             return setVacancies(reset ? cachedVacancies.vacancies : [...vacancies, ...cachedVacancies.vacancies]);
    //         }
    //     }

    //     const fetchedVacancies = await fetchVanacies(companyId, { dateOfLastVacancy: reset ? null : vacancies[vacancies.length - 1]?.date });

    //     if (fetchedVacancies.length === 0) {
    //         areSalariesLeft.current = false;
    //     } else {
    //         skip.current += fetchedVacancies.length;
    //         cacheVacancies(companyId, fetchedVacancies);
    //     }

    //     setVacancies(reset ? fetchedVacancies : [...vacancies, ...fetchedVacancies]);
    // };

    // useEffect(() => {
    //     skip.current = 0;
    //     areSalariesLeft.current = true;
    //     loadedFromCache.current = false;

    //     fetch(true);
    // }, [companyId]);


    useEffect(() => {
        isFirstFetchDone.current = false;
        isFirstRun.current = true;
        areSalariesLeft.current = true;
        loadedFromCache.current = false;

        skip.current = 0;
        
        fetch(isFirstRun.current);
    }, [companyId])

    return (
        <div style={{ padding: "1rem 0" }}>
            { vacancies.length > 0 && <Salaries vacancies={vacancies} />}

            { areSalariesLeft.current && <LoadMoreButton cb={() => fetch(false)} /> }

            { vacancies.length === 0 && isFirstFetchDone.current && 
                <h1 
                    style={{
                        color:"white", 
                        textAlign: "center", 
                        padding: "15rem 0", 
                    }}
                >
                    ანაზღაურებები არ მოიძებნა
                </h1>
            }
        </div>
    )
}