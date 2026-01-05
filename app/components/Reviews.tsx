'use client';

import { useEffect, useState } from 'react';
import { Star, User, Quote } from 'lucide-react';
import { getGoogleReviews } from '@/app/actions/getReviews';

interface Review {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url: string;
}

interface ReviewsWrapper {
    title: string;
}

export default function Reviews({ review }: { review: ReviewsWrapper }) {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    async function load() {
      const data = await getGoogleReviews();
      setReviews(data);
    }
    load();
  }, []);

  if (reviews.length === 0) return null;

  return (
    <section id="testimonials" className="py-24 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            {review.title}
          </h2>
          <div className="flex justify-center gap-1 mt-4 text-yellow-400">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.slice(-3, -1).map((review, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <Quote className="text-blue-100 mb-4" size={40} />
                <p className="text-gray-600 italic mb-6 leading-relaxed">
                  "{review.text.length > 150 ? review.text.substring(0, 150) + '...' : review.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 border-t pt-6">
                <img 
                  src={review.profile_photo_url} 
                  alt={review.author_name} 
                  className="w-12 h-12 rounded-full bg-gray-100"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{review.author_name}</h4>
                  <p className="text-xs text-gray-400">{review.relative_time_description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}