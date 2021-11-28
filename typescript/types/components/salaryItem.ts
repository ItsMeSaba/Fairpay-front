export interface ISalaryItem {
    company: string;
    vacancy: string;
    salary: string;
    currency: string;
    date: Date;
}

export interface IASalaryItem {
    item: ISalaryItem,
    isAdmin?: boolean,
}

export interface Vacancies {
    vacncies: any[],
    isAdmin?: boolean,
}