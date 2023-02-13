import { Header } from "layouts/header";
import { useRouter } from "next/dist/client/router";
import style from "styles/pages/company.module.sass";
import bog from "public/images/companies/bog.png";
import Image from "next/image";
import CompanySalaries from "layouts/companySalaries";
import CompanyReviews from "layouts/companyReviews";
import axios from "axios";
import { useEffect, useState } from "react";
import fetchVanacies from "database/vacancies/fetchVacanciesByCompanyId";
import mongoose from "mongoose";
import { fetchCompany, fetchCompanyByUrlName } from "database/company/fetchCompany";
import { getCompanyImage } from "functions/companies/getCompanyImage/getCompanyImage";
import { ValidCompanyNames } from "types";
import AddSalaryButton from "components/buttons/AddSalaryButton";
import AddReviewButton from "components/buttons/AddReviewButton";
import wave1 from "public/images/wave1.svg"
import wave2 from "public/images/wake2.svg"
import AddInterviewButton from "components/buttons/AddInterviewButton";
import { useQuery } from "react-query";
import CompanyInterviews from "layouts/companyInterviews";

export default function Company() {
    const [companyData, setCompanyData] = useState<any>(null);
    const [display, setDsiplay] = useState<"salaries" | "reviews" | "interviews">("salaries");
    const router = useRouter();
    const image = companyData
        ? getCompanyImage(companyData.name as ValidCompanyNames)
        : null;
        
    useEffect(() => {
        // Getting company name from url
        const { company: companyUrlName } = router.query;
        console.log("COMPANYDATA", companyData);

        (async () => {

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

                        <div className={style.companyResults}>

                        </div>
        
                        <div className={style.buttons}>
                            <div
                                className={`${style.salariesCount} ${display === "salaries" ? style.active : ""}`}
                                onClick={() => setDsiplay("salaries")}
                            >
                                { companyData.vacancyCount } ანაზღაურება
                            </div>
                            <div
                                className={`${style.ratingsCount} ${display === "reviews" ? style.active : ""}`}
                                onClick={() => setDsiplay("reviews")}
                            >
                                { companyData.reviewCount } შეფასება
                            </div>
                            {/* <div
                                className={`${style.ratingsCount} ${display === "interviews" ? style.active : ""}`}
                                onClick={() => setDsiplay("interviews")}
                            >
                                { companyData?.reviewCount ?? 0 } გასაუბრება
                            </div> */}
                        </div>
                    </div>

                    {/* <div className={style.right}></div> */}
                </div>
            </div>


            <div className={style.bottom}>
                <div className={style.addDataButtonsPlaceHolder}>
                    <div></div>

                    <div className={style.addDataButtons}>
                        <AddSalaryButton customStyle={{ backgroundColor: `#${companyData?.color}FF` }} companyName={companyData.name} companyId={companyData._id} displayLongName={true} />
                        <AddReviewButton customStyle={{ backgroundColor: `#${companyData?.color}FF` }} companyName={companyData.name} companyId={companyData._id} displayLongName={true} />
                        {/* <AddInterviewButton customStyle={{ backgroundColor: `#${companyData?.color}FF` }} companyName={companyData.name} companyId={companyData._id} displayLongName={true} /> */}
                    </div>
                </div>

                {/* {companyData?.color && */}
                    <div className={style.upperWave}
                        style={{
                            backgroundColor: companyData?.color ? `#${companyData.color}BB` : "#b2bec3",
                        }}
                    >
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"
                        >
                            <path style={{ fill: "white" }} d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                        </svg>
                    </div>
                {/* } */}

                <div style={{ backgroundColor: companyData?.color ? `#${companyData.color}BB` : "#b2bec3" }}>
                    { companyData._id &&
                        <>
                            { display === "salaries" && (
                                <CompanySalaries companyId={companyData._id} />
                            )}

                            { display === "reviews" && (
                                <CompanyReviews companyId={companyData._id} />
                            )}

                            { display === "interviews" && (
                                <CompanyInterviews companyId={companyData._id} />
                            )}
                        </>  
                    }
                </div>

                {/* {companyData?.color && */}
                    <div className={style.bottomWave}
                        style={{
                            // position: "absolute",
                            // backgroundColor: `#${companyData?.color}DD`
                            backgroundColor: "white"
                        }}
                    >
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"
                            style={{
                                // fill: `#${companyData?.color}DD`,
                            }}
                        >
                            <path 
                                style={{ fill: companyData?.color ? `#${companyData.color}BB` : "#b2bec3" }} 
                                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                        </svg>
                    </div>
                {/* } */}
            </div>
        </div>
    );
}

async function getCompanyData(companyUrlName: string) {
    const company = await fetchCompanyByUrlName(companyUrlName as string);
        
    return company;
}