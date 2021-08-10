import { ASalaryItem } from "../typescript/types/components/salaryItem";
import style from "../styles/components/salaryItem.module.sass"
import Image from "next/image"
import space from "../public/images/companies/space.png";
import vendoo from "../public/images/companies/vendoo.png";
import bog from "../public/images/companies/bog.png"
import fourk from "../public/images/4k.jpg";

export function SalaryItem(args: ASalaryItem) {
    const { company, salary, vacancy, date } = args.data;
    
    return (
        <div className={style.salaryItem}>
            <div className={style.left}>
                {/* <Image width="100px" height="100px" className={style.companyImage} src={Math.random() > .5 ? bog : space} alt="" /> */}
                <Image quality="100" width="120px" height="120px" className={style.companyImage} src={Math.random() > .5 ? bog : vendoo} alt="" />
                {/* <img src={space} alt="" /> */}
            </div>

            <div className={style.center}>
                <p>{ company }</p>
                <h2><b>{ vacancy }</b></h2>
                <h5>{ date?.toLocaleDateString() }</h5>
            </div>

            <div className={style.right}>
                <h3 className={style.salary}>{ salary }</h3>
            </div>
        </div>
    )
}