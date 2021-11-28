import path from "path"
import companyImages, { companyImages2 } from "./companyImages"
import noImage from "public/images/companies/noimage.jpg"
import { ValidCompanyNames } from "types";

export default function getCompanyImagePath(companyName: string) {
    const imageNames = Object.keys(companyImages);
    const companyImageData = Object.values(companyImages);

    for(let i = 0; i < companyImageData.length; i++) {
        if (companyImageData[i].names.includes(companyName)) {
            // return `public/images/companies/${imageNames[i]}.png`;
            return companyImageData[i].image;
        }
    }

    // return "public/images/companies/noimage.jpg";
    return noImage;
}

/**
 * Returns src of company image or default image for not found
 */
export function getCompanyImage(companyName: ValidCompanyNames) {
    return companyImages2[companyName] ?? noImage;
}