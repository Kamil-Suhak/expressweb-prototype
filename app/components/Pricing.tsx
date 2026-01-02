import { CheckCircle2 } from "lucide-react";

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
}

interface PricingProps {
  plans: PricingPlan[];
  title: string;
  subtitle: string;
}

export default function Pricing({ plans, title, subtitle }: PricingProps) {
  return (
    <section id="pricing" className="py-24 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
          <p className="mt-4 text-gray-600">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-3xl border transition-all duration-300 bg-white ${
                plan.isPopular 
                ? "border-blue-600 shadow-2xl scale-105 z-10" 
                : "border-gray-200 shadow-sm hover:shadow-md"
              }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Popular
                </span>
              )}

              <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                {plan.price.includes("$") && <span className="ml-1 text-gray-500">/mo</span>}
              </div>
              <p className="mt-4 text-gray-600 text-sm leading-relaxed">{plan.description}</p>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`mt-10 w-full py-4 px-6 rounded-xl font-bold transition-all ${
                  plan.isPopular 
                  ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg" 
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}