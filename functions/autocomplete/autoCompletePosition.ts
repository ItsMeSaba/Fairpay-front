// const positions = ["Front end", "Back end", "Full stack", "Game", "Database", "Software"]

// const positions = {
//     "Front end": ["ფრონტ ენდ"], 
//     "Back end": ["ბექ ენდ"], 
//     "Full stack": ["ფულ სტაკ"], 
//     "Game": ["გეიმ"], 
//     "Database": ["დათაბეის"], 
//     "Software": ["სოფტვეარ"],
// }

const positions = {
    "Frontend Developer": ["ფრონტ ენდ დეველოპერი"], 
    "Backend Developer": ["ბექ ენდ დეველოპერი"], 
    "Fullstack Developer ": ["ფულ სტაკ დეველოპერი"], 
    "Game Developer": ["გეიმ დეველოპერი"], 
    "Database Developer": ["დაათაბეის დეველოპერი"], 
    "Software Developer": ["სოფტვეარ დეველოპერი"],
    "Software Engineer": ["სოფტვეარ ინჟინერი", "ინჟინერი"],
    "Team Lead": ["თიმ ლიდი"],
    "Machine Learning Engineer": ["მეშინ ლერნინგ ინჟინერი"],
    "Data Scientist": ["დათა საიენთისტ"],
    "Android Developer": ["ანდროიდ დეველოპერი"],
    "IOS Developer": ["იოს დეველოპერი"],
    "Mobile Developer": ["მობაილ დეველოპერი"],
    "UI Developer": ["უი დეველოპერი"],
    "UX Developer": ["უხ დეველოპერი"],
    "UI/UX Develooer": ["უი/უხ დეველოპერი"],
    "Dev ops": ["დევ ოპს"],
    "Tester": ["ტესტერი"]
}


interface Options {
    limit?: number
}

export default function autoCompletePosition(userInput: string, options?: Options) {
    const regex = new RegExp(`^${userInput.replace(/\\\//, "")}`, "i");
    const results: string[] = [];

    for(let [formatedName, nameVariations] of Object.entries(positions)) {
        const matchesFormatedName = regex.test(formatedName);

        const matchesDifferentVariants = nameVariations.some(variation => regex.test(variation));

        if (matchesFormatedName || matchesDifferentVariants) results.push(formatedName);

        // if (results.length === (options?.limit ?? 5)) break;
        if (results.length === 5) break;
    }

    return results;
}