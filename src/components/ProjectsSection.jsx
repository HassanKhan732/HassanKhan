import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ShinePak — Premium Packaging Website",
    description:
      "A professional website for ShinePak to showcase premium packaging solutions with a modern and responsive UI design.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Business Website"],
    demoUrl: "https://www.shinepak.pk/",
    githubUrl: "https://github.com/HassanKhan732",
  },
  {
    id: 2,
    title: "Digital Poe — Creative Agency",
    description:
      "Developed a stunning creative agency site featuring smooth animations, clean design, and engaging user experience.",
    image: "/projects/project3.png",
    tags: ["Next.js", "Framer Motion", "TailwindCSS"],
    demoUrl: "https://www.digitalpoe.com/",
    githubUrl: "https://github.com/HassanKhan732",
  },
  {
    id: 3,
    title: "360 Impex — Import & Export Company",
    description:
      "Corporate website for 360 Impex built with React and GSAP to highlight their global import/export services and expertise.",
    image: "/projects/project2.png",
    tags: ["React", "GSAP", "Responsive Design"],
    demoUrl: "https://360impex.com/",
    githubUrl: "https://github.com/HassanKhan732",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my live projects built for real businesses. Each one
          reflects my attention to design, performance, and user experience.
        </p>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 line-clamp-1">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/70 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/70 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="text-center mt-14">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/HassanKhan732"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
