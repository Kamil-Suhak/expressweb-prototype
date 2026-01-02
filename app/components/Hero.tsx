import { GlobalConfig } from "../site-config";
import { Phone, Calendar, LucideIcon } from "lucide-react";

interface HeroProps {
  content: {
    title: string;
    subtitle: string;
    primaryCTA: string;
    secondaryCTA: string;
    // New addition for localized trust badges
    trustBadges: { label: string; icon: LucideIcon }[];
  };
}

export default function Hero({ content }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 overflow-hidden bg-white">
      {/* BACKGROUND PATTERN */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      
      {/* AMBIENT GLOW */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Badge */}
        {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
             Live Status: Active
          </span>
        </div> */}

        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 max-w-4xl mx-auto">
          {content.title}
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-10">
          {content.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href={`tel:${GlobalConfig.brand.phone}`}
            style={{ backgroundColor: GlobalConfig.brand.primaryColor }}
            className="flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-xl shadow-lg hover:brightness-110 transition transform hover:-translate-y-1"
          >
            <Phone size={20} />
            {content.primaryCTA}
          </a>
          <a 
            href="#contact"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-xl border border-gray-200 hover:bg-gray-50 transition"
          >
            <Calendar size={20} />
            {content.secondaryCTA}
          </a>
        </div>

        {/* 3. NEW TRUST BADGES WITH ICONS */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 border-t border-gray-100 pt-12">
          {content.trustBadges.map((badge, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                <badge.icon size={22} />
              </div>
              <span className="text-sm font-bold text-gray-700 uppercase tracking-wide">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}