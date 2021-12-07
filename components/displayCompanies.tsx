import companiesList from "data/companies";
import Image from "next/image"
import style from "styles/components/displayCompanies.module.sass"
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import Button from "./buttons/button";
import { Companies, Company, ValidCompanyNames } from "types";
import { getCompanyImage } from "functions/companies/images/getCompanyImage";

interface Args {
    companies: Companies
    openSalaryPopup: () => void
    openReviewPopup: () => void
}

export function DisplayCompanies(args: Args) {
    const { companies, openReviewPopup, openSalaryPopup } = args;

    return (
        <div className={style.companies}>
            {
                companies.map((company, index) => {
                    return <DisplayCompany company={company} key={index} openReviewPopup={openReviewPopup} openSalaryPopup={openSalaryPopup} />
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
    const { name } = args.company;
    const { openSalaryPopup, openReviewPopup } = args;
    // const imageImport = require(`public/images/companies/${name}`).default; 
    const image = getCompanyImage(name as ValidCompanyNames);

    return (
        <div className={style.company}>
            <div className={style.top}>
                <div className={style.companyImage}>
                    <Image quality={100} src={image} alt={name} />
                </div>
            </div>

            <div className={style.bottom}>
                <h2 className={style.companyName}>{ name }</h2>

                <div className={style.companyData}>
                    <span>
                        <div className={style.vacancyIcon}>
                            <WorkRoundedIcon />
                        </div>

                        36 ვაკანსია
                    </span>

                    <span>
                        <div className={style.startIcon}>
                            <StarRoundedIcon /> 
                        </div>

                        4.5/5
                    </span>
                </div>

                
                <div className={style.buttons}>
                    {/* <Button text={"ანაზღაურება"} /> */}

                    {/* <Button text={"შეფასება"} /> */}
                    <button className={style.button} onClick={openSalaryPopup}>ანაზღაურება</button>
                    <button className={style.button} onClick={openReviewPopup}>შეფასება</button>
                </div>
            </div>
        </div>
    );
}