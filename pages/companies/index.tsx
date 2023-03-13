// import { companies } from "data/companies";
import style from "styles/pages/companies.module.sass";
// import { DisplayCompanies } from "components/company/displayCompanies";
import axios from "axios";
import { CompanyType } from "types";
import SubmitSalary from "components/popups/submitSalary";
import SubmitReview from "components/popups/submitReview";
import { useContext, useEffect, useRef, useState } from "react";
import { fetchCompanies } from "database/company/fetchCompany";
import LoadMoreButton from "components/buttons/loadMore";
import AddCompanyPopup from "components/popups/addCompany";
import { GlobalContext } from "context";
import { Types } from "mongoose";
import scrollIfNeededAndRemovePreviousPage from "functions/sessionStorage/checkForScroll";
import getCompanies from "functions/companies/getCompanies";
import getCachedCompanies from "functions/localStorage/company/getCachedCompanies";
import isTimestampValid from "functions/utils/isTimestampValid";
import companiesArrayToOject from "functions/companies/companiesArrayToObject";
import deleteCachedCompanies from "functions/localStorage/company/deleteCachedCompanies";
import Head from "next/head"
import { useInfiniteQuery, useQuery } from "react-query";
import { Companies } from "components/company/Companies";
import flattenPagesArray from "functions/utils/flattenPagesArray";

interface PopupData {
	presetCompany: string | null;
	display: boolean;
}

const popupData = (
	display = false,
	presetCompany: string | null = null,
	
): PopupData => ({
	display: display,
	presetCompany: presetCompany,
});


interface Args {
  companies: CompanyType[];
  openAuthPopup: (...args: any) => any;
}

export default function CompaniesPage(args: Args) {
	const { companies: fetchedCompanies } = args;
	// const [companies, setCompanies] = useState(companiesArrayToOject(fetchedCompanies));
	const [companies, setCompanies] = useState([]);
	const [salaryPopup, setSalaryPopup] = useState(popupData());
	const [reviewPopup, setReviewPopup] = useState(popupData());
	const [addCompanyPopup, setAddCompanyPopup] = useState(false);
	const [displayLoadMore, setDisplayLoadMore] = useState(true);
	// const documentsToSkip = useRef(companies.length);
	const documentsToSkip = useRef(Object.values(companies).length);
	const isAlreadyLoadedFromCache = useRef(false);
	const { openReviewPopup, openSalaryPopup } = useContext(GlobalContext);

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
	
	async function fetch(page: number): Promise<{ documents: CompanyType[], page: number | undefined }> {
		// console.log("eeeeeeeeeeee", e);
		// const companies = await fetchCompanies(data?.pages.flat().length)
		const companies = await fetchCompanies(page)

		const newPage = companies.length === 10 ? page + 1 : undefined;

		return { documents: companies, page: newPage }
	}

	// async function loadCompanies() {
	// 	// const newCompanies = await fetchCompanies(documentsToSkip.current);
	// 	// const newCompanies = await getCompanies(documentsToSkip.current);
	// 	const newCompanies = await getCompanies(documentsToSkip.current);

	// 	if (Object.values(newCompanies).length === 0) {
	// 		setDisplayLoadMore(false);
	// 		return false;
	// 	}

	// 	// documentsToSkip.current += newCompanies.length;
	// 	documentsToSkip.current += Object.values(newCompanies).length;
	// 	// setCompanies(companies => [...companies, ...newCompanies]);
	// 	setCompanies(companies => ({ ...companies, ...newCompanies }) );
	// }

	// useEffect(() => {
	// 	if (!isAlreadyLoadedFromCache.current) {
	// 		const cachedCompanies = getCachedCompanies();

	// 		if (cachedCompanies) {
	// 			if (isTimestampValid(cachedCompanies.timestamp, "3h")) {
	// 				setCompanies(companies => ({ ...cachedCompanies.companies, ...companies }));
					
	// 				documentsToSkip.current +=  Object.values(cachedCompanies.companies).length;
					
	// 				isAlreadyLoadedFromCache.current = true;
	// 			} else deleteCachedCompanies();
	// 		}
	// 	}
		
	// 	setTimeout(() => scrollIfNeededAndRemovePreviousPage(), 100)
	// }, [companiesCount]);

	const companiesArray = flattenPagesArray(data);

	console.log("companiesArray", companiesArray);

	return (
		<div className={style.page}>
			<Head>
				<title>Companies</title>
			</Head>

			{
				addCompanyPopup &&
					<AddCompanyPopup closePopup={() => setAddCompanyPopup(false)} />
			}


			<button className={style.addCompanyButton} onClick={() => setAddCompanyPopup(true)}>კომპანიის დამატება</button>

			<Companies
				// companies={Object.values(companies)}
				companies={companiesArray as any}
				openSalaryPopup={(companyName: string, companyId: string) =>
					openSalaryPopup(companyName, companyId)
				}
				openReviewPopup={(companyName: string, companyId: string) =>
					openReviewPopup(companyName, companyId)
				}
			/>

			{/* { displayLoadMore && <LoadMoreButton cb={loadCompanies} buttonColor={"rgb(255,255,255)"} /> } */}
			{/* { displayLoadMore && <LoadMoreButton cb={fetchNextPage} buttonColor={"rgb(255,255,255)"} /> } */}
			{ hasNextPage && <LoadMoreButton cb={fetchNextPage} buttonColor={"rgb(255,255,255)"} /> }
		</div>
  	);
}

// export async function getStaticProps() {
// 	const response = await axios.get<CompanyType[]>(
// 		`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/companies`
// 	);

// 	return {
// 		props: {
// 			companies: response.data,
// 		}, // will be passed to the page component as props
// 	};
// }
