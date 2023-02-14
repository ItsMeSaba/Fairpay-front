import style from "styles/components/filtration.module.sass"
import ScrollContainer from 'react-indiana-drag-scroll'
import { Dispatch, SetStateAction, useCallback, useRef, useState } from "react";
import axios from "axios";
import fetchVanacies from "database/vacancies/fetchVacanciesByCompanyId";
import { FiltrationItem } from "./buttons/filtration/filtrationItem";
import { FilterTypes, ToggledFilters, Vacancy } from "types";
import fetchVacanciesByTechnologies from "database/vacancies/fetchVacanciesByTechnologies";

const technologies = ["Typescript", "PHP", "Java", "Angular", "React", "Vue", "C#", ".Net", "Go", "Rust", "MongoDB", "MySQL", "PostgreSQL"];
const seniority = ["Intern", "Junior", "Middle", "Senior", "Lead"];
const companies = ["BOG", "TBC", "Flat Rock Technology", "Flat Rock Technology", "Flat Rock Technology", "Flat Rock Technology"];

interface FiltrationArgs {
    setSalaries: Dispatch<SetStateAction<Vacancy[]>>
}

export default function Filtration(args: FiltrationArgs) {
    const { setSalaries } = args;
    const vacancyIds = useRef<string[]>([]);
    const toggledFilters = useRef<ToggledFilters>({
        technologies: [],
        companies: [],
        seniorities: [],
    });

    function toggleFilter(field: FilterTypes) {        
        return async (filter: string, action: "add" | "remove") => {
            const filterObject = toggledFilters.current;

            if (action === "add") filterObject[field].push(filter);

            else filterObject[field] = filterObject[field].filter(item => item !== filter);

            const res = await fetchVacanciesByTechnologies({ technologies: toggledFilters.current.technologies });

            setSalaries(res as any);
        }
    }

    
    return (
        <div className={style.filtration}>
            <DisplayButtons elements={technologies} toggleFilter={toggleFilter("technologies")} />
            
            <DisplayButtons elements={seniority} toggleFilter={toggleFilter("seniorities")} />

            {/* <SubmitFiltration setVacancies={setSalaries} toggledFilters={toggledFilters.current} /> */}
        </div>
    ) 
}


interface DisplayButtonsArgs {
    elements: string[],
    toggleFilter: (filter: string, action: "add" | "remove") => void
}

function DisplayButtons(args: DisplayButtonsArgs) {
    const { elements, toggleFilter } = args;

    return (
        <ScrollContainer className={style.filtrationRow}>
            {
                elements.map((element, index) => <FiltrationItem text={element} key={index} toggleFilter={toggleFilter} />) 
            }
        </ScrollContainer>
    )
}