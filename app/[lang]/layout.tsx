import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { dictionaries, GlobalConfig, Locale } from "../site-config";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'pl' }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }>}): Promise<Metadata> {
  const { lang } = await params as { lang: Locale };
  const dict = dictionaries[lang];

  return {
    title: dict.seo.title,
    description: dict.seo.description,
    keywords: dict.seo.keywords,
    metadataBase: new URL(GlobalConfig.brand.url),
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params as { lang: Locale };
  const dict = dictionaries[lang];

  return (
    <html lang={lang} className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Navbar 
          links={dict.navLinks} 
          brandName={GlobalConfig.brand.name} 
          lang={lang} 
        />
        
        {children}
        
        <Footer 
          content={dict.navLinks} 
          brand={GlobalConfig.brand} 
          socials={GlobalConfig.socials}
          lang={lang}
        />
      </body>
    </html>
  );
}