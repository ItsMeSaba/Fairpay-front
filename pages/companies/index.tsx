// import { companies } from "data/companies";
import style from "styles/pages/companies.module.sass";
import { DisplayCompanies } from "components/displayCompanies";
import axios from "axios";
import { Companies } from "types";
import SubmitSalary from "components/popups/submitSalary";
import SubmitReview from "components/popups/submitReview";
import { useContext, useEffect, useRef, useState } from "react";
import { fetchCompanies } from "database/functions/company/fetchCompany";
import LoadMoreButton from "components/buttons/loadMore";
import AddCompanyPopup from "components/popups/addCompany";
import { GlobalContext } from "context";
import { Types } from "mongoose";
import scrollIfNeededAndRemovePreviousPage from "functions/sessionStorage/checkForScroll";
import getCompanies from "functions/companies/getCompanies";
import getCachedCompanies from "functions/localStorage/getCachedCompanies";
import isTimestampValid from "functions/utils/isTimestampValid";
import companiesArrayToOject from "functions/companies/companiesArrayToObject";
import deleteCachedCompanies from "functions/localStorage/deleteCachedCompanies";

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
  companies: Companies;
  openAuthPopup: (...args: any) => any;
}

export default function CompaniesPage(args: Args) {
	const { companies: fetchedCompanies } = args;
	const [companies, setCompanies] = useState(companiesArrayToOject(fetchedCompanies));
	const [salaryPopup, setSalaryPopup] = useState(popupData());
	const [reviewPopup, setReviewPopup] = useState(popupData());
	const [addCompanyPopup, setAddCompanyPopup] = useState(false);
	const [displayLoadMore, setDisplayLoadMore] = useState(true);
	// const documentsToSkip = useRef(companies.length);
	const documentsToSkip = useRef(Object.values(companies).length);
	const isAlreadyLoadedFromCache = useRef(false);

	const { openReviewPopup, openSalaryPopup } = useContext(GlobalContext);

	const companiesCount = Object.values(companies).length;

	async function loadCompanies() {
		// const newCompanies = await fetchCompanies(documentsToSkip.current);
		// const newCompanies = await getCompanies(documentsToSkip.current);
		const newCompanies = await getCompanies(documentsToSkip.current);

		if (Object.values(newCompanies).length === 0) {
			setDisplayLoadMore(false);
			return false;
		}

		// documentsToSkip.current += newCompanies.length;
		documentsToSkip.current += Object.values(newCompanies).length;
		// setCompanies(companies => [...companies, ...newCompanies]);
		setCompanies(companies => ({ ...companies, ...newCompanies }) );
	}

	useEffect(() => {
		if (!isAlreadyLoadedFromCache.current) {
			const cachedCompanies = getCachedCompanies();

			// if (cachedCompanies && isTimestampValid(cachedCompanies.timestamp, "3h")) {
			// 	setCompanies(companies => ({ ...companies, ...cachedCompanies.companies }));
			// 	documentsToSkip.current +=  Object.values(cachedCompanies.companies).length;
			// 	isAlreadyLoadedFromCache.current = true;
			// }
			
			if (cachedCompanies) {
				if (isTimestampValid(cachedCompanies.timestamp, "3h")) {
					setCompanies(companies => ({ ...cachedCompanies.companies, ...companies }));
					
					documentsToSkip.current +=  Object.values(cachedCompanies.companies).length;
					
					isAlreadyLoadedFromCache.current = true;
				} else deleteCachedCompanies();
			}
		}
		
		setTimeout(() => scrollIfNeededAndRemovePreviousPage(), 100)
	}, [companiesCount]);


	return (
		<div className={style.page}>
			{
				addCompanyPopup &&
					<AddCompanyPopup closePopup={() => setAddCompanyPopup(false)} />
			}


			<button className={style.addCompanyButton} onClick={() => setAddCompanyPopup(true)}>კომპანიის დამატება</button>

			<DisplayCompanies
				companies={Object.values(companies)}
				openSalaryPopup={(companyName: string, companyId: Types.ObjectId) =>
					openSalaryPopup(companyName, companyId)
				}
				openReviewPopup={(companyName: string, companyId: Types.ObjectId) =>
					openReviewPopup(companyName, companyId)
				}
			/>

			{ displayLoadMore && <LoadMoreButton cb={loadCompanies} /> }
		</div>
  	);
}

export async function getStaticProps() {
	const response = await axios.get<Companies>(
		`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/companies`
	);

	return {
		props: {
			companies: response.data,
		}, // will be passed to the page component as props
	};
}
