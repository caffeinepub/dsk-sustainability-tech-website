import { Link, useNavigate, useRouter } from "@tanstack/react-router";
import { Leaf, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", to: "/" as const, ocid: "nav.home.link", hash: "" },
  {
    label: "Services",
    to: "/services" as const,
    ocid: "nav.services.link",
    hash: "",
  },
  {
    label: "Innovations",
    to: "/services" as const,
    ocid: "nav.innovations.link",
    hash: "innovations",
  },
  {
    label: "Contact Us",
    to: "/contact" as const,
    ocid: "nav.contact.link",
    hash: "",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (to: string, hash: string) => {
    setOpen(false);
    if (hash) {
      const currentPath = router.state.location.pathname;
      if (currentPath !== to) {
        navigate({ to }).then(() => {
          setTimeout(() => {
            document
              .getElementById(hash)
              ?.scrollIntoView({ behavior: "smooth" });
          }, 300);
        });
      } else {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate({ to });
    }
  };

  return (
    <header
      data-ocid="nav.panel"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-card" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            onClick={() => setOpen(false)}
          >
            <div className="w-8 h-8 rounded-lg bg-deep-blue flex items-center justify-center">
              <Leaf className="w-4 h-4 text-brand-green-light" />
            </div>
            <span className="font-display font-700 text-deep-blue text-sm md:text-base leading-tight">
              DSK Sustainability
              <br className="hidden sm:block" />
              <span className="text-brand-green"> Tech LLP</span>
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.label}
                data-ocid={link.ocid}
                onClick={() => handleNavClick(link.to, link.hash)}
                className="px-4 py-2 rounded-md text-sm font-medium text-foreground hover:text-deep-blue hover:bg-section-grey transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            data-ocid="nav.hamburger.toggle"
            className="md:hidden p-2 rounded-md text-foreground hover:bg-section-grey transition-colors"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-border overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-3 gap-1">
              {navLinks.map((link) => (
                <button
                  type="button"
                  key={link.label}
                  data-ocid={link.ocid}
                  onClick={() => handleNavClick(link.to, link.hash)}
                  className="px-4 py-3 rounded-md text-sm font-medium text-left text-foreground hover:text-deep-blue hover:bg-section-grey transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
