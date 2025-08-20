
/**
 * Combines multiple class values into a single string, handling conditional and array values,
 * and merges Tailwind CSS classes to avoid duplication or conflicts.
 *
 * @param inputs - A list of class values that can be strings, arrays, or objects.
 * @returns A single string of merged class names.
 */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
