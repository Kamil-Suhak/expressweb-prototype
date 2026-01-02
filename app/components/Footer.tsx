import { GlobalConfig, dictionaries } from "../site-config";

interface FooterProps {
  content: typeof dictionaries.pl.navLinks;
  brand: typeof GlobalConfig.brand;
  socials: typeof GlobalConfig.socials;
  lang: string;
}

export default function Footer({ content, brand, socials, lang }: FooterProps) {
  return (
    <footer className="bg-white border-t border-gray-100 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-12">
          
          Brand Column
          <div className="col-span-2">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{brand.name}</h3>
            <p className="text-gray-500 max-w-xs">
              {brand.tagline[lang as keyof typeof brand.tagline]}
            </p>
          </div>

          
          {content.map((section, i) => (
            <div key={i}>
              <ul className="space-y-2">
                  <li key={i}>
                    <a href={section.href} className="text-gray-500 hover:text-blue-600 transition text-sm">
                      {section.label}
                    </a>
                  </li>
              </ul>
            </div>
          ))}
        </div> */}

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} {brand.name}.
          </p>
          <div className="flex gap-6">
            {socials.map((social, i) => (
              <a key={i} href={social.url} className="text-sm text-gray-400 hover:text-gray-900 transition">
                {social.platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}