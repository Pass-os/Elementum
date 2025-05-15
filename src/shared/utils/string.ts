import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

//ShadCN Utils
export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}
