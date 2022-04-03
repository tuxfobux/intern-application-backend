const Joi = require('joi');

module.exports = {
    validateParameter: (schema, name) => {
        return (req, res, next) => {
            const result = schema.validate({ parameter: req.params[name] });
            if (result.error) {
                return res.status(400).json(result.error);
            }
            req.params[name] = result.value.parameter;
            next();
        }
    },

    validateBody: (schema) => {
        return (req, res, next) => {
            const result = schema.validate(req.body);
            if (result.error) {
                return res.status(400).json(result.error)
            } else {
                req.body = result.value;
                next();
            }
        }
    },

    schemas: {
        idSchema: Joi.object().keys({
            parameter: Joi.number().min(1).required()
        }),
        categorySchema: Joi.object().keys({
            name: Joi.string().trim().min(1).max(15).required()
        }),
        productSchema: Joi.object().keys({
            content: Joi.string().min(1).required()
        }),
        patchProductSchema: Joi.object().keys({
            id: Joi.number().min(1).required(),
            content: Joi.string().min(1).required()
        }),
        deleteProductSchema: Joi.object().keys({
            id: Joi.number().min(1).required()
        })
    }
}