import { Salary as SalaryComponent } from "./index"

export function Salary() {
  return (
    <>
      <SalaryComponent
        currency="usd"
        position="Front End"
        salary="5000"
        seniority="Senior"
        technologies={['javascript', 'typescript']}
        date="5 May"
      />

      <SalaryComponent
        currency="usd"
        position="Front End"
        salary="5000"
        seniority="Senior"
        technologies={['javascript', 'typescript']}
        date="5 May"
        company={{
          name: "TBC Bank"
        }}
      />
    </>
  )
}

const story = {
  title: "Components/Modules/Salary",
  component: Salary,
  args: {},
}

export default story;  