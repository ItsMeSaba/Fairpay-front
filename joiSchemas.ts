import Joi from "joi";


// export const SubmitSalarySchema = Joi.object({
//     companyId: Joi
//         // .string()
//         // .required()
//         // .messages({
//         //     "string.empty": "კომპანია სავალდებულოა"
//         // }),
//         .any()
//         .required()
//         .messages({
//             "any.empty": "კომპანიის მოძებნის დროს მოხდა შეცდომა"
//         }),
    
//     position: Joi
//         .string()
//         .trim()
//         .required()
//         .messages({
//             "string.empty": "პოზიცია სავალდებულოა"
//         }),

//     seniority: Joi
//         .string()
//         .trim()
//         .required()
//         .messages({
//             "string.empty": "გამოცდილება სავალდებულოა"
//         }),

//     salary: Joi
//         .number()
//         .required()
//         .messages({
//             "number.base": "ანაზღაურება სავალდებულოა"
//         }),

        
//     currency: Joi
//         .string()
//         .trim()
//         .required()
//         .messages({
//             "string.empty": "ვალუტა სავალდებულოა"
//         }),
        
//     technologies: Joi
//         .array()
//         .items(Joi.string())
//         .min(1)
//         .messages({
//             "array.min": "სავალდებულოა მინიმუმ ერთი ტექნოლოგია"
//         }),

//     userId: Joi
//         .string(),
// })

export const SubmitSalarySchema = Joi.object({
    companyId: Joi
        .string()
        .trim()
        .required()
        .pattern(new RegExp(/^[a-z0-9]{10,90}$/i))
        .messages({
            "string.pattern.base": "დაფიქსირდა ხარვეზი. სცადეთ მოგვიანებით.",
            "string.base": "დაფიქსირდა ხარვეზი. სცადეთ მოგვიანებით",
            "string.empty": "დაფიქსირდა ხარვეზი. სცადეთ მოგვიანებით",
            "any.required": "დაფიქსირდა ხარვეზი. სცადეთ მოგვიანებით",
        }),

    userId: Joi
        .string()
        .trim()
        .required()
        .pattern(new RegExp(/^[a-z0-9]{10,90}$/i))
        .messages({
            "string.pattern.base": "დაფიქსირდა ხარვეზი. სცადეთ მოგვიანებით.",
            "string.base": "დაფიქსირდა ხარვეზი. სცადეთ მოგვიანებით",
            "string.empty": "დაფიქსირდა ხარვეზი. სცადეთ მოგვიანებით",
            "any.required": "დაფიქსირდა ხარვეზი. სცადეთ მოგვიანებით",
        }),

    position: Joi
        .string()
        .trim()
        .min(5)
        .max(30)
        .required()
        .messages({
            "string.base": "პოზიცია სავალდებულოა",
            "string.empty": "პოზიცია სავალდებულოა",
            "string.min": "პოზიცია უნდა შეიცავდეს მინიმუმ 5 სიმბოლოს",
            "string.max": "პოზიცია უნდა შეიცავდეს მაქსიმუმ 30 სიმბოლოს",
            "any.required": "პოზიცია სავალდებულოა",
        }),

    seniority: Joi
        .string()
        .trim()
        .min(5)
        .max(30)
        .required()
        .messages({
            "string.min": "გამოცდილება უნდა შეიცავდეს მინიმუმ 3 სიმბოლოს",
            "string.max": "გამოცდილება უნდა შეიცავდეს მინიმუმ 30 სიმბოლოს",
            "string.empty": "გამოცდილება სავალდებულოა",
            "string.base": "გამოცდილება სავალდებულოა",
            "any.required": "გამოცდილება სავალდებულოა",
        }),

    salary: Joi
        .number()
        .required()
        .min(0)
        .max(300000)
        .messages({
            "number.min": "ანაზღაურება 0-ზე ნაკლები ვერ იქნება",
            "number.max": "ანაზღაურება 300000-ზე მეტი ვერ იქნება",
            "number.base": "ანაზღაურება სავალდებულოა",
            "any.required": "ანაზღაურება სავალდებულოა"
        }),


    currency: Joi
        .string()
        .trim()
        .valid("gel", "usd", "eur")
        .required()
        .messages({
            "string.empty": "ვალუტა სავალდებულოა",
            "string.base": "ვალუტა სავალდებულოა",
            "any.required": "ვალუტა სავალდებულოა",
            "any.only": "დასაშვები ვალუტებია მხოლოდ: ₾, $, €",
        }),

    technologies: Joi
        .array()
        .required()
        .items(Joi.string())
        .min(1)
        .messages({
            "array.min": "სავალდებულოა მინიმუმ ერთი ტექნოლოგია",
            "any.required": "სავალდებულოა მინიმუმ ერთი ტექნოლოგია",
            "array.base": "სავალდებულოა მინიმუმ ერთი ტექნოლოგია",
            "string.base": "სავალდებულოა მინიმუმ ერთი ტექნოლოგია",
            "string.empty": "სავალდებულოა მინიმუმ ერთი ტექნოლოგია",
        }),
    });

// export const SubmitReviewSchema = Joi.object({
//     company: Joi
//         .string()
//         .required()
//         .messages({
//             "string.empty": "კომპანია სავალდებულოა"
//         }),
    
//     rating: Joi
//         .number()
//         .min(5)
//         .required()
//         .messages({
//             "number.min": "მინიმალური რეიტინგი არის 0.5"
//         }),

