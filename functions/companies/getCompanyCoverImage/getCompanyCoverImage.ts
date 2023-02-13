import companyCoverImages from "./companyCoverImages"
// import noImage from "public/images/companies/noimage.jpg"
import { ValidCompanyNames } from "types";

// export default function getCompanyImagePath(companyName: string) {
//     const imageNames = Object.keys(companyCoverImages);
//     const companyImageData = Object.values(companyCoverImages);

//     for(let i = 0; i < companyImageData.length; i++) {
//         if (companyImageData[i].names.includes(companyName)) {
//             // return `public/images/companies/${imageNames[i]}.png`;
//             return companyImageData[i].image;
//         }
//     }

//     // return "public/images/companies/noimage.jpg";
//     return noImage;
// }

/**
 * Returns src of company image or default image for not found
 */
export function getCompanyCoverImage(companyName: string) {
    return companyCoverImages[companyName] ?? null;
}