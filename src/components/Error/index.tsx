import { motion } from 'framer-motion';
import React from 'react';

import ErrorImage from '@/assets/error.png';

interface Istate {
	hasError: boolean;
}
interface IerrorBoundry {
	children: React.ReactNode;
}

class ErrorBoundary extends React.Component<IerrorBoundry, Istate> {
	constructor(props: IerrorBoundry) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: unknown) {
		return { hasError: true };
	}

	render() {
		if (this.state.hasError) {
			return (
				<motion.section
					className="flex flex-col w-full h-full"
					initial={{ opacity: 0, translateY: '-100vh', translateZ: -100 }}
					animate={{ opacity: 1, translateX: '0vw', translateY: '0vh', translateZ: 0 }}
					exit={{ opacity: 0, translateZ: -100 }}
					transition={{ type: 'spring', damping: 10, stiffness: 100 }}>
					<section className="flex items-center justify-center w-full h-full min-h-screen gap-4">
						<img
							src={ErrorImage}
							className={`w-[30%] md:w-[25%] hover:scale-105 transition duration-300 ease-in-out`}
							title="error Something went wrong"
							alt="error Something went wrong"
						/>
						<hr className="w-1 md:h-40 h-36 rounded-xl bg-black/50" />
						<section className="flex flex-col items-center gap-4">
							<p className="text-sm font-bold tracking-wider text-black md:text-lg">Something Went Wrong! </p>
							<a
								href={'/'}
								className={`px-4 h-10 flex items-center justify-center bg-black text-white font-medium rounded-2xl transition-all duration-500  hover:shadow-md hover:scale-105`}>
								Back To Home Page
							</a>
						</section>
					</section>
				</motion.section>
			);
		}
		return this.props.children;
	}
}
export default ErrorBoundary;
