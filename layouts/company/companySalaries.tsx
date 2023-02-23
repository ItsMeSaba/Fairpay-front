import LoadMoreButton from "components/buttons/loadMore";
import { Salaries } from "components/salaries/salaries";
import fetchVanacies from "database/vacancies/fetchVacanciesByCompanyId";
import cacheVacancies from "functions/localStorage/vacancies/cacheVacancies";
import getCachedVacancies from "functions/localStorage/vacancies/getCachedVacancies";
import flattenPagesArray from "functions/utils/flattenPagesArray";
import mongoose from "mongoose";
import { useEffect, useRef, useState } from "react";
import { useInfiniteQuery } from "react-query";
import { Vacancies } from "types";

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

    async function fetch(page: number) {
        const companies = await fetchVanacies(companyId, { page })

		const newPage = companies.length === 10 ? page + 1 : undefined;

		return { documents: companies, page: newPage }
    }

    const {
		data,
		isLoading,
		isError,
		hasNextPage,
		fetchNextPage,
	} = useInfiniteQuery(`vacancies-${companyId}`, ({ pageParam = 0 }) => fetch(pageParam), {
		refetchOnWindowFocus: false,
		staleTime: Infinity,
		getNextPageParam: (lastPage, allPages) => lastPage.page,
	});


    // async function fetch(reset = false) {
    //     // const vacancies = await fetchVanacies(companyId, { skip: skip.current });
    //     // const newVacancies = await fetchVanacies(companyId, { dateOfLastVacancy: vacancies[vacancies.length-1]?.date });
    //     if (!loadedFromCache.current) {
    //         const cachedVacancies = getCachedVacancies(companyId);

    //         loadedFromCache.current = true;
    //         if (cachedVacancies) {
    //             return setVacancies(currentVacancies => reset ? cachedVacancies.vacancies : [...currentVacancies, ...cachedVacancies.vacancies]);
    //         }
    //     }
 
    //     const fetchedVacancies = await fetchVanacies(companyId, { dateOfLastVacancy: reset ? null : vacancies[vacancies.length-1]?.date });
        
    //     if (fetchedVacancies.length === 0) areSalariesLeft.current = false;
    //     else {
    //         skip.current += fetchedVacancies.length;
    //         cacheVacancies(companyId, fetchedVacancies);
    //     }
        
    //     if (!isFirstFetchDone.current) isFirstFetchDone.current = true;
        
    //     setVacancies(currentVacancies => reset ? fetchedVacancies : [...currentVacancies, ...fetchedVacancies]);
    // }

    // useEffect(() => {
    //     isFirstFetchDone.current = false;
    //     isFirstRun.current = true;
    //     areSalariesLeft.current = true;
    //     loadedFromCache.current = false;

    //     skip.current = 0;
        
    //     fetch(isFirstRun.current);
    // }, [companyId])

    
	// const companiesVacancies = data?.pages.reduce((acc, cur) => [...acc, ...cur.documents], [])
    
    if (isLoading) return (
        <p>იტვირთება</p>
    )

    if (isError) return (
        <p>დაფიქსირდა ხარვეზი</p>
    )
        
    const companiesVacancies = flattenPagesArray<Vacancies[]>(data);

    return (
        <div style={{ padding: "1rem 0" }}>
            {/* { vacancies.length > 0 && <Salaries vacancies={vacancies} />} */}
            { companiesVacancies.length > 0 && <Salaries vacancies={companiesVacancies as any} />}

            {/* { areSalariesLeft.current && <LoadMoreButton cb={() => fetch(false)} /> } */}
            { hasNextPage && <LoadMoreButton cb={fetchNextPage} /> }

            { companiesVacancies.length === 0 && !hasNextPage && 
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