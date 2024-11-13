import joi from 'joi';
export function validateNewTodos(schema) {
    const Schema = joi.object({
        title: joi.string().min(2).max(90).required(),
        description: joi.string().min(2).max(1200).required(),
    });
    return Schema.validate(schema, { abortEarly: false });
}
export function validateUpdateTodo(schema) {
    const Schema = joi.object({
        title: joi.string().min(2).max(90).optional(),
        description: joi.string().min(2).max(1200).optional(),
        isCompleted: joi.boolean().optional(),
    });
    return Schema.validate(schema, { abortEarly: false });
}
