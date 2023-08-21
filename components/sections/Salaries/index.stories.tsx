import { Salaries as SalariesComponent } from "./index"

export function Salaries() {
  return <SalariesComponent
    salaries={[
      {
        currency:"usd",
        position:"Front End",
        salary:"5000",
        seniority:"Senior",
        technologies: ['javascript', 'typescript'],
        date:"5 May",
      },
      {
        currency:"usd",
        position:"Front End",
        salary:"5000",
        seniority:"Senior",
        technologies: ['javascript', 'typescript'],
        date:"5 May",
      },
      {
        currency:"usd",
        position:"Front End",
        salary:"5000",
        seniority:"Senior",
        technologies: ['javascript', 'typescript'],
        date:"5 May",
      },
      {
        currency:"usd",
        position:"Front End",
        salary:"5000",
        seniority:"Senior",
        technologies: ['javascript', 'typescript'],
        date:"5 May",
      },
    ]}
  />
}

const story = {
  title: "Components/Section/Salaries",
  component: Salaries,
  args: {},
}

export default story;  