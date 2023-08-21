import { Salary } from "components/modules/Salary"
import styles from "./styles.module.scss"
import { SalariesProps } from "./types"

export function Salaries({ salaries }: SalariesProps) {
  return (
    <div className="salaries">
      <p style={{
        fontSize: "1.3rem",
        color: "white",
        textAlign: "center", 
        margin: "2rem 0",
      }}>
        ინფორმაცია წარმოდგენილია ინდივიდუალური თვიური ანაზღაურებების სახით
      </p>

      {salaries?.map((salary, index: number) => 
        <Salary salary={salary} key={index} />
      )}
    </div>
  )
}