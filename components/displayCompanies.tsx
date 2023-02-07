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
import bogCover from "public/images/companies/bogCover.png"
import vendooCover from "public/images/companies/vendooCover.jpeg"
import vabakoCover from "public/images/companies/vabakoCover.png"
import qarvaCover from "public/images/companies/qarvaCover.jpg"
import neolletCover from "public/images/companies/neolletCover.jpg"
import azryCover from "public/images/companies/azryCover.jpg"
import sweeftDfitialCover from "public/images/companies/sweeftDigitalCover.jpg"
import dexfinityCover from "public/images/companies/dexfinityCover.jpg"
import bits63Cover from "public/images/companies/bits63Cover.jpg"
import omediaCover from "public/images/companies/omediaCover.png"
import redberryCover from "public/images/companies/redberryCover.png"
import publicRegistryCover from "public/images/companies/publicRegistryCover.jpg"
import { getCompanyCoverImage } from "functions/getCompanyCoverImage/getCompanyCoverImage";

interface DisplayCompanies {
    companies: Companies
    openSalaryPopup: (company: string, companyId: Types.ObjectId) => void
    openReviewPopup: (company: string, companyId: Types.ObjectId) => void
}

export function DisplayCompanies(args: DisplayCompanies) {
    const { companies, openReviewPopup, openSalaryPopup } = args;
    const sortedCompanies = useMemo(() => companies.sort((a, b) => b.documentsCount - a.documentsCount), [companies.length]);

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
    const coverImage = getCompanyCoverImage(name);
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
                {/* <div className={style.company} style={{ borderTop: `solid 12px #${color ?? "a4b0be"}` }}> */}
                <div className={style.company}>


                    { coverImage && 
                        <div className={style.coverImage} style={{ backgroundImage: `url(${coverImage.src})` }}>
                            {/* <Image src={coverImage} alt={name} /> */}
                        </div>
                    }

                    { !coverImage && 
                        <div className={style.noImage} style={{ backgroundColor: `#${color}` }}></div> 
                    }


                    <div className={style.top}>
                        <div className={style.companyImage}>
                            <Image quality={30} src={image} alt={name} />
                        </div>
                    </div>

                    <div className={style.bottom}>
                        <h2 className={style.companyName} title={name}>{ name }</h2>

                        <div className={style.companyData}>
                            <span>
                                <div className={style.vacancyIcon}>
                                    <WorkRoundedIcon />
                                </div>

                                <p>{ vacancyCount } ანაზღ.</p>
                            </span>

                            <span>
                                <div className={style.startIcon}>
                                    <StarRoundedIcon fontSize="medium" /> 
                                </div>

                                <p>{ calculatedReview.toFixed(1) }/5 ({ reviewCount })</p>
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}