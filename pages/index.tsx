import { Header } from "../components/header";
import { SalaryItem } from "../components/salaryItem";
import style from "../styles/index.module.sass"
import data from "../public/dummyData"

export default function Index() {
 	return (
		<div className={style.indexPage}>
			<Header />

			<div className={style.bgImage}>
				{/* <h1>Know Your<br/><u>Price</u></h1> */}
				{/* <h1>იცოდე შენი<br/>ფასი</h1> */}
			</div>

			<h1>Todays Statistics</h1>

			<DisplayItems />
		</div>
  	)
}


function DisplayItems() {
	return (
		<div className={style.salaryItems}>
			{
				data.map((item, index) => 
					<SalaryItem data={item} key={index} />
				)
			}
		</div>
	)
}