import { Document } from "mongoose";


// export default function mongoDocsArrayToObject<T extends Document>(array: Document[]) {
//     const object: { [key: string]: T } = {};

//     for (let i = 0; i < array.length; i++) {
//         object[array[i]._id] = array[i];
//     }

//     return object;
// }

export default function mongoDocsArrayToObject<T extends Document>(array: T[]) {
    const object: { [key: string]: T } = {};

    for (const document of array) {
        object[document._id] = document;
    }

    return object;
} 