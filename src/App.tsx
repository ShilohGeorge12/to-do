import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ErrorBoundary from './components/Error';
import { Home } from './pages/home';
import { NotFount } from './pages/not-found';

function App() {
	return (
		<section className="w-full p-2 text-base tracking-wide text-black">
			<header className="flex flex-col items-center justify-center w-full gap-2">
				<h1 className="text-2xl font-semibold">To-Do</h1>
			</header>
			<main>
				<Router>
					<Routes>
						<Route
							path="/"
							element={
								<ErrorBoundary>
									<Home />
								</ErrorBoundary>
							}
						/>
						<Route
							path="*"
							element={<NotFount />}
						/>
					</Routes>
				</Router>
			</main>
		</section>
	);
}

export default App;
