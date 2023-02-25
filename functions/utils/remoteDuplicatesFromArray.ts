

export default function removeDuplicatesFromArray<T>(...arrays: T[][]) {
    // const present: { [key: string]: boolean } = {};
    // const result: T[] = [];

    // for (let i = 0; i < arrays.length; i++) {
    //     for (let a = 0; a < arrays[i].length; a++) {
    //         let item = 
            
    //         if (present[])
    //     }
    // }

    const mixedArray = arrays.reduce((acc, cur) => [...acc, ...cur], []);

    return [...new Set(mixedArray)];
}