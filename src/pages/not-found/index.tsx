import { Link } from 'react-router-dom';

export function NotFount() {
	return (
		<section className="flex flex-col items-center justify-center w-full h-screen gap-4 font-bold text-center bg-gray-700 font-Josefin">
			<p className="text-2xl text-center text-red-500  tracking-full">Error 404</p>
			<p className="flex flex-col text-base font-semibold tracking-wider text-white">Page Not Found!</p>
			<div className="">
				<button className="p-1 text-white bg-gray-500 rounded-md hover:bg-blue-500">
					<Link to={'/'}>Back To Home</Link>
				</button>
			</div>
		</section>
	);
}
