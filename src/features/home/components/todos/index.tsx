import { FaCircleCheck } from 'react-icons/fa6';
import { LuFileEdit } from 'react-icons/lu';
import { MdOutlineDeleteOutline } from 'react-icons/md';

import { TodoTypes } from '@/types';

interface TodosProps {
	todos: TodoTypes[];
	setTodos: (todos: TodoTypes[] | ((prevTodos: TodoTypes[]) => TodoTypes[])) => void;
}

export function Todos({ todos, setTodos }: TodosProps) {
	const deleteTodo = (id: string) => {
		setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
	};

	const toggleCompletion = (id: string) => {
		setTodos((prevTodos) => prevTodos.map((todo) => (todo._id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)));
	};

	return (
		<ul className="flex flex-col w-1/2 gap-5 py-4 mx-auto">
			{todos.map((todo) => (
				<li
					key={todo._id}
					className="grid grid-cols-12 p-4 text-white bg-black rounded-lg">
					<div className="col-span-10 transition-all duration-300 ease-in-out">
						<h3 className={`text-xl font-bold transition-all duration-300 ease-in-out ${todo.isCompleted ? 'line-through opacity-85' : ''}`}>{todo.title}</h3>
						<p className={`${todo.isCompleted ? 'line-through opacity-80' : ''}`}>{todo.describtion}</p>
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
						<button
							type="button"
							name=""
							className="p-1 transition-all duration-300 ease-in-out hover:text-black hover:bg-white rounded-xl">
							<LuFileEdit />
						</button>
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
