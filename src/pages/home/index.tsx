import { useState } from 'react';

import { Todos } from '@/features/home/components/todos';
import { NewTodoForm } from '@/features/home/forms/newTodos';
import { TodoTypes } from '@/types';

export function Home() {
	const [todos, setTodos] = useState<TodoTypes[]>([
		{
			_id: '1',
			title: 'first',
			describtion: 'first des',
			isCompleted: true,
		},
		{
			_id: '2',
			title: 'second',
			describtion: 'second des',
			isCompleted: false,
		},
		{
			_id: '3',
			title: 'thrid',
			describtion: 'third des',
			isCompleted: false,
		},
	]);

	return (
		<section className="flex flex-col items-center justify-centesr w-full h-[90dvh] border-2 border-black py-2">
			<NewTodoForm setTodos={setTodos} />
			<Todos
				todos={todos}
				setTodos={setTodos}
			/>
		</section>
	);
}
