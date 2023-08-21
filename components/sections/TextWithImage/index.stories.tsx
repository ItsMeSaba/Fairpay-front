import { TextWithImage as TextWithImageComponent } from "./index"
import yellowMan from "images/yellowMan.png"
import yellowWoman from "images/yellowWomanCut.png"
import monitor from "images/monitor.png"
import { useIsMobile } from "hooks/useIsMobile"

export function TextWithImage() {
  const isMobile = useIsMobile();

  console.log("useIsMobile", isMobile)

  return (
    <>
      <TextWithImageComponent isFlipped={!isMobile} image={yellowMan} title="რა არის Fairpay?" description="lorem ipsum dollor lorem ipsum dollorlorem ipsum dollor" />
      <TextWithImageComponent image={yellowWoman} title="რა არის Fairpay?" description="lorem ipsum dollor lorem ipsum dollorlorem ipsum dollor" />
      <TextWithImageComponent isFlipped={!isMobile} image={monitor} title="რა არის Fairpay?" description="lorem ipsum dollor lorem ipsum dollorlorem ipsum dollor" />
    </>
  )
}

const story = {
  title: "Components/Section/TextWithImage",
  component: TextWithImage,
  args: {},
}

export default story;  