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
// const technologies = ["C#", "Javascript", "Kotlin", "Java", "Python", "Swift", "Go", "Laravel", "Node", "React", "Angular", "Vue", "HTML/CSS", "C", "C++", "Rust", "Typescript", "MySQL", "MongoDB", "PostgreSQL", "PHP", "CouchDB", "Firebase", "Ruby", "Ruby on Rails", "Symfony", "Django", "Express", "Spring", "Flask", "jQuery", "Bootstrap", "Tailwind CSS", "Dart", "R", "Objective-C", "Perl", "NextJs", "Nestjs", "Assembly", "Redis", "VBA", "MATLAB", "Bash/Shell", "SQLite", "MariaDB", "Microsoft SQL", "Firestore", "DynamoDB", "AWS", "Google Cloud", "Microsoft Azure", "Heroku", "DigitalOcean", "ASP.NET Core", "ASP.NET", "Svelte", "Blazor", "NuxtJs", "Drupal", ".NET", ".NET Core", "Flutter", "React Native", "Xamarin", "Docker", "Kubernetes", "Unity"];

import technologies from "data/technologies";

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