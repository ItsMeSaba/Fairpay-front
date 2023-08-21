import companiesList from "data/companies";
import Image from "next/image"
import style from "styles/components/displayCompanies.module.sass"
// import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarRoundedIcon from '@mui/icons-material/StarBorderRounded';
// import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import Button from "../buttons/button";
import { CompanyType, ValidCompanyNames } from "types";
import { getCompanyImage } from "functions/companies/getCompanyImage/getCompanyImage";
import Link from 'next/link'
import { MouseEvent, useContext, useMemo } from "react";
import { GlobalContext } from "context";
import { Types } from "mongoose";
import AddSalaryButton from "../buttons/AddSalaryButton";
import AddReviewButton from "../buttons/AddReviewButton";
import { rememberCurrentPage } from "functions/sessionStorage/rememberCurrentPage";
import { getCompanyCoverImage } from "functions/companies/getCompanyCoverImage/getCompanyCoverImage";
import { Company, CompanyWithTechnologies } from "./Company";

interface Args {
    companies: CompanyType[]
}

export function Companies(args: Args) {
    const { companies } = args;
    // console.log("companies", companies);

    
    const sortedCompanies = useMemo(() => (companies ?? []).sort((a, b) => b.documentsCount - a.documentsCount), [companies?.length]);
    
    return (
        <div className={style.companies}>
            { sortedCompanies.map((company, index) =>
                <Company 
                    company={company} 
                    key={String(company._id)} 
                />
            )}
        </div>
    )
}

export function CompaniesWithTechnologies(args: Args) {
    const { companies } = args;
    const sortedCompanies = useMemo(() => companies.sort((a, b) => b.documentsCount - a.documentsCount), [companies.length]);

    return (
        <div className={style.companies}>
            { sortedCompanies.map((company, index) =>
                <CompanyWithTechnologies
                    company={company} 
                    key={String(company._id)} 
                />
            )}
        </div>
    )
}

// interface CompanyArgs {
//     company: CompanyType
//     openSalaryPopup: () => void
//     openReviewPopup: () => void
// }

// function Company(args: CompanyArgs) {
//     const { name, urlName, _id, reviewCount, vacancyCount, sumOfRatings, color } = args.company;
//     const { openSalaryPopup, openReviewPopup } = args;
//     const image = getCompanyImage(name as ValidCompanyNames);
//     const coverImage = getCompanyCoverImage(name);
//     const { openAuthPopup } = useContext(GlobalContext);

//     function clickWithoutPropogation(e: MouseEvent, callback: ((...args: any[]) => any)) {
//         callback();
//         e.stopPropagation();
//     }
    

//     const reviewsExist = sumOfRatings > 0 && reviewCount > 0;
//     const calculatedReview = reviewsExist ? sumOfRatings/reviewCount/20 : 0;


//     return (
//         <div className="holder" onClick={rememberCurrentPage}>
//             <Link href={`/companies/${urlName}`}>
//                 {/* <div className={style.company} style={{ borderTop: `solid 12px #${color ?? "a4b0be"}` }}> */}
//                 <div className={style.company}>

//                     <div className={style.top}>
//                         { coverImage && 
//                             <div className={style.coverImage} style={{ backgroundImage: `url(${coverImage.src})` }}>
//                                 {/* <img src={coverImage} alt={name} /> */}
//                             </div>
//                         }

//                         { !coverImage && 
//                             <div className={style.noImage} style={{ backgroundColor: `#${color}` }}></div> 
//                         }

//                         <div className={style.companyImage}>
//                             <img quality={30} src={image} alt={name} />
//                         </div>

//                         <h2 className={style.companyName} title={name}>{ name }</h2>
//                     </div>

//                     <div className={style.bottom}>
//                         <div className={style.companyData}>
//                             <span>
//                                 <div className={style.vacancyIcon}>
//                                     <WorkRoundedIcon />
//                                 </div>

//                                 <p>{ vacancyCount } ანაზღ.</p>
//                             </span>

//                             <span>
//                                 <div className={style.startIcon}>
//                                     <StarRoundedIcon fontSize="medium" /> 
//                                 </div>

//                                 <p>{ calculatedReview.toFixed(1) }/5 ({ reviewCount })</p>
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             </Link>
//         </div>
//     );
// }