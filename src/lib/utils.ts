import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export async function getCharactersFromUrls(urls: string[]) {
  const ids = urls.map((url) => url.split("/").pop()).filter(Boolean);
  if (ids.length === 0) return [];

  const res = await fetch(`https://rickandmortyapi.com/api/character/${ids.join(",")}`);
  if (!res.ok) throw new Error("Failed to fetch character data");

  const data = await res.json();
  return Array.isArray(data) ? data : [data];
}
