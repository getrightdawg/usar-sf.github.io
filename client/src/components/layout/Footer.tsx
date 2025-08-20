import { Link } from "wouter";
import { FooterConfig } from "../../../../config/index";

export function Footer() {
  return (
    <footer
      className={`professional-gradient border-t border-asf-accent/20 py-16 relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-asf-black via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <div
                  className={`w-16 h-16 flex items-center justify-center bg-asf-accent/10 rounded-lg`}
                >
                  <img
                    src={FooterConfig.brand.logo}
                    alt="ASF Logo"
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <div
                  className={`absolute inset-0 bg-asf-accent/20 rounded-lg blur-md opacity-50`}
                ></div>
              </div>
              <div>
                <p className="font-rajdhani font-black text-2xl text-white">
                  {FooterConfig.brand.name}
                </p>
                <p className="text-asf-accent font-rajdhani font-bold">
                  {FooterConfig.brand.motto}
                </p>
                <p className="text-asf-gray-light text-sm">{FooterConfig.brand.subtitle}</p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-asf-gray-light max-w-md leading-relaxed">
                {FooterConfig.brand.description}
              </p>
              <div className="flex items-center space-x-2 text-sm text-asf-gray">
                <span>Website Credits:</span>
                {FooterConfig.brand.websiteCredits.map((credit) => (
                  <span key={credit} className="text-asf-accent font-medium">
                    {credit}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-rajdhani font-black text-xl mb-6 text-asf-accent">QUICK LINKS</h3>
            <div className="w-12 h-1 bg-asf-accent mb-4"></div>
            <ul className="space-y-3">
              {FooterConfig.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-asf-gray-light hover:text-asf-accent transition-all duration-300 text-sm font-medium group flex items-center"
                    data-testid={`footer-link-${link.label.toLowerCase()}`}
                  >
                    <span className="w-2 h-2 bg-asf-gray-dark rounded-full mr-3 group-hover:bg-asf-accent transition-colors duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-rajdhani font-black text-xl mb-6 text-asf-accent">CONNECT</h3>
            <div className="w-12 h-1 bg-asf-accent mb-4"></div>
            <ul className="space-y-3">
              {FooterConfig.externalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-asf-gray-light hover:text-asf-accent transition-all duration-300 text-sm font-medium group flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`footer-external-${link.label
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    <span className="w-2 h-2 bg-asf-gray-dark rounded-full mr-3 group-hover:bg-asf-accent transition-colors duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div
              className={`mt-8 p-4 bg-asf-accent/5 rounded-lg border border-asf-accent/20`}
            >
              <p className="text-asf-accent font-rajdhani font-bold text-sm mb-2">
                {FooterConfig.connectBox.title}
              </p>
              <p className="text-asf-gray-light text-xs leading-relaxed">
                {FooterConfig.connectBox.description}
              </p>
            </div>
          </div>
        </div>

        <div className={`border-t border-asf-accent/20 pt-8`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <p className="text-asf-gray-light text-sm">
                {FooterConfig.footerBottom.copyright}
              </p>
              <div className="hidden md:block w-1 h-1 bg-asf-gray-dark rounded-full"></div>
              <p className="text-asf-gray text-xs">{FooterConfig.footerBottom.warning}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {FooterConfig.footerBottom.pulseDot && (
                  <div className="w-2 h-2 bg-asf-accent rounded-full animate-pulse"></div>
                )}
                <p className="text-asf-accent font-rajdhani font-bold text-sm">
                  {FooterConfig.footerBottom.motto}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
