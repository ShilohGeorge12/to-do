export interface TodoTypes {
	_id: string;
	title: string;
	description: string;
	isCompleted: boolean;
	createdAt: string;
}

export interface DeletedTodoMessage {
	message: string;
}

// Type guard function
export const isTodos = (arg: any[]): arg is TodoTypes[] => {
	// Check if `arg` is an array
	if (!Array.isArray(arg)) return false;

	// Check each item in the array to see if it conforms to `TodoTypes`
	return arg.every(
		(item) =>
			typeof item._id === 'string' &&
			typeof item.title === 'string' &&
			typeof item.description === 'string' &&
			typeof item.isCompleted === 'boolean' &&
			typeof item.createdAt === 'string'
	);
};

export const isTodo = (arg: any): arg is TodoTypes => {
	// Check if `arg` is an object
	if (typeof arg !== 'object' || arg === null) return false;

	// Check if `arg` has the necessary properties and their types match `TodoTypes`
	return (
		typeof arg._id === 'string' &&
		typeof arg.title === 'string' &&
		typeof arg.description === 'string' &&
		typeof arg.isCompleted === 'boolean' &&
		typeof arg.createdAt === 'string'
	);
};

export function isDeletedTodoMessage(obj: any): obj is DeletedTodoMessage {
	return typeof obj === 'object' && obj !== null && typeof obj.message === 'string';
}
