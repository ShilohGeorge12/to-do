import { useEffect, useState } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import useSWR from 'swr';

import { Spinner } from '@/components/spinner';
import { SelectComponent } from '@/features/home/components/selectComponent';
import { Todos } from '@/features/home/components/todos';
import { NewTodoForm } from '@/features/home/forms/newTodos';
import { isTodos } from '@/types';

// Fetch function for SWR
const fetchTodos = async (url: string) => {
	const res = await fetch(url);
	const data = await res.json();
	if (isTodos(data.todos)) {
		return data; // Returning data to SWR for caching
	}
	throw new Error('Failed to fetch todos');
};

export function Home() {
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(4); // Default limit per page

	// Using SWR hook for data fetching
	const { data, error, isLoading, mutate } = useSWR(`http://localhost:2233/api/todos?page=${page}&limit=${limit}`, fetchTodos);

	// Reset page to 1 when limit changes
	useEffect(() => {
		setPage(1);
	}, [limit]);

	// Handle Next Page
	const handleNextPage = () => {
		if (data && page < data.totalPages) {
			setPage((prevPage) => prevPage + 1);
		}
	};

	// Handle Previous Page
	const handlePrevPage = () => {
		if (page > 1) {
			setPage((prevPage) => prevPage - 1);
		}
	};

	// Handle Limit Change
	const handleLimitChange = (value: string) => {
		setLimit(Number(value)); // Update the limit
	};

	return (
		<section className="flex flex-col items-center justify-center w-full min-h-[90dvh] py-2 mb-3">
			<NewTodoForm mutate={mutate} />
			<section className="w-full flex flex-col items-center justify-center min-h-[80dvh]">
				{error && !isLoading && (
					<p className="w-1/2 flex items-center justify-center text-red-700 font-medium text-2xl h-[60dvh]">There was an error while fetching todos.</p>
				)}
				{isLoading && <Spinner height />}
				{data && !isLoading && (
					<>
						<Todos
							todos={data.todos}
							mutate={mutate}
						/>
						<section
							aria-roledescription="pagination-controls"
							className="grid w-1/2 grid-cols-12 gap-2 mt-4">
							<section className="flex items-center justify-between w-full col-span-5">
								<label
									htmlFor="limit"
									className="font-medium">
									Limit per page:
								</label>
								<SelectComponent
									value={limit}
									onChange={handleLimitChange}
								/>
							</section>

							<section className="flex items-center justify-around w-full col-span-3 col-start-10 text-xl h-14">
								<button
									type="button"
									className="flex items-center justify-center text-2xl text-white bg-black rounded-lg disabled:bg-black/60 size-8"
									onClick={handlePrevPage}
									disabled={page === 1}>
									<MdNavigateBefore />
								</button>
								<p aria-roledescription="current pagination page">{page}</p>
								<button
									type="button"
									className="flex items-center justify-center text-2xl text-white bg-black rounded-lg disabled:bg-black/60 size-8"
									onClick={handleNextPage}
									disabled={data.totalPages === 0 || page === data.totalPages}>
									<MdNavigateNext />
								</button>
							</section>
						</section>
					</>
				)}
			</section>
		</section>
	);
}
