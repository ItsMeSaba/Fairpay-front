
const companies = {
    "საქართველოს ბანკი": ["საქართველოს ბანკი", "bank of georgia"],
    "თიბისი ბანკი": ["თიბისი ბანკი", "tbc bank", "თბს ბანკი"],
    "ვაბაკო": ["ვაბაკო", "vabako"],
    "Scandiweb": ["Scandiweb", "სკანდივები"],
    "Neollet": ["Neollet", "ნეოლეთი"],
    "აწარმოე საქართველოში": ["აწარმოე საქართველოში", "awarmoe sakartveloshi"],
    "UniPAY": ["UniPAY", "უნიფეი"],
    "Gulf": ["Gulf", "გალფი"],
    "Appidea": ["Appidea", "აპპიდეა"],
    "63BITS": ["63BITS", "63ბიტს"],
    "Georgia Tech Tbilisi": ["Georgia Tech Tbilisi", "გეორგია ტექ თბილისი"],
    "Vendoo": ["Vendoo", "ვენდო"],
    "Lemondo": ["Lemondo", "ლემონდო"],
    "საქართველოს მელიორაცია": ["საქართველოს მელიორაცია", "sakartvelos melioracia"],
    "Dexfinity": ["Dexfinity", "დექსფინიტი"],
    "IRAO": ["IRAO", "ირაო"],
    "NLYC": ["NLYC", "ნლის"],
    "Linton Group": ["Linton Group", "ლინტონ ჯგუფი"],
    "Dinespace": ["Dinespace", "დაინსფეისი"],
    "CoachNow": ["CoachNow", "ქოაჩნაუ"],
    "Helix Nebula Capital": ["Helix Nebula Capital", "ჰელიქს ნებულა კაპიტალ"],
    "Exadel": ["Exadel", "ექსადელ"],
    "TAZE Technologies": ["TAZE Technologies", "თაზე", "ტაზე"],
    "Exactpro": ["Exactpro", "ექსატქპრო"],
    "Smart Web": ["Smart Web", "სმარტ ვები"],
    "Twino": ["Twino", "ტვინო"],
    "საგანმანათლებლო ტექნოლოგიები საქართველო":  ["საგანმანათლებლო ტექნოლოგიები საქართველო", "saganmanatleblo teqnologiebi sakartvelo"],
    "Flat Rock Technology": ["flat rock technology", "ფლატ"],
    "Omedia": ["omedia", "ომედია"],
    "Theneo": ["Theneo", "თენეო"]
};

export default function autoCompleteCompany(userInput: string) {
    const regex = new RegExp(`^${userInput}`, "i");
    const results: string[] = [];
    // return companies.filter(company => regex.test(company));

    for (const [formatedName, nameVariations] of Object.entries(companies)) {
        const inputMatchesName = nameVariations.some(name => regex.test(name));

        if (inputMatchesName) results.push(formatedName);
    }
    
    return results;
}