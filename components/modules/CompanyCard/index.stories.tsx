import { CompanyCard as CompanyCardComponent } from "./index"

export function CompanyCard() {
  return (
    <CompanyCardComponent
      company={{
        _id: "55ABC",
        documentsCount:35,
        name:"TBC Bank",
        reviewCount:15,
        sumOfRatings:60,
        vacancyCount:20,
        urlName:"tbc-bank",
      }}
    />
  )
}

const story = {
  title: "Components/Modules/CompanyCard",
  component: CompanyCard,
  args: {},
}

export default story;  