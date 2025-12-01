// import { cn } from "@/lib/utils";

// const skills = [
//     {
//     name: "Python",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
//   },
//   {
//     name: "JavaScript",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
//   },
//   {
//     name: "React",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//   },
//   {
//     name: "TypeScript",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
//   },
//     {
//     name: "Next.js",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
//   },
//   {
//     name: "Tailwind CSS",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
//   },
//     {
//     name: "HTML/CSS",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
//   },
//   {
//     name: "Figma",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
//   },
//   {
//     name: "VS Code",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
//   },
// ];

// export const SkillsSection = () => {
//   return (
//     <section id="skills" className="py-20 px-4 relative bg-secondary/30">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
//           My <span className="text-primary">Skills</span>
//         </h2>

//         {/* Skills Grid */}
//         <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-x-0 gap-y-6 justify-items-center">
//           {skills.map((skill, key) => (
//             <div
//               key={key}
//               className="bg-card/70 p-4 rounded-lg shadow-md border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_8px_rgba(255,255,255,0.08)] flex flex-col items-center justify-center text-center w-40 h-40"
//             >
//               <div className="flex items-center justify-center w-10 h-10 mb-2">
//                 <img
//                   src={skill.icon}
//                   alt={skill.name}
//                   className="w-24 h-24 object-contain"
//                 />
//               </div>
//               <h3 className="font-medium text-sm text-foreground">
//                 {skill.name}
//               </h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };














// import TiltedCard from "./TiltedCard";

// export const SkillsSection = () => {
//   const skills = [
//     { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
//     { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
//     { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
//     { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
//     { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
//     { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
//     { name: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
//     { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
//     { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
//   ];

//   return (
//     <section id="skills" className="py-20 px-4 relative bg-secondary/30">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
//           My <span className="text-primary">Skills</span>
//         </h2>

//         <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-x-0 gap-y-6 justify-items-center">
//           {skills.map((skill, i) => (
//             <TiltedCard key={i}>
//               <div
//                 className="bg-card/70 p-4 rounded-lg shadow-md border border-white/10 
//                 hover:border-white/30 transition-all duration-300 
//                 flex flex-col items-center justify-center text-center w-40 h-40"
//               >
//                 <img
//                   src={skill.icon}
//                   alt={skill.name}
//                   className="w-24 h-24 object-contain mb-2"
//                 />
//                 <h3 className="font-medium text-sm text-foreground">{skill.name}</h3>
//               </div>
//             </TiltedCard>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };











import TiltedCard from "./TiltedCard";

export const SkillsSection = () => {
  const skills = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "HTML/CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  ];

  return (
    <section id="skills" className="py-16 md:py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8 justify-center items-center">
          {skills.map((skill, index) => (
            <TiltedCard key={index}>
              <div className="group relative bg-card/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:-translate-y-2 w-full h-40 sm:h-44 md:h-48 flex flex-col items-center justify-center text-center">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain mb-3 drop-shadow-md"
                />
                <h3 className="font-semibold text-sm sm:text-base text-foreground tracking-tight">
                  {skill.name}
                </h3>
              </div>
            </TiltedCard>
          ))}
        </div>
      </div>
    </section>
  );
};