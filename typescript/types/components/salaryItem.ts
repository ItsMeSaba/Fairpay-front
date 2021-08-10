export interface ISalaryItem {
    company: string;
    vacancy: string;
    salary: string;
    currency: string;
    date: Date;
}

export interface ASalaryItem {
    data: ISalaryItem
}