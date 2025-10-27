// import { ArrowUp } from "lucide-react";

// export const Footer = () => {
//   return (
//     <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
//       {" "}
//       <p className="text-sm text-muted-foreground">
//         {" "}
//         &copy; {new Date().getFullYear()} Pedrotech.co. All rights reserved.
//       </p>
//       <a
//         href="#hero"
//         className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
//       >
//         <ArrowUp size={20} />
//       </a>
//     </footer>
//   );
// };





import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-background/60 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center justify-center relative">
        {/* Centered Content */}
        <div className="flex flex-col items-center gap-4">
          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/HassanKhan732"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:your@email.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail size={22} />
            </a>
          </div>

          {/* Copy Text */}
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Hassan | All Rights Reserved.
          </p>
        </div>

        {/* Scroll-to-Top Button */}
        <a
          href="#hero"
          className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 shadow-sm hover:shadow-primary/30"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </a>
      </div>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </footer>
  );
};
