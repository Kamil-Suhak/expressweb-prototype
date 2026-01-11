import { GlobalConfig, dictionaries } from "@/config/site-config";

interface FooterProps {
  brand: typeof GlobalConfig.brand;
  socials: typeof GlobalConfig.socials;
}

export default function Footer({ brand, socials }: FooterProps) {
  return (
    <footer className="border-t border-gray-100 bg-white pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-8 md:flex-row">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} {brand.name}.
          </p>
          <div className="flex gap-6">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.url}
                className="text-sm text-gray-400 transition hover:text-gray-900"
              >
                {social.platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
