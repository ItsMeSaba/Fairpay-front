import { Header } from "components/header";
// import { companies } from "data/companies";
import style from "styles/pages/companies.module.sass"
import Image from "next/image"
import { DisplayCompanies } from "components/displayCompanies";
import blob from "public/images/blob1.svg"
import axios from "axios";
import { Companies } from "types";
import SubmitSalary from "components/popups/submitSalary";
import SubmitReview from "components/popups/submitReview";
import { useState } from "react";


interface Args {
    companies: Companies
}

export default function CompaniesPage({ companies }: Args) {
    const [salaryPopup, setSalaryPopup] = useState(true);
    const [reviewPopup, setReviewPopup] = useState(false);

    return (
        <div className={style.page}>
            <Header />

            { salaryPopup && <SubmitSalary close={() => setSalaryPopup(false)} /> }
            { reviewPopup && <SubmitReview close={() => setReviewPopup(false)} /> }

            <DisplayCompanies companies={companies} openSalaryPopup={() => setSalaryPopup(true)} openReviewPopup={() => setReviewPopup(true)} />
        </div>
    )
}

export async function getStaticProps() {
    const response = await axios.post<Companies>("http://localhost:5000/api/companies");

    return {
        props: {
            companies: response.data
        }, // will be passed to the page component as props
    }
  }
  

// function DisplayCompanies() {
//     return (
//         <div className="companies">
//             {
//                 companies.map((company, index) => {
//                     return <DisplayCompany company={company} key={index} />
//                 })
//             }
//         </div>
//     )
// }

// interface displayCompany {
//     company: {
//         name: string,
//         image: string
//     }
// }

// function DisplayCompany(args: displayCompany) {
//     const { name, image } = args.company;

//     return (
//         <div className="company">
//             <div className="top">
//                 <div className="image">
//                     <Image src={require(`public/images/companies/${image}`)} alt={name} />
//                 </div>
//             </div>

//             <div className="bottom">
//                 <h2>{ name }</h2>
//             </div>
//         </div>
//     )
// }