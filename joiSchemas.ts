import Joi from "joi";


export const SubmitSalarySchema = Joi.object({
    company: Joi
        .string()
        .required()
        .messages({
            "string.empty": "კომპანია სავალდებულოა"
        }),
    
    position: Joi
        .string()
        .required()
        .messages({
            "string.empty": "პოზიცია სავალდებულოა"
        }),

    seniority: Joi
        .string()
        .required()
        .messages({
            "string.empty": "გამოცდილება სავალდებულოა"
        }),

    salary: Joi
        .number()
        .required()
        .messages({
            "number.base": "ანაზღაურება სავალდებულოა"
        }),

        
    currency: Joi
        .string()
        .required()
        .messages({
            "string.empty": "ვალუტა სავალდებულოა"
        }),
        
    technologies: Joi
        .array()
        .items(Joi.string())
        .min(1)
        .messages({
            "array.min": "სავალდებულოა მინიმუმ ერთი ტექნოლოგია"
        }),

    userId: Joi
        .string(),
})


export const SubmitReviewSchema = Joi.object({
    company: Joi
        .string()
        .required()
        .messages({
            "string.empty": "კომპანია სავალდებულოა"
        }),
    
    rating: Joi
        .number()
        .min(5)
        .required()
        .messages({
            "number.min": "მინიმალური რეიტინგი არის 0.5"
        }),

    positiveReview: Joi
        .string()
        .allow(""),
    
    negativeReview: Joi
        .string()
        .allow(""),
    
    position: Joi
        .string()
        .allow(""),
    
    userId: Joi
        .string(),
})