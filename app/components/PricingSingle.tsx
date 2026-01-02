import { CheckCircle2, ArrowRight } from "lucide-react";

// 1. Define the "Shape" of the data this component needs
interface PricingSingleProps {
  content: {
    name: string;
    price: string;
    description: string;
    features: string[];
    buttonText: string;
  };
}

export default function PricingSingle({ content }: PricingSingleProps) {
  return (
    <section id="pricing" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-50 flex flex-col lg:flex-row items-stretch">
          
          {/* LEFT SIDE */}
          <div className="p-8 lg:p-12 flex-1">
            <div className="inline-block px-4 py-1 mb-6 text-xs font-bold tracking-widest uppercase bg-blue-600 text-white rounded-full">
              {/* Note: You could also pass this label through the dict if needed */}
              Best Value
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {content.name}
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              {content.description}
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              {content.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <CheckCircle2 size={20} className="text-blue-600 shrink-0" />
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="p-8 lg:p-12 bg-gray-100 lg:w-96 flex flex-col justify-center items-center text-center">
            <div className="mb-4">
              <span className="text-5xl font-extrabold text-gray-900">{content.price}</span>
            </div>
            
            <button className="w-full py-4 px-8 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group shadow-lg">
              {content.buttonText}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}