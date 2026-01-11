import { markerStyles, markers } from "@/config/config-formatter";
import { markerRegex } from "@/lib/generate-regex";

export const FormattedText = ({ text }: { text: string }) => {
  // This regex matches any of: [[...]], {{...}}, ((...)), or !!...!!
  // We use capturing groups so the markers stay in the array after the split
  //   const regex = /(\[\[.*?\]\]|\{\{.*?\}\}|\(\(.*?\)\)|!!.*?!!)/g;
  const parts = text.split(markerRegex);

  return (
    <>
      {parts.map((part, index) => {
        // Find which marker this part starts with
        const openingMarker = Object.keys(markerStyles).find((m) =>
          part.startsWith(m),
        );
        const closingMarker = openingMarker ? markers[openingMarker] : null;

        if (openingMarker && closingMarker && part.endsWith(closingMarker)) {
          // Extract the text between the markers
          const content = part.slice(
            openingMarker.length,
            -closingMarker.length,
          );
          return (
            <span key={index} className={markerStyles[openingMarker]}>
              {content}
            </span>
          );
        }

        // If no marker match, just return the plain text
        return part;
      })}
    </>
  );
};
