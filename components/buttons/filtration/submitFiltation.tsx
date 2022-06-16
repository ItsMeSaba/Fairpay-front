import fetchVanacies from "database/functions/vacancies/fetchVacancies";
import { Dispatch, SetStateAction } from "react";
import style from "styles/components/filtration.module.sass"
import { ToggledFilters } from "types"

interface SubmitFiltrationArgs {
    toggledFilters: ToggledFilters
    setVacancies: Dispatch<SetStateAction<string[]>>
}

export default function SubmitFiltration(args: SubmitFiltrationArgs) {
    const { toggledFilters, setVacancies } = args;

    async function filter() {
    const filteredVacancies = await fetchVanacies(toggledFilters as any);

        setVacancies(filteredVacancies);
    }

    return (
        <button className={style.submitFiltation} onClick={filter}>
            გაფილტვრა
        </button>
    )
}