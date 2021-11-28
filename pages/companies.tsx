import { Header } from "components/header";
// import { companies } from "data/companies";
import style from "styles/pages/companies.module.sass"
import Image from "next/image"
import { DisplayCompanies } from "components/displayCompanies";
import blob from "public/images/blob1.svg"
import axios from "axios";
import { Companies } from "types";


interface Args {
    companies: Companies
}

export default function CompaniesPage({ companies }: Args) {
    return (
        <div className={style.page}>
            <Header />

            {/* <div className={style.blob}>
                <Image src={blob} alt="blob"></Image>
            </div> */}

            <DisplayCompanies companies={companies} />
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