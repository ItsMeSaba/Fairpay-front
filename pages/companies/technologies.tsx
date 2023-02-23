import { CompaniesWithTechnologies } from "components/company/Companies";
import { fetchCompanies, fetchCompaniesWithTechnologies } from "database/company/fetchCompany";
import flattenPagesArray from "functions/utils/flattenPagesArray";
import { useInfiniteQuery } from "react-query";
import { CompanyType } from "types";
import style from "styles/pages/companyTechnologies.module.sass"

export default function TechnologiesPage() {
	const {
		data,
		isLoading,
		isError,
		hasNextPage,
		fetchNextPage,
	} = useInfiniteQuery('companies', ({ pageParam = 0 }) => fetch(pageParam), {
		// getNextPageParam: (lastPage, allPages) => lastPage.page+1,
		refetchOnWindowFocus: false,
		staleTime: Infinity,
		getNextPageParam: (lastPage, allPages) => lastPage.page,
	});

    async function fetch(page: number) {
		const companies = await fetchCompaniesWithTechnologies(page)

		const newPage = companies.length === 10 ? page + 1 : undefined;

		return { documents: companies, page: newPage }
	}

    const companies = flattenPagesArray<CompanyType[]>(data);

    return (
        <div className={style.technologiesPage}>
			<h2 className={style.header}>ტექნოლოგიები რომლებსაც კომპანიები იყენებენ:</h2>

            <CompaniesWithTechnologies companies={companies} />
        </div>
    )
}