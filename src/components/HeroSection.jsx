// import { ArrowDown } from "lucide-react";

// export const HeroSection = () => {
//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex flex-col items-center justify-center px-4"
//     >
//       <div className="container max-w-4xl mx-auto text-center z-10">
//         <div className="space-y-6">
//           <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
//             <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
//             <span className="text-primary opacity-0 animate-fade-in-delay-1">
//               {" "}
//               Pedro
//             </span>
//             <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
//               {" "}
//               Machado
//             </span>
//           </h1>

//           <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
//             I create stellar web experiences with modern technologies.
//             Specializing in front-end development, I build interfaces that are
//             both beautiful and functional.
//           </p>

//           <div className="pt-4 opacity-0 animate-fade-in-delay-4">
//             <a href="#projects" className="cosmic-button">
//               View My Work
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
//         <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
//         <ArrowDown className="h-5 w-5 text-primary" />
//       </div>
//     </section>
//   );
// };









import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import gsap from "gsap";

export const HeroSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.from(".hero-title span", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".hero-text",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-btn",
          {
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.3"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Floating glowing background circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="hero-title text-4xl md:text-6xl font-bold tracking-tight">
            <span>Hi, I'm</span>
            <span className="text-primary ml-2">Hassan</span>
            <span className="text-gradient ml-2">Khan</span>
          </h1>

          <p className="hero-text text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            I create stellar web experiences with modern technologies.
            Specializing in front-end development, I build interfaces that are
            both beautiful and functional.
          </p>

          <div className="pt-4 hero-btn">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};









// import { ArrowDown } from "lucide-react";

// export const HeroSection = () => {
//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-black text-white"
//     >
//       {/* 🔹 Spline 3D Background */}
//       <div className="absolute inset-0 z-0">
//         <iframe
//           src="https://my.spline.design/3dcubesdemo-1a2b3c4d5e/" // <-- apna URL yahan paste kar
//           frameBorder="0"
//           width="100%"
//           height="100%"
//           className="opacity-80"
//         ></iframe>
//       </div>

//       {/* 🔹 Content */}
//       <div className="container max-w-4xl mx-auto text-center z-10 relative">
//         <div className="space-y-6">
//           <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
//             <span className="opacity-0 animate-fade-in">Hi, I'm</span>
//             <span className="text-primary opacity-0 animate-fade-in-delay-1">
//               {" "}Pedro
//             </span>
//             <span className="ml-2 opacity-0 animate-fade-in-delay-2 text-blue-400">
//               {" "}Machado
//             </span>
//           </h1>

//           <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
//             I create stellar web experiences with modern technologies.
//             Specializing in front-end development, I build interfaces that are
//             both beautiful and functional.
//           </p>

//           <div className="pt-4 opacity-0 animate-fade-in-delay-4">
//             <a
//               href="#projects"
//               className="px-8 py-3 bg-primary text-white rounded-full font-medium hover:scale-105 transition-transform duration-300"
//             >
//               View My Work
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* 🔹 Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
//         <span className="text-sm text-gray-400 mb-2">Scroll</span>
//         <ArrowDown className="h-5 w-5 text-primary" />
//       </div>
//     </section>
//   );
// };



























































































// import { ArrowDown } from "lucide-react";

// export const HeroSection = () => {
//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-[#0d1117] text-gray-100"
//     >
//       <div className="container max-w-4xl mx-auto text-center z-10">
//         <div className="space-y-6">
//           <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
//             <span className="text-gray-400 opacity-0 animate-fade-in">
//               Hi, I'm
//             </span>
//             <span className="text-white opacity-0 animate-fade-in-delay-1 ml-2">
//               Pedro
//             </span>
//             <span className="ml-2 text-[#58a6ff] opacity-0 animate-fade-in-delay-2">
//               Machado
//             </span>
//           </h1>

//           <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
//             I craft exceptional digital experiences using modern web
//             technologies. Focused on clean code, smooth animations, and
//             meaningful design.
//           </p>

//           <div className="pt-4 opacity-0 animate-fade-in-delay-4">
//             <a
//               href="#projects"
//               className="px-6 py-3 rounded-full bg-[#21262d] hover:bg-[#30363d] border border-[#30363d] hover:border-[#58a6ff] text-gray-100 transition-all duration-300"
//             >
//               View My Work
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Down Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
//         <span className="text-sm text-gray-500 mb-2">Scroll</span>
//         <ArrowDown className="h-5 w-5 text-[#58a6ff]" />
//       </div>
//     </section>
//   );
// };