//     positiveReview: Joi
//         .string()
//         .allow(""),
    
//     negativeReview: Joi
//         .string()
//         .allow(""),
    
//     position: Joi
//         .string()
//         .allow(""),
    
//     userId: Joi
//         .string(),
// })

export const SubmitReviewSchema = Joi.object({
    companyId: Joi
        .string()
        .trim()
        .required()
        .pattern(new RegExp(/^[a-z0-9]{10,90}$/i))
        .messages({
            "string.pattern.base": "დაფიქსირდა ხარვეზი. სცადეთ მოგვიანებით.",
            "string.base": "დაფიქსირდა ხარვეზი. სცადეთ მოგვიანებით",
            "string.empty": "დაფიქსირდა ხარვეზი. სცადეთ მოგვიანებით",
          	"any.required": "დაფიქსირდა ხარვეზი. სცადეთ მოგვიანებით",
        }),

    userId: Joi
        .string()
        .trim()
        .required()
        .pattern(new RegExp(/^[a-z0-9]{10,90}$/i))
        .messages({
            "string.pattern.base": "დაფიქსირდა ხარვეზი. სცადეთ მოგვიანებით.",
            "string.base": "დაფიქსირდა ხარვეზი. სცადეთ მოგვიანებით",
            "string.empty": "დაფიქსირდა ხარვეზი. სცადეთ მოგვიანებით",
          	"any.required": "დაფიქსირდა ხარვეზი. სცადეთ მოგვიანებით",
        }),

    rating: Joi
        .number()
        .required()
        .min(10)
        .max(100)
        .messages({
            "any.required": "შეფასება სავალდებულოა",
            "number.base": "პოზიცია სავალდებულოა",
            "number.min": "მინიმალური რეიტინგი 1-ია",
            "number.max": "შეფასება 5ზე მეტი ვერ იქნება",
        }),

    positiveReview: Joi
        .string()
        .required()
        .trim()
        .min(0)
        .max(2500)
        .allow("")
        .messages({
            "any.required": "შეფასება სავალდებულოა",
            "string.base": "შეფასება სავალდებულოა",
            "string.max": "შეფასება არ უნდა აღემატებოდეს 2500 სიმბოლოს",
        }),

    negativeReview: Joi
        .string()
        .required()
        .trim()
        .min(0)
        .max(2500)
        .allow("")
        .messages({
            "any.required": "შეფასება სავალდებულოა",
            "string.base": "შეფასება სავალდებულოა",
            "string.max": "შეფასება არ უნდა აღემატებოდეს 2500 სიმბოლოს",
        }),

    position: Joi
        .string()
        .trim()
        .required()
        .min(0)
        .max(30)
        .allow("")
        .messages({
            "any.required": "პოზიცია სავალდებულოა",
            "string.base": "პოზიცია სავალდებულოა",
            "string.max": "პოზიცია არ უნდა აღემატებოდეს 30 სიმბოლოს",
        }),
})

export const SubmitCompanyRequestSchema = Joi.object({
    companyName: Joi
        .string()
        .trim()
        .required()
        .min(3)
        .messages({
            "string.empty": "კომპანიის სახელი სავალდებულოა",
            "any.required": "კომპანიის სახელი სავალდებულოა",
            "string.base": "კომპანიის სახელი სავალდებულოა",
            "string.min": "შეიყვანეთ ვალიდური კომპანიის სახელი"
        }),

    companyWebsite: Joi
        .string()
        .required()
        .allow(""),
})

export const SubmitInterviewSchema = Joi.object({
    companyId: Joi
        .string()
        .trim()
        .required()
        .pattern(new RegExp(/^[a-z0-9]{10,90}$/i))
        .messages({
            "string.pattern.base": "დაფიქსირდა ხარვეზი. სცადეთ მოგვიანებით.",
            "string.base": "დაფიქსირდა ხარვეზი. სცადეთ მოგვიანებით",
            "string.empty": "დაფიქსირდა ხარვეზი. სცადეთ მოგვიანებით",
            "any.required": "დაფიქსირდა ხარვეზი. სცადეთ მოგვიანებით",
        }),

    userId: Joi
        .string()
        .trim()
        .required()
        .pattern(new RegExp(/^[a-z0-9]{10,90}$/i))
        .messages({
            "string.pattern.base": "დაფიქსირდა ხარვეზი. სცადეთ მოგვიანებით.",
            "string.base": "დაფიქსირდა ხარვეზი. სცადეთ მოგვიანებით",
            "string.empty": "დაფიქსირდა ხარვეზი. სცადეთ მოგვიანებით",
          	"any.required": "დაფიქსირდა ხარვეზი. სცადეთ მოგვიანებით",
        }),

    comment: Joi
        .string()
        .required()
        .trim()
        .min(0)
        .max(2500)
        .allow("")
        .messages({
            "any.required": "შეფასების ველი სავალდებულოა",
            "string.base": "შეფასება უნდა იყოს ტექსტი (შეცდომა სერვერზე)",
            "string.max": "კომენტარი არ უნდა აღემატებოდეს 2500 სიმბოლოს",
        }),
    
    rating: Joi
        .number()
        .required()
        .min(10)
        .max(100)
        .messages({
            "any.required": "შეფასება სავალდებულოა",
            "number.base": "პოზიცია სავალდებულოა",
            "number.min": "მინიმალური რეიტინგი 1-ია",
            "number.max": "შეფასება 5ზე მეტი ვერ იქნება",
        }),
})