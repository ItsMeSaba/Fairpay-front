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
import { MouseEvent, useContext, useMemo } from "react";
import { GlobalContext } from "context";
import { Types } from "mongoose";
import AddSalaryButton from "./buttons/AddSalaryButton";
import AddReviewButton from "./buttons/AddReviewButton";
import { rememberCurrentPage } from "functions/sessionStorage/rememberCurrentPage";
// import useMemo from "react";

interface DisplayCompanies {
    companies: Companies
    openSalaryPopup: (company: string, companyId: Types.ObjectId) => void
    openReviewPopup: (company: string, companyId: Types.ObjectId) => void
}

export function DisplayCompanies(args: DisplayCompanies) {
    const { companies, openReviewPopup, openSalaryPopup } = args;
    const sortedCompanies = useMemo(() => companies.sort((a, b) => b.documentsCount - a.documentsCount), [companies.length]);
    // console.log(companies[0])

    return (
        <div className={style.companies}>
            {
                // companies.map((company, index) => {
                sortedCompanies.map((company, index) => {
                    return <DisplayCompany 
                            company={company} 
                            key={String(company._id)} 
                            openReviewPopup={() => openReviewPopup(company.name, company._id)} 
                            openSalaryPopup={() => openSalaryPopup(company.name, company._id)} 
                        />
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
    const { name, urlName, _id, reviewCount, vacancyCount, sumOfRatings, color } = args.company;
    const { openSalaryPopup, openReviewPopup } = args;
    const image = getCompanyImage(name as ValidCompanyNames);
    const { openAuthPopup } = useContext(GlobalContext);

    function clickWithoutPropogation(e: MouseEvent, callback: ((...args: any[]) => any)) {
        callback();
        e.stopPropagation();
    }
    

    const reviewsExist = sumOfRatings > 0 && reviewCount > 0;
    const calculatedReview = reviewsExist ? sumOfRatings/reviewCount/20 : 0;


    return (
        <div className="holder" onClick={rememberCurrentPage}>
            <Link href={`/companies/${urlName}`}>
                <div className={style.company} style={{ borderTop: `solid 5px #${color ?? "gray"}`  }}>
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
                            <AddSalaryButton companyId={_id} companyName={name} />

                            <AddReviewButton companyId={_id} companyName={name} />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}