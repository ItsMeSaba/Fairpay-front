import style from "styles/components/filtration.module.sass"
import ScrollContainer from 'react-indiana-drag-scroll'
import { Dispatch, SetStateAction, useCallback, useRef, useState } from "react";
import axios from "axios";
import fetchVanacies from "database/vacancies/fetchVacanciesByCompanyId";
// import { FiltrationItem } from "./buttons/filtration/filtrationItem";
import { FilterTypes, ToggledFilters, Vacancy, VacancyWithCompany } from "types";
import fetchVacanciesByTechnologies from "database/vacancies/fetchVacanciesByTechnologies";
import TechnologyInput from "./inputs/technologyInput";
import removeDuplicatesFromArray from "functions/utils/remoteDuplicatesFromArray";
import { AiOutlineCloseCircle } from 'react-icons/ai';

let technologies = ["Typescript", "PHP", "Java", "Angular", "React", "Vue", "C#", ".Net", "Go", "Rust", "MongoDB", "MySQL", "PostgreSQL", "Firebase", "Flask"];
const seniority = ["Intern", "Junior", "Middle", "Senior", "Lead"];
const companies = ["BOG", "TBC", "Flat Rock Technology", "Flat Rock Technology", "Flat Rock Technology", "Flat Rock Technology"];

interface FiltrationArgs {
    setSalaries: Dispatch<SetStateAction<VacancyWithCompany[]>>
}

export default function Filtration(args: FiltrationArgs) {
    const { setSalaries } = args;
    const vacancyIds = useRef<string[]>([]);
    const toggledFilters = useRef<ToggledFilters>({
        technologies: [],
        companies: [],
        seniorities: [],
    });
    const [input, setInput] = useState("");

    function ToggleFilter(field: FilterTypes) {        
        return async (filter: string, action: "add" | "remove") => {
            const filterObject = toggledFilters.current;

            if (action === "add") filterObject[field].push(filter);

            else filterObject[field] = filterObject[field].filter(item => item !== filter);

            if (filterObject.technologies.length === 0 && filterObject.seniorities.length === 0) return setSalaries([]);

            const res = await fetchVacanciesByTechnologies({ technologies: toggledFilters.current.technologies });

            setSalaries(res);

            if (input.length > 0) setInput("");
        }
    }

    function clearAllTechnologies() {
        toggledFilters.current.technologies = [];

        // TODO : Implement search with seniorities

        setSalaries([]);
    }

    let filteredTechnologies = technologies.filter(tech => tech.toLocaleLowerCase().includes(input.toLocaleLowerCase()))
    
    filteredTechnologies = removeDuplicatesFromArray(toggledFilters.current.technologies, filteredTechnologies);
    
    console.log("filteredTechnologies", filteredTechnologies);
    console.log("techs", toggledFilters.current.technologies);

    return (
        <div className={style.filtration}>
            <div className={style.technologiesBlock}>
                {/* <TechnologyInput /> */}
                <input type="text" placeholder="ტექნოლოგია" value={input} onChange={e => setInput(e.target.value)} />

                { toggledFilters.current.technologies.length > 0 &&
                    <AiOutlineCloseCircle
                        onClick={clearAllTechnologies} 
                        color="rgb(0, 21, 212, .85)"
                        size={"2rem"} 
                        style={{ margin: "0 .5rem 0 0", cursor: "pointer" }}
                    />
                }

                <DisplayButtons elements={filteredTechnologies} activeElements={toggledFilters.current.technologies} toggleFilter={ToggleFilter("technologies")} />
            </div>
            
            <DisplayButtons elements={seniority} activeElements={toggledFilters.current.seniorities} toggleFilter={ToggleFilter("seniorities")} />

            {/* <SubmitFiltration setVacancies={setSalaries} toggledFilters={toggledFilters.current} /> */}
        </div>
    ) 
}


interface DisplayButtonsArgs {
    elements: string[],
    activeElements: string[],
    toggleFilter: (filter: string, action: "add" | "remove") => void
}

function DisplayButtons(args: DisplayButtonsArgs) {
    const { elements, toggleFilter, activeElements } = args;

    return (
        <ScrollContainer className={style.filtrationRow}>
            { elements.map((element, index) => <FiltrationItem text={element} key={element} isActive={activeElements.includes(element)} toggleFilter={toggleFilter} />) }
        </ScrollContainer>
    )
}


interface PillButtonArgs {
    text: string
    isActive?: boolean
    toggleFilter: (filter: string, action: "add" | "remove") => void
}

export function FiltrationItem(args: PillButtonArgs) {
    // const [isActive, setActive] = useState(false);
    const { text, toggleFilter, isActive } = args;

    function handleClick() {
        toggleFilter(text, isActive ? "remove" : "add");

        // setActive(active => !active)
    }

    return (
        <button onClick={handleClick} className={`${style.filtrationItem} ${!isActive || style.active}`}>
            { text }
        </button>
    )
}