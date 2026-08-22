import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhone(digits: string) {
  const d = digits.replace(/\D/g, "");
  if (d.length === 3) return d;
  if (d.length === 10) {
    return `${d.slice(0, 3)}-${d.slice(3, 6)}-${d.slice(6)}`;
  }
  if (d.length === 11 && d.startsWith("1")) {
    return `1-${d.slice(1, 4)}-${d.slice(4, 7)}-${d.slice(7)}`;
  }
  return digits;
}

export function todayKey() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function greetingForHour(hour: number) {
  if (hour < 5) return "Late watch";
  if (hour < 12) return "Morning";
  if (hour < 17) return "Afternoon";
  if (hour < 21) return "Evening";
  return "Night watch";
}

export function monthsBetween(fromIso: string, to = new Date()) {
  const from = new Date(fromIso);
  if (Number.isNaN(from.getTime())) return 0;
  const years = to.getFullYear() - from.getFullYear();
  const months = to.getMonth() - from.getMonth();
  let total = years * 12 + months;
  if (to.getDate() < from.getDate()) total -= 1;
  return Math.max(0, total);
}
