import { dictionaries, GlobalConfig, Locale } from "../site-config";
import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import Contact from "../components/Contact";
import PricingSingle from "../components/PricingSingle";
import Pricing from "../components/Pricing";

export default async function LandingPage({ params }: { params: { lang: Locale } }) {
  const { lang } = await params;
  const dict = dictionaries[lang];

  return (
    <>
      <Hero content={dict.hero} />
      <ServicesGrid head={dict.servicesHead} items={dict.services} />
      <PricingSingle content={dict.pricing[1]} /> 
      {/* <Pricing plans={dict.pricing} title={dict.pricingHead.title} subtitle={dict.pricingHead.subtitle} /> */}
      <Contact content={dict.contact} brandInfo={GlobalConfig.brand} />
    </>
  );
}