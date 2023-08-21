import { Slider as SliderComponent } from "./index"

export function Slider() {
  return <SliderComponent isOpen={true} close={() => null} openAuthPopup={() => null} />
}

const story = {
  title: "Components/Modules/Slider",
  component: Slider,
  args: {},
}

export default story;  