export interface TodoTypes {
	_id: string;
	title: string;
	description: string;
	isCompleted: boolean;
	createdAt: string;
}

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
