import { FaCircleCheck } from 'react-icons/fa6';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { toast } from 'sonner';
import { KeyedMutator } from 'swr';

import { BACKEND_API_URL } from '@/lib/utils';
import { isDeletedTodoMessage, isTodo, TodoTypes } from '@/types';

import { EditTodo } from '../../forms/editTodo';

interface TodosProps {
	todos: TodoTypes[];
	mutate: KeyedMutator<any>;
}

export function Todos({ todos, mutate }: TodosProps) {
	const deleteTodo = async (id: string) => {
		try {
			const res = await fetch(`http://localhost:2233/api/todos/${id}`, {
				method: 'DELETE', // This will delete the todo
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const data = await res.json();

			// Check if the response is of type DeletedTodoMessage
			if (isDeletedTodoMessage(data)) {
				mutate();
				toast.success(data.message); // Success message from the server
				return;
			}

			// Handle unexpected response structure
			toast.error('Unexpected response format');
		} catch (error) {
			toast.error('Error deleting todo');
			console.error(error); // Log error for debugging
		}
	};

	const toggleCompletion = async (id: string) => {
		try {
			// Get the current todo's completion status
			const todoToUpdate = todos.find((todo) => todo._id === id);
			const updatedIsCompleted = !todoToUpdate?.isCompleted;

			// Send the request to toggle completion status
			const res = await fetch(`${BACKEND_API_URL}/todos/${id}`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ isCompleted: updatedIsCompleted }), // Only update the isCompleted field
			});

			// Check for successful response
			if (!res.ok) throw new Error('Failed to update completion status');

			const updatedTodo = await res.json();

			if (isTodo(updatedTodo)) {
				toast.success(updatedTodo.isCompleted ? 'todo item was successful completed' : 'todo item was successful uncompleted');
				// Update the todos with the server's response to keep them in sync
				mutate();
			}
		} catch (error) {
			console.error('Failed to toggle completion:', error);
			toast.error('counld not update the server, Failed to toggle todo item completion');
			// Revert the optimistic update in case of an error
			mutate();
		}
	};

	return (
		<ul className="flex flex-col w-1/2 min-h-[428px] gap-5 py-4 mx-auto">
			{todos.length > 0 &&
				todos.map((todo) => (
					<li
						key={todo._id}
						className="grid grid-cols-12 p-4 text-white bg-black rounded-lg">
						<div className="col-span-10 transition-all duration-300 ease-in-out">
							<h3 className={`text-xl font-bold transition-all duration-300 ease-in-out ${todo.isCompleted ? 'line-through opacity-85' : ''}`}>{todo.title}</h3>
							<p className={`${todo.isCompleted ? 'line-through opacity-80' : ''}`}>{todo.description}</p>
						</div>
						<div className="flex items-center justify-center w-full col-span-2 gap-2 text-xl">
							<button
								type="button"
								name="complete todo button"
								className={`p-1 transition-all duration-300 ease-in-out ${
									todo.isCompleted ? 'text-green-500 hover:bg-white hover:text-green-500' : 'hover:text-black hover:bg-white'
								} rounded-xl`}
								onClick={() => toggleCompletion(todo._id)}>
								<FaCircleCheck />
							</button>
							<EditTodo
								mutate={mutate}
								todo={todo}
							/>
							<button
								type="button"
								name=""
								onClick={() => deleteTodo(todo._id)}
								className="p-1 text-2xl transition-all duration-300 ease-in-out hover:bg-red-500 rounded-xl">
								<MdOutlineDeleteOutline />
							</button>
						</div>
					</li>
				))}
		</ul>
	);
}
