import { ChangeEvent, FormEvent, useRef, useState, useTransition } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { LuFileEdit } from 'react-icons/lu';
import { toast } from 'sonner';
import { KeyedMutator } from 'swr';

import { Aside } from '@/components/aside';
import { isTodo, TodoTypes } from '@/types';

interface EditTodoProps {
	todo: TodoTypes;
	mutate: KeyedMutator<any>;
}

export function EditTodo({ todo, mutate }: EditTodoProps) {
	const initState = {
		title: todo.title,
		description: todo.description,
	};
	const editTriggerBtnRef = useRef<HTMLButtonElement | null>(null);
	const [formData, setFormData] = useState<typeof initState>(initState);
	const [errorMessage, setErrorMessage] = useState<string[]>([]);
	const [isPending, startTransition] = useTransition();

	const editTriggerBtn = (
		<button
			type="button"
			name={`edit todo with title ${todo.title}`}
			ref={editTriggerBtnRef}
			className="p-1 transition-all duration-300 ease-in-out hover:text-black hover:bg-white rounded-xl">
			<LuFileEdit />
		</button>
	);

	// Handle input changes
	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const updateCurrentTodo = async () => {
		const req = await fetch(`http://localhost:2233/api/todos/${todo._id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formData),
		});

		if (!req.ok) throw new Error('Failed to update todo item');
		const res = await req.json();

		if (isTodo(res)) {
			toast.success('todo item was successful updted');
			// Success: Update the todos list
			mutate();
			editTriggerBtnRef.current?.click();
		}
	};

	// Handle form submission
	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setErrorMessage([]);

		try {
			startTransition(() => {
				updateCurrentTodo();
			});
		} catch (error) {
			startTransition(() => {
				setErrorMessage(['Failed to update todo item']);
				// console.error('Error updating todo:', error);
			});
		}
	};

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
					Update Todo
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
