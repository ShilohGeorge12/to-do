import { model, Schema } from 'mongoose';

import { TodoTypes } from '../types/index.js';

const TodoModel = model(
	'todos',
	new Schema<TodoTypes>({
		title: {
			type: String,
			minlength: 2,
			maxLenght: 100,
			required: true,
		},
		description: {
			type: String,
			minlength: 2,
			maxLenght: 100,
			required: true,
		},
		isCompleted: {
			type: Boolean,
			required: [true, 'isCompleted is required!'],
			default: false,
		},
		createdAt: {
			type: Date,
			default: () => Date.now(),
		},
	})
);

export default TodoModel;
