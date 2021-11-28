import { IASalaryItem } from "../../typescript/types/components/salaryItem";
import style from "styles/components/salaryItem.module.sass"
import Image from "next/image"
import space from "../../public/images/companies/space.png";
import vendoo from "../../public/images/companies/vendoo.png";
import bog from "../../public/images/companies/bog.png"
import fourk from "../public/images/4k.jpg";
import company1 from "../../public/images/companies/fortunejack.png";
import company2 from "../../public/images/companies/company2.png";
import { Currency, Vacancy, ValidCompanyNames } from "types";
import getCompanyImagePath, { getCompanyImage } from "functions/companies/images/getCompanyImage";

interface Args {
    vacancy: Vacancy
}

export function SalaryItem(args: Args) {
    const { company, salary, position, date, currency, technologies } = args.vacancy;
    // const companyImage = getCompanyImagePath(company);
    const companyImage = getCompanyImage(company as ValidCompanyNames);
    // const companyImage = require(`${imagePath}`).default;
    // const companyImage = require("public/images/companies/noimage.jpg").default;

    return (
        <div className={style.salaryItem}>
            <div className={style.left}>
                <div className={style.companyImage}>
                    {/* <Image quality="100" src={Math.random() > .5 ? company1 : company2} alt="" /> */}
                    <Image quality="100" src={companyImage} alt="" />
                </div>
            </div>

            <div className={style.center}>
                <div className="upper">
                    <p>{ company }</p>
                    <h2>{ position }</h2>
                    <h5>{ (new Date(date)).toLocaleDateString() }</h5>
                    {/* <h5>{ date?.toLocaleDateString() }</h5> */}
                </div>

                <br />
                
                <div className={style.bottom}>
                    <DisplayTechnologies technologies={technologies} />
                </div>
            </div>

            <div className={style.right}>
                <span className={style.salary}>{ salary }</span> {getCurreny(currency as Currency)}
            </div>
        </div>
    )
}   

interface DisplayTechnologiesArgs {
    technologies: string[]
}

function DisplayTechnologies(args: DisplayTechnologiesArgs) {
    const { technologies } = args;

    return (
        <div className="technologies">
            {
                technologies.map((technology, index) => {
                    return technology.trim().length > 0 ? <span key={index}>{ technology }</span> : false;
                })
            }
        </div> 
    )
}

function getCurreny(currency: Currency) {
    switch (currency) {
        case "eur":
            return "€"

        case "usd":
            return "$"
    }
    
    return "₾"
}