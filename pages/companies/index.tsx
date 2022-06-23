// import { companies } from "data/companies";
import style from "styles/pages/companies.module.sass";
import { DisplayCompanies } from "components/displayCompanies";
import axios from "axios";
import { Companies } from "types";
import SubmitSalary from "components/popups/submitSalary";
import SubmitReview from "components/popups/submitReview";
import { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { fetchCompanies } from "database/functions/company/fetchCompany";
import LoadMoreButton from "components/buttons/loadMore";
import AddCompanyPopup from "components/popups/addCompany";

interface PopupData {
	presetCompany: string | null;
	shouDisplay: boolean;
}

const popupData = (
	display = false,
	presetCompany: string | null = null
): PopupData => ({
	shouDisplay: display,
	presetCompany: presetCompany,
});


interface Args {
  companies: Companies;
  openAuthPopup: (...args: any) => any;
}

export default function CompaniesPage(args: Args) {
	const { companies: fetchedCompanies } = args;
	const [companies, setCompanies] = useState(fetchedCompanies);
	const [salaryPopup, setSalaryPopup] = useState(popupData());
	const [reviewPopup, setReviewPopup] = useState(popupData());
	const [addCompanyPopup, setAddCompanyPopup] = useState(false);
	const [displayLoadMore, setDisplayLoadMore] = useState(true);
	const { data: session, status } = useSession()
	const documentsToSkip = useRef(10);

	async function loadMore() {
		const newCompanies = await fetchCompanies(documentsToSkip.current);

		if (newCompanies.length === 0) {
			setDisplayLoadMore(false);
			return false;
		}

		documentsToSkip.current += newCompanies.length;
		setCompanies(companies => [...companies, ...newCompanies]);
	}

	return (
		<div className={style.page}>
			{
				addCompanyPopup &&
					<AddCompanyPopup closePopup={() => setAddCompanyPopup(false)} />
			}

			{
				salaryPopup.shouDisplay &&
					<SubmitSalary
						presetCompany={salaryPopup.presetCompany}
						close={() => setSalaryPopup(popupData())}
					/>
			}

			{
				reviewPopup.shouDisplay &&
					<SubmitReview
						presetCompany={reviewPopup.presetCompany}
						close={() => setReviewPopup(popupData())}
					/>
			}

			<button className={style.addCompanyButton} onClick={() => setAddCompanyPopup(true)}>კომპანიის დამატება</button>

			<DisplayCompanies
				companies={companies}
				openSalaryPopup={(company: string) =>
					setSalaryPopup(popupData(true, company))
				}
				openReviewPopup={(company: string) =>
					setReviewPopup(popupData(true, company))
				}
			/>

			{/* <button className={style.loadMoreButton} onClick={loadMore}>მეტი</button> */}

			{ displayLoadMore && <LoadMoreButton cb={loadMore} /> }
		</div>
  	);
}

export async function getStaticProps() {
	const response = await axios.get<Companies>(
		`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/companies`
	);

	// console.log("response", response.data)

	return {
		props: {
			companies: response.data,
		}, // will be passed to the page component as props
	};
}
