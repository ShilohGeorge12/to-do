import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const BACKEND_API_URL: string = import.meta.env.VITE_BACKEND_URL;
export const BASE_URL: string = import.meta.env.VITE_BASE_URL;
