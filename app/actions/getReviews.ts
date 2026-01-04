"use server";
import { GlobalConfig } from "../site-config";

export async function getGoogleReviews() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = GlobalConfig.brand.googlePlaceId;
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

  try {
    const response = await fetch(url, { next: { revalidate: 86400 } }); // Cache for 24 hours
    const data = await response.json();
    return data.result.reviews || [];
  } catch (error) {
    console.error("Error fetching Google Reviews:", error);
    return [];
  }
}