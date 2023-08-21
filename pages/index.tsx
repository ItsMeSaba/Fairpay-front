import style from "styles/pages/index2.module.sass"
import Image from "next/image"
// import bussinesMan from "images/bussinesMan.png"
import bussinesMan from "images/bussinesMan2.png"
import yellowMan from "images/yellowMan.png"
import blobOne from "/images/blobOne.svg"
import blobTwo from "/images/blobTwo.svg"
import yellowWoman from "images/yellowWomanCut.png"
import line1 from "public/images/line1.svg"
// import line2 from "public/images/line2.svg"
import line2 from "public/images/line3.svg"
import monitor from "images/monitor.png"

interface Args {
	vacancies: any[]
}

export default function Index() {
	return (
		<div className={style.indexPage}>
			<div className={style.containerOne}>
				<div className={style.left}>
					<div className={style.blobOne}>
						<Image src={blobOne} alt="blob" width={500} height={500} />
					</div>

					<div className={style.blobTwo}>
						<Image src={blobTwo} width={500} height={500} alt="blob" />
					</div>

					<h1>იცოდე შენი<br /><span>ფასი</span></h1>
				</div>

				<div className={style.avatar}>
					{/* <img quality={80} src={bussinesMan} width={40} height={600} alt="https://icons8.com/illustrations/style--business-3d" /> */}
					<img src={bussinesMan.src} />
					{/* <Image src={bussinesMan} fill={true} objectFit="contain" /> */}
				</div>

				<div className={style.waveOne}>
					<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={style.shapeFill}></path>
					</svg>
				</div>
			</div>

			<div className={style.containerTwo}>
			 	<div className={style.right}>
					<h3 className={style.miniHeader}>რა არის Fairpay?</h3>

			 		<p>Fairpay არის პლატფორმა რომელიც სწორი კარიერული არჩევნის გაკეთებაში დაგეხმარება</p>

					<div className={style.line2}>
						<img src={line2.src} alt="https://icons8.com/illustrations/style--business-3d" />
					</div>
			 	</div>

			 	<div className={style.avatar}>
			 		{/* Thanks To https://icons8.com/illustrations/style--business-3d */}
			 		{/* <img quality={100} src={yellowMan} width={700} alt="https://icons8.com/illustrations/style--business-3d" /> */}
			 		<img src={yellowMan.src} />
				</div>
			</div>


			<div className={style.containerThree}>
				<div className={style.avatar}>
					{/* Thanks To https://icons8.com/illustrations/style--business-3d */}
					{/* <img quality={60} src={yellowWoman} alt="https://icons8.com/illustrations/style--business-3d" /> */}
					<img src={yellowWoman.src} />
				</div>

				
				<div className={style.left}>
					{/* <p>Fairpay საშუალებას აძლევს დეველოპერებს დააფიქსირონ საკუთარი აზრი კომპანიის შესახებ</p> */}
					<h3 className={style.miniHeader}>რას მთავაზობს Fairpay?</h3>

					<p>Fairpay საშუალებას გაძლევთ გასაუბრებაზე დროის ხარჯვის გარეშე გაიგოთ კომპანიაში არსებული პირობები</p>
					
					<div className={style.line1}>
						{/* <img quality={100} src={line1} alt="https://icons8.com/illustrations/style--business-3d" /> */}
						<img src={line1.src} />
					</div>
				</div>
			</div>


			<div className={style.containerFour}>
				<div className={style.left}>
					<div className={style.avatar}>
						{/* Thanks To https://icons8.com/illustrations/style--3d-business */}
						{/* <img quality={70} src={monitor} alt="https://icons8.com/illustrations/style--business-3d" /> */}
						<Image width={monitor.width/1.2} height={monitor.height/1.2} src={monitor.src} />
					</div>
				</div>

				<div className={style.right}>
					<h3 className={style.miniHeader}>განვითარება</h3>

					<p>ამ ეტპაზე Fairpay განკუთვნილია მხოლოდ დეველოპერებისთვის/პროგრამისტებისთვის. წარმატების შემთხვევაში პრიორიტეტებში რჩება სხვა დარგების ინტეგრირება</p>
				</div>
			</div>
		</div>
  	)
}

export async function getStaticProps() {
	return {
    props: {}, // will be passed to the page component as props
	}
}