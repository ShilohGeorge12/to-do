import { motion } from 'framer-motion';

import notFoundImage from '@/assets/notFound.png';

export function NotFount() {
	return (
		<motion.section
			className="flex flex-col w-3/4 h-[80dvh] mx-auto justify-center items-center"
			initial={{ opacity: 0, translateY: '-100vh', translateZ: -100 }}
			animate={{ opacity: 1, translateX: '0vw', translateY: '0vh', translateZ: 0 }}
			exit={{ opacity: 0, translateZ: -100 }}
			transition={{ type: 'spring', damping: 10, stiffness: 100 }}>
			<section className="flex items-center justify-center gap-4 w-[90%]">
				<img
					src={notFoundImage}
					loading="eager"
					alt="sadhime"
					title="sadhime"
					className={`w-[25%] hover:scale-105 transition duration-300 ease-in-out`}
				/>
				<div className="w-1 h-20 bg-gray-300 md:h-36 rounded-xl" />
				<p className="font-medium text-justify">The Page you are looking for was Not Found</p>
			</section>
			<a
				href={'/'}
				className={`px-4 h-10 flex items-center justify-center bg-black text-white font-medium rounded-2xl transition-all duration-500  hover:shadow-md hover:scale-105`}>
				Back To Home Page
			</a>
		</motion.section>
	);
}
