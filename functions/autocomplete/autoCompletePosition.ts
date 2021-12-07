// const positions = ["Front end", "Back end", "Full stack", "Game", "Database", "Software"]

const positions = {
    "Front end": ["ფრონტ ენდ"], 
    "Back end": ["ბექ ენდ"], 
    "Full stack": ["ფულ სტაკ"], 
    "Game": ["გეიმ"], 
    "Database": ["დათაბეის"], 
    "Software": ["სოფტვეარ"]
}
 

export default function autoCompletePosition(userInput: string) {
    const regex = new RegExp(`^${userInput.replace(/\\\//, "")}`, "i");
    const results: string[] = [];

    for(let [formatedName, nameVariations] of Object.entries(positions)) {
        const matchesFormatedName = regex.test(formatedName);

        const matchesDifferentVariants = nameVariations.some(variation => regex.test(variation));

        if (matchesFormatedName || matchesDifferentVariants) results.push(formatedName);
    }

    return results;
    // return positions.filter(position => regex.test(position));
}