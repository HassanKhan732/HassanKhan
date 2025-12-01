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
//               Hassaan
//             </span>
//             <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
//               {" "}
//               Khan
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






import { ArrowDown } from "lucide-react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useEffect, useState, useCallback } from "react";

export const HeroSection = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* 🌟 Particles — sirf light theme me */}
      {!isDark && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          className="absolute inset-0 z-0"
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                resize: true,
              },
              modes: { repulse: { distance: 100, duration: 0.4 } },
            },
            particles: {
              color: { value: "#38bdf8" },
              links: {
                color: "#38bdf8",
                distance: 140,
                enable: true,
                opacity: 0.4,
                width: 1,
              },
              collisions: { enable: false },
              move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 1.5,
                straight: false,
              },
              number: { value: 60, density: { enable: true, area: 800 } },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      )}

      {/* 🌟 Hero Content */}
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Hassaan
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Khan
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I create stellar web experiences with modern technologies.
            Specializing in front-end development, I build interfaces that are
            both beautiful and functional.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
