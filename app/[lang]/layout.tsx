import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { dictionaries, GlobalConfig, Locale } from "../site-config";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../globals.css"; // Ensure this path is correct based on your folder move

const inter = Inter({ subsets: ["latin", "latin-ext"] }); // Added latin-ext for Polish characters

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'pl' }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }>}): Promise<Metadata> {
  const { lang } = await params;
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
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = dictionaries[lang];

  return (
    <html lang={lang} className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {/* Pass the language-specific nav links and brand info */}
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