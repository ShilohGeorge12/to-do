import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'sonner';

import ErrorBoundary from './components/Error';
import { Home } from './pages/home';
import { NotFount } from './pages/not-found';

function App() {
	const allRoutes = [
		{
			path: '/',
			element: (
				<ErrorBoundary>
					<Home />
				</ErrorBoundary>
			),
		},
		{
			path: '*',
			element: <NotFount />,
		},
	];

	return (
		<section className="w-full p-2 text-base tracking-wide text-black">
			<header className="flex flex-col items-center justify-center w-full gap-2">
				<h1 className="text-2xl font-semibold">To-Do</h1>
			</header>
			<main>
				<Router>
					<Routes>
						{allRoutes.map((route) => (
							<Route
								key={route.path}
								path={route.path}
								element={route.element}
							/>
						))}
					</Routes>
				</Router>
			</main>
			<Toaster
				richColors
				position="bottom-right"
			/>
		</section>
	);
}

export default App;
