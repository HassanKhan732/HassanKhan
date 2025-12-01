import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed left-1/2 -translate-x-1/2 mt-4 w-[90%] sm:w-[80%] md:w-[65%] lg:w-[60%] z-40 transition-all duration-300 rounded-full shadow-md backdrop-blur-md border border-white/10",
        isScrolled ? "bg-background/80 py-3" : "bg-background/60 py-4"
      )}
    >
      <div className="flex items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQHmqQv1UG4Z0w/profile-displayphoto-scale_100_100/B4EZn7NK.9HgAc-/0/1760856159984?e=1763596800&v=beta&t=ArXBuKXnvFBARckwlddm7nG9n_uDHPLc2rv2jqUJztg"
            alt="Avatar"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-primary/40 hover:border-primary/80 transition-all duration-300 shadow-sm bg-white p-1"
          />
          <span className="text-lg sm:text-xl font-bold text-primary hidden sm:inline">
            m.hassan
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-md"
          >
            Download CV
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-[1000]"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-background/95 backdrop-blur-xl z-[999] flex flex-col items-center justify-center space-y-10 transition-all duration-300 md:hidden"
        >
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-foreground"
          >
            <X size={32} />
          </button>

          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-foreground text-2xl hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground text-xl font-semibold hover:opacity-90 transition-all duration-300"
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
};
