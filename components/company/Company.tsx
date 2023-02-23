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
import Technologies from "components/technologies/Technologies";


interface CompanyArgs {
    company: CompanyType
}

export function Company(args: CompanyArgs) {
    const { vacancyCount, name, sumOfRatings, reviewCount } = args.company;

    const reviewsExist = sumOfRatings > 0 && reviewCount > 0;
    const calculatedReview = reviewsExist ? sumOfRatings/reviewCount/20 : 0;

    return (
        <CompanyBase company={args.company}>
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
        </CompanyBase>
    )
}


interface CompanyWithTechnologiesArgs {
    company: CompanyType
}

export function CompanyWithTechnologies(args: CompanyWithTechnologiesArgs) {
    const { technologies } = args.company;

    if (!technologies || technologies.length === 0) return null

    return (
        <CompanyBase company={args.company}>
            <Technologies technologies={technologies} />
        </CompanyBase>
    )
}



interface CompanyBaseArgs {
    company: CompanyType,
    children: React.ReactNode,
}

/**
 * Base is responsible for displaing general information(name, picutre, cover) of company
 */
function CompanyBase(args: CompanyBaseArgs) {
    const { children, company } = args;
    const { name, urlName, _id, reviewCount, vacancyCount, sumOfRatings, color } = company;
    const image = getCompanyImage(name as ValidCompanyNames);
    const coverImage = getCompanyCoverImage(name);

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

                    <div className={style.top}>
                        { coverImage && 
                            <div className={style.coverImage} style={{ backgroundImage: `url(${coverImage.src})` }}>
                                {/* <Image src={coverImage} alt={name} /> */}
                            </div>
                        }

                        { !coverImage && 
                            <div className={style.noImage} style={{ backgroundColor: `#${color}` }}></div> 
                        }

                        <div className={style.companyImage}>
                            <Image quality={30} src={image} alt={name} />
                        </div>
                        
                        <h2 className={style.companyName} title={name}>{ name }</h2>
                    </div>

                    <div className={style.bottom}>
                        { children }
                    </div>
                </div>
            </Link>
        </div>
    );
}

