'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { sendEmail } from "@/app/actions/sendEmail";

interface ContactProps {
  content: {
    title: string;
    subtitle: string;
    form: { name: string; email: string; message: string; button: string; successTitle: string; successMessage: string };
  };
  brandInfo: { email: string; phone: string; address: string };
}

export default function Contact({ content, brandInfo }: ContactProps) {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsPending(true);
    const result = await sendEmail(formData);
    setIsPending(false);

    if (result.success) {
      setIsSuccess(true);
      // Optional: Reset form here
    } else {
      alert("Something went wrong. Please try calling us instead!");
    }
  }

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

        <div className="relative">
          {isSuccess ? (
            <div className="bg-blue-50 border border-blue-100 p-12 rounded-3xl text-center flex flex-col items-center justify-center h-full">
              <CheckCircle size={48} className="text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{content.form.successTitle}</h3>
              <p className="text-gray-600">{content.form.successMessage}</p>
            </div>
          ) : (
            <form action={handleSubmit} className="space-y-4 bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
              <input 
                name="senderName"
                required 
                className="w-full p-4 rounded-xl border focus:ring-2 focus:ring-blue-600 outline-none" 
                placeholder={content.form.name} 
              />
              <input 
                name="senderEmail" 
                type="email" 
                required 
                className="w-full p-4 rounded-xl border focus:ring-2 focus:ring-blue-600 outline-none" 
                placeholder={content.form.email} 
              />
              <textarea 
                name="message" 
                required 
                className="w-full p-4 rounded-xl border focus:ring-2 focus:ring-blue-600 outline-none" 
                rows={4} 
                placeholder={content.form.message} 
              />
              <button 
                disabled={isPending}
                className={`w-full py-4 bg-blue-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition ${isPending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
              >
                {isPending ? "Sending..." : content.form.button} 
                {!isPending && <Send size={18} />}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}