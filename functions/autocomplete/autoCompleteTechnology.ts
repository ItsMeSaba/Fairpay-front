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
const technologies = ["C#", "Javascript", "Kotlin", "Java", "Python", "Swift", "Go", "Laravel", "Node", "React", "Angular", "Vue", "HTML/CSS", "C", "C++", "Rust", "Typescript", "MySQL", "MongoDB", "PosgreSQL", "PHP", "CouchDB", "Firebase", "Ruby", "Ruby on Rails", "Symfony", "Asp.net", "Django", "Express", "Spring", "Flask", "jQuery", "Bootstrap", "Tailwind CSS", "Dart", "R", "Objective-C", "Perl", "NextJs", "Nestjs", "Assembly"];

interface Options {
    limit?: number;
}

export default function autoCompleteTechnology(userInput: string, options?: Options) {
    const sanitizedInput = userInput.replace(/[\\\/\*\?]/g, "");

    if (sanitizedInput.length === 0) return [];

    const regex = new RegExp(`^${sanitizedInput}`, "i");

    const results = [];

    for (let i = 0; i < technologies.length; i++) {
        if (regex.test(technologies[i])) results.push(technologies[i]);

        if (results.length === (options?.limit ?? 3)) break;
    }

    return results;
}