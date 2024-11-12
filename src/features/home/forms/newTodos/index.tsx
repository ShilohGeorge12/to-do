import { ChangeEvent, FormEvent, useRef, useState, useTransition } from 'react';
import { FaSpinner } from 'react-icons/fa';

import { Aside } from '@/components/aside';
import { TodoTypes } from '@/types';

interface NewTodoFormProps {
	// setTodos: (todos: TodoTypes[] | ((prevTodos: TodoTypes[]) => TodoTypes[])) => void;
}

export function NewTodoForm() {
	const initState: Omit<TodoTypes, 'isCompleted' | 'createdAt' | '_id'> = {
		title: '',
		description: '',
	};
	const editTriggerBtnRef = useRef<HTMLButtonElement | null>(null);
	const [formData, setFormData] = useState<typeof initState>(initState);
	const [errorMessage, setErrorMessage] = useState<string[]>([]);
	const [isPending, startTransition] = useTransition();

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setErrorMessage([]);
		startTransition(() => {
			//
			// setTodos((prev) => [...prev, formData]);
			setFormData(initState);
			editTriggerBtnRef.current?.click();
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
						name="describtion"
						placeholder="Describtion..."
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
						{errorMessage.map((message) => (
							<li
								key={message}
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
