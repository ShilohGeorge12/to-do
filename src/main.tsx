import './index.css';

import { AnimatePresence } from 'framer-motion';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<AnimatePresence mode="wait">
			<App />
		</AnimatePresence>
	</StrictMode>
);
