import emailjs from "emailjs-com";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Instagram,
  Github,
} from "lucide-react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fixed: Removed TypeScript syntax
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_at4yxtm",
        "template_da4cyy8",
        e.target,
        "MrE7-gKEtfX7i9ekd"
      )
      .then(
        () => {
          toast({
            title: "Message sent!",
            description: "Thank you! Your message has been delivered successfully.",
          });
          setIsSubmitting(false);
          e.target.reset();
        },
        () => {
          toast({
            title: "Error",
            description: "Failed to send message. Please try again later.",
            variant: "destructive",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Have a project in mind or want to collaborate? Let’s connect and make something great together.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">

          {/* Left Side — Contact Info */}
          <div className="bg-card p-6 sm:p-8 rounded-xl shadow-sm border border-border">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 text-left">

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Email</h4>
                  <a
                    href="mailto:hassankhanyousufzai79@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                  >
                    hassankhanyousufzai79@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Phone</h4>
                  <a
                    href="tel:+923112239732"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                  >
                    +92 311 2239732
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Location</h4>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Hyderabad, Pakistan
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex gap-5">
                <a href="https://www.linkedin.com/in/m-hassaan-8783a5351/" target="_blank" rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors">
                  <Linkedin size={22} />
                </a>
                <a href="https://github.com/HassanKhan732" target="_blank" rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors">
                  <Github size={22} />
                </a>
                <a href="https://www.instagram.com/_m.hassan_khan_/" target="_blank" rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors">
                  <Instagram size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side — Form */}
          <div className="bg-card p-6 sm:p-8 rounded-xl shadow-sm border border-border">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text" name="name" required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition"
                  placeholder="Your Name..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Your Email</label>
                <input
                  type="email" name="email" required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Your Message</label>
                <textarea
                  name="message" required rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none transition"
                  placeholder="Hello Hassan, I’d like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full py-3.5 flex items-center justify-center gap-2 text-sm sm:text-base font-medium rounded-lg transition-all bg-primary text-primary-foreground hover:bg-primary/90",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};