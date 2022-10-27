import { Header } from "components/header";
import { useRouter } from "next/dist/client/router";
import style from "styles/pages/company.module.sass";
import bog from "public/images/companies/bog.png";
import Image from "next/image";
import CompanySalaries from "components/company/companySalaries";
import CompanyReviews from "components/company/companyReview";
import axios from "axios";
import { useEffect, useState } from "react";
import fetchVanacies from "database/functions/vacancies/fetchVacanciesByCompanyId";
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
                    <AddSalaryButton customStyle={{ backgroundColor: `#${companyData?.color}FF` }} companyName={companyData.name} companyId={companyData._id} displayLongName={true} />
                    <AddReviewButton customStyle={{ backgroundColor: `#${companyData?.color}FF` }} companyName={companyData.name} companyId={companyData._id} displayLongName={true} />
                </div>

                {companyData?.color &&
                    <div className="custom-shape-divider-top-1666868342"
                        style={{
                            // position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            overflow: "hidden",
                            lineHeight: 0,
                            backgroundColor: `#${companyData?.color}BB`
                        }}
                    >
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"
                            style={{
                                position: "relative",
                                display: "block",
                                width: "calc(120% + 1.3px)",
                                height: "156px",
                                // fill: `#${companyData?.color}DD`,
                            }}
                        >
                            <path style={{ fill: "white" }} d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                        </svg>
                    </div>
                }

                <div style={{ backgroundColor: `#${companyData?.color}BB` ?? "#FFFFFF" }}>
                    {display === "salaries" && (
                        <CompanySalaries companyId={companyData._id} />
                    )}

                    {display === "reviews" && (
                        <CompanyReviews companyId={companyData._id} />
                    )}
                </div>

                {companyData?.color &&
                    <div className="custom-shape-divider-top-1666868342"
                        style={{
                            // position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            overflow: "hidden",
                            lineHeight: 0,
                            // backgroundColor: `#${companyData?.color}DD`
                            backgroundColor: "white"
                        }}
                    >
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"
                            style={{
                                position: "relative",
                                display: "block",
                                width: "calc(176% + 1.3px)",
                                height: "156px",
                                // fill: `#${companyData?.color}DD`,
                            }}
                        >
                            <path 
                                style={{ fill: companyData?.color ? `#${companyData?.color}BB` : "white" }} 
                                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                        </svg>
                    </div>
                }
            </div>
        </div>
    );
}

async function getCompanyData(companyUrlName: string) {
    const company = await fetchCompanyByUrlName(companyUrlName as string);
        
    return company;
}