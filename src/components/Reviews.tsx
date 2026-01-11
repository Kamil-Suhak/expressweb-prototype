"use client";

import { useEffect, useState } from "react";
import { Star, User, Quote } from "lucide-react";
import { getGoogleReviews } from "@/actions/getReviews";
import Image from "next/image";
import ButtonLink from "./ButtonLink";

interface Review {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url: string;
  time: number;
}

interface ReviewsWrapper {
  title: string;
  view_all: string;
}

export default function Reviews({ review }: { review: ReviewsWrapper }) {
  const view_all_url = `https://search.google.com/local/reviews?placeid=${process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID}`;

  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    async function load() {
      const data = await getGoogleReviews();
      setReviews(data);
    }
    load();
  }, []);

  if (reviews.length === 0) return null;

  const latestReviews = [...reviews]
    .sort((a, b) => {
      if (a.time && b.time) {
        return b.time - a.time;
      }
      return 0;
    })
    .slice(0, 3);

  return (
    <section id="testimonials" className="scroll-mt-20 bg-gray-50 pt-20 pb-10">
      <div className="mx-auto max-w-7xl flex-col justify-between px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900">{review.title}</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestReviews.slice(0, 3).map((review, i) => (
            <div
              key={i}
              className={`flex flex-col justify-between rounded-3xl border border-gray-100 bg-white p-8 shadow-sm ${i > 1 ? "hidden md:flex" : "flex"}`}
            >
              <div className="flex w-full items-start justify-between">
                <Quote className="mb-4 text-blue-100" size={40} />

                <div className="mt-4 flex gap-1 text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} fill="currentColor" size={20} />
                  ))}
                </div>
              </div>
              <p className="mb-6 leading-relaxed text-gray-600 italic">
                &quot;
                {review.text.length > 150
                  ? review.text.substring(0, 150) + "..."
                  : review.text}
                &quot;
              </p>

              <div className="flex items-center gap-4 border-t pt-6">
                <div className="relative h-12 w-12">
                  <Image
                    src={review.profile_photo_url}
                    alt="" // decorative
                    fill
                    className="rounded-full bg-gray-100 object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">
                    {review.author_name}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {review.relative_time_description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View all reviews button */}
        <div className="flex justify-center">
          <ButtonLink href={view_all_url} className="mt-10">
            {review.view_all}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
