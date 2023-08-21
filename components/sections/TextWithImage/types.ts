import { StaticImageData } from "next/image"

export interface TextWithImageProps {
  title: string;
  description: string;
  image: StaticImageData;
  isFlipped?: boolean;
}