// const technologies = {
//     "C#": ["c sharp", "c hashtag"],
//     "Javascript": ["javascript", "js"],
//     "Node": ["node"],
//     "React": ["react"],
//     "Angular": ["angular"],
//     "HTML/CSS": ["html", "css"],
//     "PHP": ["php"],
//     "Laravel": ["laravel"],
//     "Go": ["go"],
//     "Vue": ["vue"],
//     ".Net": [".net"],
//     "Rust": ["rust"],
//     "Java": ["Java"],
//     "Kotlin": ["Kotlin"],
//     "P"
// }
const technologies = ["C#", "Javascript", "Kotlin", "Java", "Python", "Swift", "Go", "Laravel", "Node", "React", "Angular", "Vue", "HTML/CSS", "C", "C++", "Ruby", "Rust", "Typescript", "MySQL", "MongoDB", "PosgreSQL", "PHP", "CouchDB", "Firebase", "Ruby", "Ruby on Rails", "Symfony", "Asp.net", "Django", "Express", "Spring", "Flask", "jQuery", "Bootstrap"];

export default function autoCompleteTechnology(userInput: string) {
    // const sanitizedInput = userInput.replace(/[\\\/\*\?]/g, "");

    // if (sanitizedInput.length === 0) return [];

    // const regex = new RegExp(`^${sanitizedInput}`, "i");

    // return technologies.filter(technology => regex.test(technology));

    return technologies.filter(technology => technology.toLowerCase().startsWith(userInput.toLowerCase()))
}