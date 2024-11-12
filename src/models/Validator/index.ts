import { Request } from 'express';
import joi from 'joi';

import { TodoTypes } from '../../types/index.js';

export function validateNewTodos(schema: Request) {
	const Schema = joi.object<Omit<TodoTypes, 'isCompleted' | 'createdAt'>>({
		title: joi.string().min(2).max(90).required(),
		description: joi.string().min(2).max(1200).required(),
	});
	return Schema.validate(schema, { abortEarly: false });
}

export function validateUpdateTodo(schema: Request) {
	const Schema = joi.object<Partial<Omit<TodoTypes, 'createdAt'>>>({
		title: joi.string().min(2).max(90).optional(),
		description: joi.string().min(2).max(1200).optional(),
		isCompleted: joi.boolean().optional(),
	});

	return Schema.validate(schema, { abortEarly: false });
}
