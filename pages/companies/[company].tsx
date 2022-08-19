import { Header } from "components/header";
import { useRouter } from "next/dist/client/router";
import style from "styles/pages/company.module.sass";
import bog from "public/images/companies/bog.png";
import Image from "next/image";
import CompanySalaries from "components/company/companySalaries";
import CompanyReviews from "components/company/companyReview";
import axios from "axios";
import { useEffect, useState } from "react";
import fetchVanacies from "database/functions/vacancies/fetchVacancies";
import mongoose from "mongoose";
import { fetchCompany, fetchCompanyByUrlName } from "database/functions/company/fetchCompany";
import { getCompanyImage } from "functions/companies/images/getCompanyImage";
import { ValidCompanyNames } from "types";
import AddSalaryButton from "components/buttons/AddSalaryButton";
import AddReviewButton from "components/buttons/AddReviewButton";

export default function Company() {
    const [companyData, setCompanyData] = useState<any>(null);
    const [display, setDsiplay] = useState<"salaries" | "reviews">("salaries");
    const router = useRouter();
    const image = companyData
        ? getCompanyImage(companyData.name as ValidCompanyNames)
        : null;
        
    useEffect(() => {
        // Getting company name from url
        const { company: companyUrlName } = router.query;

        (async () => {

            console.log("companyUrlName", companyUrlName)
            const company = await getCompanyData(companyUrlName as string);

            setCompanyData(company);
        })();
    }, [router]);

    if (!companyData) return false;

    return (
        <div className={style.page}>

            <div className={style.company}>
                <div className={style.info}>
                    <div className={style.left}>
                        <div className={style.image}>
                            {/* <Image src={bog} alt="bog" /> */}
                            {image && <Image src={image} alt="bog" />}
                        </div>
                    </div>

                    <div className={style.center}>
                        <h1>{companyData?.name}</h1>
        
                        <div className={style.buttons}>
                            <div
                                className={`${style.salariesCount} ${display === "salaries" ? style.active : ""}`}
                                onClick={() => setDsiplay("salaries")}
                            >
                                { companyData.vacancyCount } ხელფასი
                            </div>
                            <div
                                className={`${style.ratingsCount} ${display === "reviews" ? style.active : ""}`}
                                onClick={() => setDsiplay("reviews")}
                            >
                                { companyData.reviewCount } შეფასება
                            </div>
                        </div>
                    </div>

                    {/* <div className={style.right}></div> */}
                </div>
            </div>


            <div className={style.bottom}>
                <div className={style.addDataButtons}>
                    <AddSalaryButton companyName={companyData.name} companyId={companyData._id} displayLongName={true} />
                    <AddReviewButton companyName={companyData.name} companyId={companyData._id} displayLongName={true} />
                </div>


                {display === "salaries" && (
                    <CompanySalaries companyId={companyData._id} />
                )}

                {display === "reviews" && (
                    <CompanyReviews companyId={companyData._id} />
                )}
            </div>
        </div>
    );
}

async function getCompanyData(companyUrlName: string) {
    console.log("companyUrlName", companyUrlName);
    const company = await fetchCompanyByUrlName(companyUrlName as string);
    
    console.log("company", company);
    
    return company;
}