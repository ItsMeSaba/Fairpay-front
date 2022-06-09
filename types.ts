import mongoose, { ObjectId } from "mongoose";

export interface Vacancy {
    salary: string,
    position: string,
    company: string,
    currency: string,
    date: string,
    url: string,
    source: string,
    technologies: string[],
    seniority: string
}

export type Vacancies = Vacancy[];

export interface IReview {
    _id: string,
    rating: number,
    positiveReview: string,
    negativeReview: string,
    position: string,
    userReaction?: "like" | "dislike" | null,
    likeDislikeDifference: number,
}

export interface Company {
    _id: mongoose.Types.ObjectId
    name: string,
    urlName: string,
    vacancyCount: number,
    reviewCount: number,
    sumOfRatings: number,
}

export type Companies = Company[];

export type Currency = "gel" | "usd" | "eur"

export type FilterTypes = "technologies" | "seniorities" | "companies"

export type ToggledFilters = Record<FilterTypes, string[]>

export type ValidCompanyNames = 
    "ვაბაკო" |
    "Scandiweb" |
    "Neollet" |
    "აწარმოე საქართველოში" |
    "UniPAY" |
    "Gulf" |
    "Appidea" |
    "63BITS" |
    "Georgia Tech Tbilisi" |
    "Vendoo" |
    "Lemondo" |
    "საქართველოს მელიორაცია" |
    "Dexfinity" |
    "IRAO" |
    "NLYC" |
    "Linton Group" |
    "Dinespace" |
    "CoachNow" |
    "Helix Nebula Capital" |
    "Exadel" |
    "TAZE Technologies" |
    "Exactpro" |
    "Smart Web" |
    "Twino" |
    "საგანმანათლებლო ტექნოლოგიები საქართველო"

