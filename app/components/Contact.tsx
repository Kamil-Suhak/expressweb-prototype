'use client';
import { Mail, Phone, MapPin, Send } from "lucide-react";

interface ContactProps {
  content: {
    title: string;
    subtitle: string;
    form: { name: string; email: string; message: string; button: string };
  };
  brandInfo: { email: string; phone: string; address: string };
}

export default function Contact({ content, brandInfo }: ContactProps) {
  return (
    <section id="contact" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-bold mb-6">{content.title}</h2>
          <p className="text-lg text-gray-600 mb-10">{content.subtitle}</p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Mail className="text-blue-600" /> <span>{brandInfo.email}</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-blue-600" /> <span>{brandInfo.phone}</span>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-blue-600" /> <span>{brandInfo.address}</span>
            </div>
          </div>
        </div>
        <form className="space-y-4 bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
          <input className="w-full p-4 rounded-xl border" placeholder={content.form.name} />
          <input className="w-full p-4 rounded-xl border" placeholder={content.form.email} />
          <textarea className="w-full p-4 rounded-xl border" rows={4} placeholder={content.form.message} />
          <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl flex items-center justify-center gap-2">
            {content.form.button} <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}