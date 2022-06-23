// import { Header } from "../components/header";
// import { SalaryItem } from "../components/salaryItems/salaryItem";
// import style from "styles/pages/index.module.sass"
import style from "styles/pages/index2.module.sass"
import Image from "next/image"
// import data from "../public/dummyData"
// import { SalaryItems } from "components/salaryItems/salaryItems";
// import svg from "../public/images/statisticsMan.svg"
// import svg2 from "../public/images/statisticsMan2.svg"
// import waves from "../public/images/waves.svg"
import bussinesMan from "../public/images/bussinesMan.png"
import blob1 from "../public/images/blob12.svg"
import blob3 from "../public/images/blob11.svg"
// import blob2 from "../public/images/blob7.png"
// import axios from "axios";
// import { Vacancies } from "types";
import man4test from "../public/images/man4test2.png"
import woman3 from "../public/images/woman3.png"
// import blob13 from "../public/images/blob13.svg"
// import autoCompleteTechnology from "functions/autocomplete/autoCompleteTechnology";
// import autoCompletePosition from "functions/autocomplete/autoCompletePosition";
import { useSession } from "next-auth/react"
// import AuthPopup from "components/popups/authPopup";
import { useState } from "react";
// import DataCountDisplay from "components/dataCountDisplay";


interface Args {
	vacancies: any[]
}

export default function Index(args: Args) {
	// const { vacancies } = args;
	const [displayAuthPopup, setDisplayAuthPopup] = useState(false);
	const { data: session, status } = useSession()

	console.log("USER ------->", session?.user, status);

 	return (
		<div className={style.indexPage}>
			<div className={style.containerOne}>
				<div className={style.left}>
					<div className={style.blobOne}>
						<Image quality={50} src={blob1} alt="blob" />
					</div>

					<div className={style.blobTwo}>
						<Image quality={50} src={blob3} alt="blob" />
					</div>

					<h1>იცოდე შენი<br /><span>ფასი</span></h1>
				</div>

				<div className={style.avatar}>
					{/* Illustration is taken from https://icons8.com/illustrations/style--business-3d */}

					<Image quality={100} src={bussinesMan} alt="https://icons8.com/illustrations/style--business-3d" />
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

			{/* <DataCountDisplay /> */}

			<div className={style.containerTwo}>
				{/* <div className={style.left}> */}
				<div className={style.avatar}>

					{/* Illustration is taken from https://icons8.com/illustrations/style--business-3d */}
					<Image quality={100} src={man4test} alt="https://icons8.com/illustrations/style--business-3d" />
				</div>
				{/* </div> */}

				<div className={style.right}>
					{/* <h1>განასხვავე კომპანიები</h1> */}
					<p>Fairpay ეხმარება დეველოპერებს გაიგონ რომელი კომპანია სთავაზობს უკეთეს პირობებს</p>
				</div>

				<div className={style.waveTwo}>
					<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={style.shapeFill}></path>
					</svg>
				</div>
			</div>

			<div className={style.containerThree}>
				<div className={style.left}>
					{/* <h1>გაიგე რომელი ტექნოლოგიებია ყველაზე მოთხოვნადი</h1> */}

					<p>Fairpay საშუალებას აძლევს დეველოპერებს დააფიქსირონ საკუთარი აზრი კომპანიის შესახებ</p>
				</div>

				<div className={style.right}>
					<div className={style.avatar}>
						{/* Illustration is taken from https://icons8.com/illustrations/style--business-3d */}
						<Image quality={100} src={woman3} alt="https://icons8.com/illustrations/style--business-3d" />
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
