import { LucideIcon } from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface ServicesProps {
  head: { title: string; subtitle: string };
  items: ServiceItem[];
}

export default function ServicesGrid({ head, items }: ServicesProps) {
  return (
    <section id="services" className="py-24 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">{head.title}</h2>
          <p className="mt-4 text-gray-600">{head.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={i} className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <item.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}