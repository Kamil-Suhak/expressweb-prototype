import { markers } from "@/config/config-formatter";

// escape special regex chars
const escapeRegex = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Create the pattern: (\[\[.*?\]\]|\{\{.*?\}\}|...)
const pattern = Object.entries(markers)
  .map(([start, end]) => `${escapeRegex(start)}.*?${escapeRegex(end)}`)
  .join("|");

// Wrap in a capture group and add the global flag
export const markerRegex = new RegExp(`(${pattern})`, "g");
