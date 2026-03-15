import { Link } from "@tanstack/react-router";
import { Leaf, Linkedin, Mail, MapPin, Phone } from "lucide-react";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      role="img"
      aria-label="Facebook"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role="img"
      aria-label="Instagram"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/dsk-sustainability-tech",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/dsksustainabilitytech",
      icon: <FacebookIcon className="w-5 h-5" />,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/dsksustainabilitytech",
      icon: <InstagramIcon className="w-5 h-5" />,
    },
  ];

  return (
    <footer className="bg-deep-blue text-white">
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-green flex items-center justify-center">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-700 text-white text-base">
                DSK Sustainability Tech LLP
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Sustainable by Design, Knowledge by Core
            </p>
            <p className="text-white/50 text-xs mt-4 leading-relaxed">
              We design intelligent technology solutions that help organizations
              operate efficiently, sustainably, and intelligently.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-600 text-white mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", to: "/" as const },
                { label: "Services", to: "/services" as const },
                { label: "Contact Us", to: "/contact" as const },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-white/70 text-sm hover:text-brand-green-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-600 text-white mb-5 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-green-light mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm leading-relaxed">
                  Door No.315, KTVR Greenfield Apartment, Velandipalayam, C3
                  Police Station, Saibaba Colony, Coimbatore North, Coimbatore -
                  641025, Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-green-light shrink-0" />
                <a
                  href="mailto:info@dsksustainabilitytech.com"
                  className="text-white/70 text-sm hover:text-brand-green-light transition-colors"
                >
                  info@dsksustainabilitytech.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-green-light shrink-0" />
                <span className="text-white/70 text-sm">+91 XXXXX XXXXX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-xs">
            &copy; {year} DSK Sustainability Tech LLP. All rights reserved.
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-white/70 hover:text-brand-green-light transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 text-xs hover:text-white/60 transition-colors"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
