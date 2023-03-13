import Filtration from "components/filtration/filtration";
import style from "styles/pages/salaries.module.sass"
import { useEffect } from "react"
import fetchVacanciesByTechnologies from "database/vacancies/fetchVacanciesByTechnologies";
import { Salary } from "components/salaries/salary";
import { useState } from "react"
import { Vacancy, VacancyWithCompany } from "types";
import TechnologiesListInput from "components/inputs/technologiesListInput";
import TechnologyInput from "components/inputs/technologyInput";
import LoadMoreButton from "components/buttons/loadMore";
import { useInfiniteQuery } from "react-query";
import flattenPagesArray from "functions/utils/flattenPagesArray";

export default function SalariesPage() {
    const [salaries, setSalaries] = useState<VacancyWithCompany[]>([]);
    const [toggledTechnologies, setToggledTechnologies] = useState<string[]>([]);
    const [toggledSeniorities, setToggledSeniorities] = useState<string[]>([]);

    const { data, isLoading, isError, error, refetch, fetchNextPage, hasNextPage } = useInfiniteQuery(
        ["salaries", toggledTechnologies, toggledSeniorities],
        ({ pageParam = 0 }) => fetch(pageParam),
        {
            refetchOnWindowFocus: false,
            staleTime: Infinity,
            getNextPageParam: (lastPage) => lastPage.page
        },
    )

    async function fetch(page: number) {
        const newSalaries = await fetchVacanciesByTechnologies({ technologies: toggledTechnologies, seniorities: toggledSeniorities, page }); 

        console.log("newSalaries.length", newSalaries.length);
    
        return { documents: newSalaries, page: newSalaries.length === 10 ? page + 1 : undefined }
    }

    const newSalaries = flattenPagesArray<VacancyWithCompany[]>(data);

    console.log("hasNextPage", hasNextPage);

    return (
        <div className={style.salariesPage}>
            <Filtration 
                setSalaries={setSalaries} 
                technologiesState={[toggledTechnologies, setToggledTechnologies]} 
                senioritiesState={[toggledSeniorities, setToggledSeniorities]}
            />

            {
                newSalaries.length === 0 && !isLoading &&
                    <h2 style={{ margin: "10rem 0 5rem 0", width: "100vw", textAlign: "center" }}>
                        ანაზღაურებები არ მოიძებნა
                    </h2>
            }

            <div className={style.salaries}>
                {/* { salaries.map(salary => <Salary key={salary?._id} vacancy={salary} />) } */}
                { newSalaries.map(salary => <Salary key={salary?._id} vacancy={salary} />) }
            </div>

            { hasNextPage && 
                <LoadMoreButton 
                    cb={fetchNextPage}
                    style={{ 
                        border: "solid 3px rgba(0, 21, 212, 0.85)", 
                        color: "rgba(0, 21, 212, 0.85)",
                        borderRadius: ".6rem",
                        backgroundColor: "white", 
                        fontSize: ".9rem",
                        fontWeight: 600
                    }} 
                /> 
            }
        </div>
    )
}