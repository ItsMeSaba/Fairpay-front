import { Header as HeaderComponent } from "./index"

export function Header() {
  return <HeaderComponent openAuth={() => null} openSliderMenu={() => null} />
}

const story = {
  title: "Components/Section/Header",
  component: Header,
  args: {},
}

export default story;  