// import { cn } from "@/lib/utils";
// import { Menu, X } from "lucide-react";
// import { useEffect, useState } from "react";

// const navItems = [
//   { name: "Home", href: "#hero" },
//   { name: "About", href: "#about" },
//   { name: "Skills", href: "#skills" },
//   { name: "Projects", href: "#projects" },
//   { name: "Contact", href: "#contact" },
// ];

// export const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.screenY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);
//   return (
//     <nav
//       className={cn(
//         "fixed w-full z-40 transition-all duration-300",
//         isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
//       )}
//     >
//       <div className="container flex items-center justify-between">
//         <a
//           className="text-xl font-bold text-primary flex items-center"
//           href="#hero"
//         >
//           <span className="relative z-10">
//             <span className="text-glow text-foreground"> PedroTech </span>{" "}
//             Portfolio
//           </span>
//         </a>

//         {/* desktop nav */}
//         <div className="hidden md:flex space-x-8">
//           {navItems.map((item, key) => (
//             <a
//               key={key}
//               href={item.href}
//               className="text-foreground/80 hover:text-primary transition-colors duration-300"
//             >
//               {item.name}
//             </a>
//           ))}
//         </div>

//         {/* mobile nav */}

//         <button
//           onClick={() => setIsMenuOpen((prev) => !prev)}
//           className="md:hidden p-2 text-foreground z-50"
//           aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
//         >
//           {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
//         </button>

//         <div
//           className={cn(
//             "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
//             "transition-all duration-300 md:hidden",
//             isMenuOpen
//               ? "opacity-100 pointer-events-auto"
//               : "opacity-0 pointer-events-none"
//           )}
//         >
//           <div className="flex flex-col space-y-8 text-xl">
//             {navItems.map((item, key) => (
//               <a
//                 key={key}
//                 href={item.href}
//                 className="text-foreground/80 hover:text-primary transition-colors duration-300"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };













// import { cn } from "@/lib/utils";
// import { Menu, X } from "lucide-react";
// import { useEffect, useState } from "react";

// const navItems = [
//   { name: "Home", href: "#hero" },
//   { name: "About", href: "#about" },
//   // { name: "Skills", href: "#skills" },
//   { name: "Projects", href: "#projects" },
//   { name: "Contact", href: "#contact" },
//   { name: "Download CV", href: "#cv" },
//     // { name: "Blog", href: "#blog" },


// ];

// export const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={cn(
//         "fixed left-1/2 -translate-x-1/2 mt-4 w-[63%] z-40 transition-all duration-300 rounded-full shadow-md backdrop-blur-md border border-white/10",
//         isScrolled ? "bg-background/80 py-3" : "bg-background/60 py-4"
//       )}
//     >
//       <div className="container flex items-center justify-between px-6">
//         {/* Avatar Logo */}
//         <a href="#hero" className="flex items-center gap-3">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/219/219983.png" // 👈 male avatar placeholder
//             alt="Avatar"
//             className="w-10 h-10 rounded-full border border-primary/40 hover:border-primary/80 transition-all duration-300 shadow-sm bg-white p-1"
//           />
//           <span className="text-xl font-bold text-primary hidden sm:inline">
//             Portfolio
//           </span>
//         </a>

//         {/* Desktop nav */}
//         <div className="hidden md:flex space-x-8">
//           {navItems.map((item, key) => (
//             <a
//               key={key}
//               href={item.href}
//               className="text-foreground/80 hover:text-primary transition-colors duration-300"
//             >
//               {item.name}
//             </a>
//           ))}
//         </div>

//         {/* Mobile nav toggle */}
//         <button
//           onClick={() => setIsMenuOpen((prev) => !prev)}
//           className="md:hidden p-2 text-foreground z-50"
//           aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
//         >
//           {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>

//         {/* Mobile nav menu */}
//         <div
//           className={cn(
//             "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
//             isMenuOpen
//               ? "opacity-100 pointer-events-auto"
//               : "opacity-0 pointer-events-none"
//           )}
//         >
//           <div className="flex flex-col space-y-8 text-xl">
//             {navItems.map((item, key) => (
//               <a
//                 key={key}
//                 href={item.href}
//                 className="text-foreground/80 hover:text-primary transition-colors duration-300"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };


















// import { cn } from "@/lib/utils";
// import { Menu, X } from "lucide-react";
// import { useEffect, useState } from "react";

// const navItems = [
//   { name: "Home", href: "#hero" },
//   { name: "About", href: "#about" },
//   // { name: "Skills", href: "#skills" },
//   { name: "Projects", href: "#projects" },
//   { name: "Contact", href: "#contact" },
// ];

// export const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={cn(
//         "fixed left-1/2 -translate-x-1/2 mt-4 w-[63%] z-40 transition-all duration-300 rounded-full shadow-md backdrop-blur-md border border-white/10",
//         isScrolled ? "bg-background/80 py-3" : "bg-background/60 py-4"
//       )}
//     >
//       <div className="container flex items-center justify-between px-6">
//         {/* Avatar Logo */}
//         <a href="#hero" className="flex items-center gap-3">
//           <img
//             src="https://media.licdn.com/dms/image/v2/D4E03AQHmqQv1UG4Z0w/profile-displayphoto-scale_100_100/B4EZn7NK.9HgAc-/0/1760856159984?e=1763596800&v=beta&t=ArXBuKXnvFBARckwlddm7nG9n_uDHPLc2rv2jqUJztg" // 👈 male avatar
//             alt="Avatar"
//             className="w-10 h-10 rounded-full border border-primary/40 hover:border-primary/80 transition-all duration-300 shadow-sm bg-white p-1"
//           />
//           <span className="text-xl font-bold text-primary hidden sm:inline">
//             m.hassan
//           </span>
//         </a>

//         {/* Desktop nav */}
//         <div className="hidden md:flex space-x-8 items-center">
//           {navItems.map((item, key) => (
//             <a
//               key={key}
//               href={item.href}
//               className="text-foreground/80 hover:text-primary transition-colors duration-300"
//             >
//               {item.name}
//             </a>
//           ))}

//           {/* ✅ Download CV button */}
//           <a
//             href="/cv.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-md"
//           >
//             Download CV
//           </a>
//         </div>

//         {/* Mobile nav toggle */}
//         <button
//           onClick={() => setIsMenuOpen((prev) => !prev)}
//           className="md:hidden p-2 text-foreground z-50"
//           aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
//         >
//           {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>

//         {/* Mobile nav menu */}
//         <div
//           className={cn(
//             "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
//             isMenuOpen
//               ? "opacity-100 pointer-events-auto"
//               : "opacity-0 pointer-events-none"
//           )}
//         >
//           <div className="flex flex-col space-y-8 text-xl">
//             {navItems.map((item, key) => (
//               <a
//                 key={key}
//                 href={item.href}
//                 className="text-foreground/80 hover:text-primary transition-colors duration-300"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item.name}
//               </a>
//             ))}

//             {/* ✅ Mobile Download CV */}
//             <a
//               href="/cv.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-300"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Download CV
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };







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
