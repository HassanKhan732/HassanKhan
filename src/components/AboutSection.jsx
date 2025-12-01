import { Brain, BarChart3, Sparkles } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Side - Bio (Short & Powerful) */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              AI-Driven Web Developer & Data Analyst
            </h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I build <span className="text-foreground font-medium">smart web applications</span> powered by modern tech and turn <span className="text-foreground font-medium">complex data into clear insights</span>.
              </p>
              <p>
                Expert in React, Next.js, TypeScript, and Python (Pandas, NumPy) , I create fast, beautiful front-ends and meaningful data solutions that actually help businesses grow.
              </p>
              <p className="font-medium text-foreground/90">
                Code + Creativity + Analytics = Real Results.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="cosmic-button text-center">
                Let's Talk
              </a>
              <a
                href="/cv.pdf"
                download
                className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-all text-center font-medium"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Side - Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">AI-Powered Web Apps</h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    React • Next.js • TypeScript • Modern UI
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Data Analysis</h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Python • Pandas • Visualization • Insights
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Smart Solutions</h4>
                  <p className="text-muted-foreground text-sm mt-1">
                    Clean code, creative design, data-driven decisions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};