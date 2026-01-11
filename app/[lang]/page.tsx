import { dictionaries, GlobalConfig, Locale } from "@/config/site-config";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import Contact from "@/components/Contact";
import PricingSingle from "@/components/PricingSingle";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = (await params) as { lang: Locale };
  const dict = dictionaries[lang];

  return (
    <>
      <Hero content={dict.hero} />
      <ServicesGrid head={dict.servicesHead} items={dict.services} />
      <PricingSingle content={dict.pricing[1]} />
      {/* <Pricing plans={dict.pricing} title={dict.pricingHead.title} subtitle={dict.pricingHead.subtitle} /> */}
      <Reviews review={dict.review} />
      <Contact content={dict.contact} brandInfo={GlobalConfig.brand} />
    </>
  );
}
