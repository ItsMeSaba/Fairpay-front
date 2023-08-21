import { IASalaryItem } from "../../typescript/types/components/salaryItem";
import style from "styles/components/salaryItem.module.sass"
import Image from "next/image"
import space from "../../public/images/companies/space.png";
import vendoo from "../../public/images/companies/vendoo.png";
import bog from "../../public/images/companies/bog.png"
import fourk from "../public/images/4k.jpg";
import company1 from "../../public/images/companies/fortunejack.png";
import company2 from "../../public/images/companies/company2.png";
import { Currency, Vacancy, VacancyWithCompany, ValidCompanyNames } from "types";
import getCompanyImagePath, { getCompanyImage } from "functions/companies/getCompanyImage/getCompanyImage";

interface Args {
    vacancy: VacancyWithCompany
}

export function Salary(args: Args) {
    const { companyId, salary, position, date, currency, technologies, seniority } = args.vacancy;
    const { name } = companyId;
    // const companyImage = getCompanyImagePath(company);
    const companyImage = getCompanyImage(name as ValidCompanyNames);
    // const companyImage = require(`${imagePath}`).default;
    // const companyImage = require("public/images/companies/noimage.jpg").default;

    return (
        <div className={style.salaryItem}>
            <div className={style.left}>
                <div className={style.companyImage}>
                    {/* <img quality="100" src={Math.random() > .5 ? company1 : company2} alt="" /> */}
                    <img quality="100" src={companyImage} alt="" />
                </div>
            </div>

            <div className={style.center}>
                <div className="upper">
                    <p>{ name }</p>
                    <h2>{ position } { seniority ? `(${seniority})` : "" }</h2>
                    <h5>{ (new Date(date)).toLocaleDateString() }</h5>
                    {/* <h5>{ date?.toLocaleDateString() }</h5> */}
                </div>

                {/* <br /> */}
                
                <div className={style.bottom}>
                    <DisplayTechnologies technologies={technologies} />
                </div>
            </div>

            <div className={style.right}>
                <span className={style.salary}>{ salary } - { salary + 500 }</span> {getCurreny(currency as Currency)}
            </div>
        </div>
    )
}   

export function SalaryWithoutCompany(args: Args) {
    const { company, salary, position, date, currency, technologies, seniority } = args.vacancy;

    return (
        <div className={style.salaryItemWithoutCompany}>
            <div className={style.left}>
                <div className={style.top}>
                    <h2>{ position } { seniority ? `(${seniority})` : "" }</h2>
                    <h5>{ (new Date(date)).toLocaleDateString() }</h5>
                    {/* <h5>{ date?.toLocaleDateString() }</h5> */}
                </div>

                {/* <br /> */}
                
                <div className={style.bottom}>
                    <DisplayTechnologies technologies={technologies} />
                </div>
            </div>

            <div className={style.right}>
                <span className={style.salary}>{ salary } - { salary + 500 }</span> {getCurreny(currency as Currency)}
            </div>
        </div>
    )
}


/////////////////////////////

interface DisplayTechnologiesArgs {
    technologies: string[]
}

function DisplayTechnologies(args: DisplayTechnologiesArgs) {
    const { technologies } = args;

    return (
        <div className={style.technologies}>
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