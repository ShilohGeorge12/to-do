import { ChangeEvent, FormEvent, useRef, useState, useTransition } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'sonner';
import { KeyedMutator } from 'swr';

import { Aside } from '@/components/aside';
import { BACKEND_API_URL } from '@/lib/utils';
import { isTodo, TodoTypes } from '@/types';

interface NewTodoFormProps {
	mutate: KeyedMutator<any>;
}

export function NewTodoForm({ mutate }: NewTodoFormProps) {
	const initState: Omit<TodoTypes, 'isCompleted' | 'createdAt' | '_id'> = {
		title: '',
		description: '',
	};

	const editTriggerBtnRef = useRef<HTMLButtonElement | null>(null);
	const [formData, setFormData] = useState<typeof initState>(initState);
	const [errorMessage, setErrorMessage] = useState<string[]>([]);
	const [isPending, startTransition] = useTransition();

	// Regex patterns for validation
	const titleRegex = /^[a-zA-Z0-9\s]{3,50}$/; // title: 3 to 50 alphanumeric characters and spaces
	const descriptionRegex = /^.{5,200}$/; // description: at least 5 characters and max 200

	// Handle input changes
	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	// Handle form submission
	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setErrorMessage([]);

		// Validate title and description with regex
		const errors: string[] = [];

		if (!titleRegex.test(formData.title)) {
			errors.push('Title must be between 3 to 50 alphanumeric characters and spaces.');
		}

		if (!descriptionRegex.test(formData.description)) {
			errors.push('Description must be between 5 to 200 characters.');
		}

		if (errors.length > 0) {
			setErrorMessage(errors);
			return; // If errors, do not submit
		}

		startTransition(() => {
			// Call your API here and send the form data
			fetch(`${BACKEND_API_URL}/todos`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			})
				.then(async (response) => {
					if (!response.ok) {
						throw new Error('Failed to create new todo');
					}
					const newTodo = await response.json();

					if (isTodo(newTodo)) {
						// Assuming you have a mutate function to update the UI
						mutate();

						// Reset form data
						toast.success('new todo item added successfully');
						setFormData(initState);

						// Optionally, you can close the form modal
						editTriggerBtnRef.current?.click();
						return;
					}

					toast.error('Error Occurred while adding the todo item');
					setErrorMessage(['Error Occurred while adding the todo item']);
				})
				.catch((_) => {
					setErrorMessage(['Failed to add the todo. Please try again.']);
				});
		});
	};

	const editTriggerBtn = (
		<button
			type="button"
			name={`Add an Item button`}
			ref={editTriggerBtnRef}
			className={`p-2 flex items-center justify-center rounded-lg bg-black text-white hover:scale-105 transition-all duration-500 ease-in-out font-medium`}>
			Add New Item to the Todo List
		</button>
	);

	return (
		<Aside
			title={`Add an Item to your Todo List`}
			position="right"
			triggerButton={editTriggerBtn}>
			<form
				onSubmit={onSubmit}
				className="flex flex-col w-full h-full gap-6 py-4">
				<div className="w-full h-12">
					<input
						type="text"
						name="title"
						placeholder="Title..."
						inputMode="text"
						required
						disabled={isPending}
						value={formData.title}
						onChange={handleInputChange}
						className="w-full h-full px-4 text-lg font-semibold tracking-wider transition-all duration-500 ease-in-out bg-white rounded-lg outline-0 ring-0 ring-white hover:ring-1 focus:ring-2"
					/>
				</div>
				<div className="w-full h-12">
					<input
						type="text"
						name="description"
						placeholder="Description..."
						inputMode="text"
						required
						disabled={isPending}
						value={formData.description}
						onChange={handleInputChange}
						className="w-full h-full px-4 text-lg font-semibold tracking-wider transition-all duration-500 ease-in-out bg-white rounded-lg outline-0 ring-0 ring-white hover:ring-1 focus:ring-2"
					/>
				</div>

				<button
					type="submit"
					name={`Add New Item`}
					className={`w-full h-10 flex items-center justify-center gap-4 text-white bg-[#EF5C09]/70 disabled:bg-[#EF5C09]/50 rounded-lg font-semibold text-lg tracking-wider transition-all duration-500 ease-in-out`}
					disabled={isPending}>
					{isPending && (
						<span className="animate-rotate">
							<FaSpinner />
						</span>
					)}
					Add New Item
				</button>

				{errorMessage.length > 0 && (
					<ul className="flex flex-col items-center w-full min-h-[20vh] py-4 gap-4 text-red-500 bg-white rounded-lg">
						{errorMessage.map((message, index) => (
							<li
								key={index}
								className="text-base font-medium">
								{message}
							</li>
						))}
					</ul>
				)}
			</form>
		</Aside>
	);
}
