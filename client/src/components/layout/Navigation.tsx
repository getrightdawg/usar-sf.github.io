import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/recruitment", label: "Recruitment" },
    { href: "/courses", label: "Courses" },
    { href: "/propaganda", label: "Propaganda" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    return location === path || (path === "/" && location === "");
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-asf-black/95 backdrop-blur-md border-b border-asf-gray-dark/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-3 group"
            data-testid="nav-logo"
          >
            <div className="relative">
              <img
                src="images/logos/Badge.png"
                alt="ASF Logo"
                className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-asf-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
            </div>
            <div className="hidden lg:block">
              <h1 className="font-rajdhani font-bold text-lg text-white">
                ARMY SPECIAL FORCES
              </h1>
              <p className="text-xs text-asf-accent font-medium">
                De Oppresso Liber
              </p>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-rajdhani font-medium text-lg hover:text-asf-accent transition-all duration-300 group ${
                  isActive(item.href)
                    ? "text-asf-accent"
                    : "text-asf-gray-light"
                }`}
                data-testid={`nav-link-${item.label.toLowerCase().replace(" ", "-")}`}
              >
                {item.label}
                <div
                  className={`absolute -bottom-1 left-0 h-0.5 bg-asf-accent transition-all duration-300 ${
                    isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></div>
              </Link>
            ))}
            <Link href="/recruitment">
              <Button
                className="glow-border bg-asf-accent text-asf-black px-6 py-2 font-rajdhani font-black hover:bg-asf-accent-dark hover:scale-105 transition-all duration-300 shadow-lg"
                data-testid="nav-join-button"
              >
                JOIN NOW
              </Button>
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-asf-gray-dark"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-asf-gray-dark pt-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-asf-gray-light transition-colors duration-300 ${
                    isActive(item.href)
                      ? "text-white font-semibold"
                      : "text-asf-gray-light"
                  }`}
                  onClick={() => setIsOpen(false)}
                  data-testid={`mobile-nav-link-${item.label.toLowerCase().replace(" ", "-")}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}