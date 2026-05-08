import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

export const absoluteUrl = (path: string) => new URL(path, baseUrl).toString();