import style from "styles/pages/index2.module.sass"
import Image from "next/image"
import bussinesMan from "../public/images/bussinesMan.png"
// import blob1 from "../public/images/blob12.svg"
import blob1 from "../public/images/TestBlob.svg"
import blob3 from "../public/images/blob11.svg"
import man4test from "../public/images/man4test2.png"
import woman3 from "../public/images/woman3.png"
import { useEffect, useState } from "react";
import axios from "axios"
import useCheckAuth from "hooks/useCheckAuth"
import womanTest from "public/images/womanTest.png"
import TestBoy from "public/images/TestBoy.png"
import boySitting from "public/images/boySitting.png"
import yellowWoman from "public/images/yellowWoman.png"
import yellowWoman2 from "public/images/yellowWoman2.png"
import yellowMan from "public/images/yellowMan.png"
import line1 from "public/images/line1.svg"
// import line2 from "public/images/line2.svg"
import line2 from "public/images/line3.svg"
import monitor from "public/images/monitor.png"

interface Args {
	vacancies: any[]
}

export default function Index(args: Args) {
	// const [displayAuthPopup, setDisplayAuthPopup] = useState(false);
	// const { user, status } = useCheckAuth();

	// console.log("USER ------->", user?.id);

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
					{/* <Image quality={100} src={TestBoy} alt="https://icons8.com/illustrations/style--business-3d" /> */}
					{/* <Image quality={100} src={boySitting} alt="https://icons8.com/illustrations/style--business-3d" /> */}
				</div>

				<div className={style.waveOne}>
					<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={style.shapeFill}></path>
					</svg>
				</div>
			</div>

			<div className={style.containerTwo}>
			 	<div className={style.right}>
			 		{/* <p>Fairpay ეხმარება დეველოპერებს გაიგონ რომელი კომპანია სთავაზობს უკეთეს პირობებს</p> */}
					<h3 className={style.miniHeader}>ანაზღაურება</h3>

			 		<p>იპოვე კომპანია რომელიც შესაფერისად დააფასებს შენს ცოდნას და უნარებს</p>

					<div className={style.line2}>
						<Image quality={100} src={line2} alt="https://icons8.com/illustrations/style--business-3d" />
					</div>
			 	</div>

			 	<div className={style.avatar}>

			 		{/* Illustration is taken from https://icons8.com/illustrations/style--business-3d */}
			 		<Image quality={100} src={yellowMan} alt="https://icons8.com/illustrations/style--business-3d" />
			 	</div>


			 	{/* <div className={style.waveTwo}>
			 		<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
			 			<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={style.shapeFill}></path>
			 		</svg>
				</div> */}
			</div>


			<div className={style.containerThree}>
				<div className={style.right}>
					<div className={style.avatar}>
						{/* Illustration is taken from https://icons8.com/illustrations/style--business-3d */}
						{/* <Image quality={100} src={woman3} alt="https://icons8.com/illustrations/style--business-3d" /> */}
						<Image quality={100} src={yellowWoman2} alt="https://icons8.com/illustrations/style--business-3d" />
					</div>

				</div>
				
				<div className={style.left}>
					{/* <p>Fairpay საშუალებას აძლევს დეველოპერებს დააფიქსირონ საკუთარი აზრი კომპანიის შესახებ</p> */}
					<h3 className={style.miniHeader}>რეიტინგი</h3>

					<p>გაიგე რომელი კომპანიები სთავაზობენ დასაქმებულებს საუკეთესო გარემოს</p>
					
					<div className={style.line1}>
						<Image quality={100} src={line1} alt="https://icons8.com/illustrations/style--business-3d" />
					</div>
				</div>
			</div>


			<div className={style.containerFour}>
				<div className={style.left}>
					<div className={style.avatar}>
						<Image quality={100} src={monitor} alt="https://icons8.com/illustrations/style--business-3d" />
					</div>
				</div>

				<div className={style.right}>
					<h3 className={style.miniHeader}>განვითარება</h3>

					<p>ამ ეტპაზე Fairpay განკუთვნილია მხოლოდ დეველოპერთათვის. წარმატების შემთხვევაში პრიორიტეტებში რჩება სხვა დარგების ინტეგრირება</p>
				</div>
			</div>

		</div>
  	)
}

{/* <DataCountDisplay /> */}
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


// <div className={style.containerTwo}>
// 	{/* <div className={style.left}> */}
// 	<div className={style.avatar}>

// 		{/* Illustration is taken from https://icons8.com/illustrations/style--business-3d */}
// 		<Image quality={100} src={man4test} alt="https://icons8.com/illustrations/style--business-3d" />
// 	</div>
// 	{/* </div> */}

// 	<div className={style.right}>
// 		{/* <h1>განასხვავე კომპანიები</h1> */}
// 		<p>Fairpay ეხმარება დეველოპერებს გაიგონ რომელი კომპანია სთავაზობს უკეთეს პირობებს</p>
// 	</div>

// 	<div className={style.waveTwo}>
// 		<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
// 			<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={style.shapeFill}></path>
// 		</svg>
// 	</div>
// </div>

// <div className={style.containerThree}>
// 	<div className={style.left}>
// 		{/* <h1>გაიგე რომელი ტექნოლოგიებია ყველაზე მოთხოვნადი</h1> */}

// 		<p>Fairpay საშუალებას აძლევს დეველოპერებს დააფიქსირონ საკუთარი აზრი კომპანიის შესახებ</p>
// 	</div>

// 	<div className={style.right}>
// 		<div className={style.avatar}>
// 			{/* Illustration is taken from https://icons8.com/illustrations/style--business-3d */}
// 			<Image quality={100} src={woman3} alt="https://icons8.com/illustrations/style--business-3d" />
// 		</div>
// 	</div>
// </div>
