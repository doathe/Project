import Joi, { ObjectSchema } from "joi";

const validationJoi = {

    userCreateSchema: Joi.object({
        name: Joi.string().min(3).max(30).pattern(new RegExp('^[a-zA-Z0-9]{3,30}')).required(),
        surname: Joi.string().min(3).max(30).pattern(new RegExp('^[a-zA-Z0-9]{3,30}')).required(),
        email: Joi.string().email().required(),
        age: Joi.number().positive().min(18).required(),
    }),

    userUpdateSchema: Joi.object({
        name: Joi.string().min(3).max(14).pattern(new RegExp('^[a-zA-Z0-9]{3,30}')).required(),
        surname: Joi.string().min(3).max(30).pattern(new RegExp('^[a-zA-Z0-9]{3,30}')).required(),
        email: Joi.string().email().required(),
        age: Joi.number().positive().min(18).required(),
    }),

    IdCheckSchema: Joi.number().positive().required() //OK
}

export default validationJoi;