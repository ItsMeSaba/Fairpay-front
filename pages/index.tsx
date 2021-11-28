import { Header } from "../components/header";
import { SalaryItem } from "../components/salaryItems/salaryItem";
// import style from "styles/pages/index.module.sass"
import style from "styles/pages/index2.module.sass"
import Image from "next/image"
// import data from "../public/dummyData"
import { SalaryItems } from "components/salaryItems/salaryItems";
import svg from "../public/images/statisticsMan.svg"
import svg2 from "../public/images/statisticsMan2.svg"
import waves from "../public/images/waves.svg"
import bussinesMan from "../public/images/bussinesMan.png"
import blob1 from "../public/images/blob12.svg"
import blob3 from "../public/images/blob11.svg"
import blob2 from "../public/images/blob7.png"
import axios from "axios";
import { Vacancies } from "types";
import { dummyVacanies } from "data/dummyVacancies";
import workPlace from "../public/images/workPlace.png"
import review from "../public/images/review.png"
import workMan from "../public/images/workMan.png"
import workMan2 from "../public/images/workMan2.png"
import woman from "../public/images/woman.png"
import woman2 from "../public/images/woman2.png"
import man2 from "../public/images/man2.png"
import man3 from "../public/images/man3.png"
import man4 from "../public/images/man4.png"
import man4test from "../public/images/man4test.png"
import waveOne from "../public/images/waveOne.svg"
import laptop from "../public/images/laptop.png"
import laptop2 from "../public/images/laptop2.png"
import browser from "../public/images/browser.png"
import woman3 from "../public/images/woman3.png"
import blob13 from "../public/images/blob13.svg"

interface Args {
	vacancies: any[]
}

export default function Index(args: Args) {
	// const { vacancies } = args;
	const vacancies = dummyVacanies;

 	return (
		<div className={style.indexPage}>
			<Header />

			<div className={style.containerOne}>
				<div className="left">
					<div className={style.blobOne}>
						<Image quality="100" src={blob1} alt="blob" />
					</div>

					<div className={style.blobTwo}>
						<Image quality="100" src={blob3} alt="blob" />
					</div>

					<h1>იცოდე შენი<br /><span>ფასი</span></h1>
				</div>

				<div className="right">
					<div className={style.avatar}>
						<Image quality="100" src={bussinesMan} alt="bussinesMan" />
					</div>
				</div>

				<div className={style.waveOne}>
					<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={style.shapeFill}></path>
					</svg>
				</div>

				{/* <div className={style.waveTwo}>
					<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={style.shapeFill}></path>
					</svg>
				</div> */}
			</div>

			{/* <div className={style.latestSalaries}>
				<h1 className={style.header}>უახლესი მონაცემები</h1>

				<SalaryItems vacancies={vacancies} />
			</div> */}

			<div className={style.containerTwo}>
				<div className={style.left}>
					<div className={style.avatar}>
						<Image quality={100} src={man4test} alt="workPlace" />
					</div>
				</div>

				<div className={style.right}>
					<h1>განასხვავე კომპანიები</h1>
				</div>

				<div className={style.waveTwo}>
					<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={style.shapeFill}></path>
					</svg>
				</div>
			</div>

			<div className={style.containerThree}>
				<div className={style.left}>
					<h1>გაიგე რომელი ტექნოლოგიებია ყველაზე მოთხოვნადი</h1>
				</div>

				<div className={style.right}>
					<div className={style.avatar}>
						<Image quality={100} src={woman3} alt="workPlace" />
					</div>
				</div>
			</div>

		</div>
  	)
}

// export async function getStaticProps() {
// 	// const response = await fetch("http://localhost:5000/api/vacancies");
// 	// const vacancies = response.json();
// 	const vacancies = await axios.get("http://localhost:5000/api/vacancies");
// 	// console.log(response)
// 	// const vacancies = response.json();
// 	console.log("response", vacancies.data)

// 	return {
// 		props: {
// 			vacancies: vacancies.data,
// 		}
// 	}
// }
