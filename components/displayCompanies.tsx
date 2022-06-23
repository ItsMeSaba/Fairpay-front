import companiesList from "data/companies";
import Image from "next/image"
import style from "styles/components/displayCompanies.module.sass"
// import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarRoundedIcon from '@mui/icons-material/StarBorderRounded';
// import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import Button from "./buttons/button";
import { Companies, Company, ValidCompanyNames } from "types";
import { getCompanyImage } from "functions/companies/images/getCompanyImage";
import Link from 'next/link'
import { MouseEvent, useContext } from "react";
import { useSession } from "next-auth/react";
import { GlobalContext } from "context";

interface DisplayCompanies {
    companies: Companies
    openSalaryPopup: (company: string) => void
    openReviewPopup: (company: string) => void
}

export function DisplayCompanies(args: DisplayCompanies) {
    const { companies, openReviewPopup, openSalaryPopup } = args;

    return (
        <div className={style.companies}>
            {
                companies.map((company, index) => {
                    return <DisplayCompany company={company} key={index} openReviewPopup={() => openReviewPopup(company.name)} openSalaryPopup={() => openSalaryPopup(company.name)} />
                })
            }
        </div>
    )
}

interface DisplayCompany {
    company: Company
    openSalaryPopup: () => void
    openReviewPopup: () => void
}

function DisplayCompany(args: DisplayCompany) {
    const { name, urlName, _id, reviewCount, vacancyCount, sumOfRatings } = args.company;
    const { openSalaryPopup, openReviewPopup } = args;
    const image = getCompanyImage(name as ValidCompanyNames);
    const { openAuthPopup } = useContext(GlobalContext);
    const { status } = useSession();

    function clickWithoutPropogation(e: MouseEvent, callback: ((...args: any[]) => any)) {
        callback();
        e.stopPropagation();
    }
    

    const reviewsExist = sumOfRatings > 0 && reviewCount > 0;
    const calculatedReview = reviewsExist ? sumOfRatings/reviewCount/20 : 0;


    return (
        <Link href={`/companies/${urlName}`}>
            <div className={style.company}>
                <div className={style.top}>
                    <div className={style.companyImage}>
                        <Image quality={30} src={image} alt={name} />
                    </div>
                </div>

                <div className={style.bottom}>
                    <h2 className={style.companyName}>{ name }</h2>

                    <div className={style.companyData}>
                        <span>
                            <div className={style.vacancyIcon}>
                                {/* <WorkRoundedIcon fontSize="small" /> */}
                                <WorkRoundedIcon />
                            </div>

                            <p>{ vacancyCount } ვაკანსია</p>
                        </span>

                        <span>
                            <div className={style.startIcon}>
                                <StarRoundedIcon fontSize="medium" /> 
                            </div>

                            <p>{ calculatedReview.toFixed(1) }/5 ({ reviewCount })</p>
                        </span>
                    </div>

                    
                    <div className={style.buttons}>
                        {/* <Button text={"ანაზღაურება"} /> */}

                        {/* <Button text={"შეფასება"} /> */}
                        <button 
                            style={{ transform: "translate('-100%')" }} 
                            title="ანაზღაურების დამატება" 
                            className={style.button} 
                            onClick={e => clickWithoutPropogation(e, status !== "authenticated" ? openAuthPopup : openSalaryPopup)}
                        >
                            ანაზღაურება
                        </button>

                        <button 
                            style={{ transform: "translate('-100%')" }} 
                            title="შეფასების დამატება" 
                            className={style.button} 
                            onClick={e => clickWithoutPropogation(e, status !== "authenticated" ?  openAuthPopup : openReviewPopup)}
                        >
                            შეფასება
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
}