import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function formatLink(url: string) {
  url = url.replace(/(^\w+:|^)\/\//, "");
  url = url.replace(/\/$/, "");
  return url.split("/")[0];
}
