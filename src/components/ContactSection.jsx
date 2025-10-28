// // import {
// //   Instagram,
// //   Linkedin,
// //   Mail,
// //   MapPin,
// //   Phone,
// //   Send,
// //   Twitch,
// //   Twitter,
// // } from "lucide-react";
// // import { cn } from "@/lib/utils";
// // import { useToast } from "@/hooks/use-toast";
// // import { useState } from "react";

// // export const ContactSection = () => {
// //   const { toast } = useToast();
// //   const [isSubmitting, setIsSubmitting] = useState(false);

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     setIsSubmitting(true);

// //     setTimeout(() => {
// //       toast({
// //         title: "Message sent!",
// //         description: "Thank you for your message. I'll get back to you soon.",
// //       });
// //       setIsSubmitting(false);
// //     }, 1500);
// //   };
// //   return (
// //     <section id="contact" className="py-24 px-4 relative bg-secondary/30">
// //       <div className="container mx-auto max-w-5xl">
// //         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
// //           Get In <span className="text-primary"> Touch</span>
// //         </h2>

// //         <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
// //           Have a project in mind or want to collaborate? Feel free to reach out.
// //           I'm always open to discussing new opportunities.
// //         </p>

// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
// //           <div className="space-y-8">
// //             <h3 className="text-2xl font-semibold mb-6">
// //               {" "}
// //               Contact Information
// //             </h3>

// //             <div className="space-y-6 justify-center">
// //               <div className="flex items-start space-x-4">
// //                 <div className="p-3 rounded-full bg-primary/10">
// //                   <Mail className="h-6 w-6 text-primary" />{" "}
// //                 </div>
// //                 <div>
// //                   <h4 className="font-medium"> Email</h4>
// //                   <a
// //                     href="mailto:hello@gmail.com"
// //                     className="text-muted-foreground hover:text-primary transition-colors"
// //                   >
// //                     hello@gmail.com
// //                   </a>
// //                 </div>
// //               </div>
// //               <div className="flex items-start space-x-4">
// //                 <div className="p-3 rounded-full bg-primary/10">
// //                   <Phone className="h-6 w-6 text-primary" />{" "}
// //                 </div>
// //                 <div>
// //                   <h4 className="font-medium"> Phone</h4>
// //                   <a
// //                     href="tel:+11234567890"
// //                     className="text-muted-foreground hover:text-primary transition-colors"
// //                   >
// //                     +1 (123) 456-7890
// //                   </a>
// //                 </div>
// //               </div>
// //               <div className="flex items-start space-x-4">
// //                 <div className="p-3 rounded-full bg-primary/10">
// //                   <MapPin className="h-6 w-6 text-primary" />{" "}
// //                 </div>
// //                 <div>
// //                   <h4 className="font-medium"> Location</h4>
// //                   <a className="text-muted-foreground hover:text-primary transition-colors">
// //                     Vancouver, BC, Canada
// //                   </a>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="pt-8">
// //               <h4 className="font-medium mb-4"> Connect With Me</h4>
// //               <div className="flex space-x-4 justify-center">
// //                 <a href="#" target="_blank">
// //                   <Linkedin />
// //                 </a>
// //                 <a href="#" target="_blank">
// //                   <Twitter />
// //                 </a>
// //                 <a href="#" target="_blank">
// //                   <Instagram />
// //                 </a>
// //                 <a href="#" target="_blank">
// //                   <Twitch />
// //                 </a>
// //               </div>
// //             </div>
// //           </div>

// //           <div
// //             className="bg-card p-8 rounded-lg shadow-xs"
// //             onSubmit={handleSubmit}
// //           >
// //             <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

// //             <form className="space-y-6">
// //               <div>
// //                 <label
// //                   htmlFor="name"
// //                   className="block text-sm font-medium mb-2"
// //                 >
// //                   {" "}
// //                   Your Name
// //                 </label>
// //                 <input
// //                   type="text"
// //                   id="name"
// //                   name="name"
// //                   required
// //                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
// //                   placeholder="Pedro Machado..."
// //                 />
// //               </div>

// //               <div>
// //                 <label
// //                   htmlFor="email"
// //                   className="block text-sm font-medium mb-2"
// //                 >
// //                   {" "}
// //                   Your Email
// //                 </label>
// //                 <input
// //                   type="email"
// //                   id="email"
// //                   name="email"
// //                   required
// //                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
// //                   placeholder="john@gmail.com"
// //                 />
// //               </div>

// //               <div>
// //                 <label
// //                   htmlFor="message"
// //                   className="block text-sm font-medium mb-2"
// //                 >
// //                   {" "}
// //                   Your Message
// //                 </label>
// //                 <textarea
// //                   id="message"
// //                   name="message"
// //                   required
// //                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
// //                   placeholder="Hello, I'd like to talk about..."
// //                 />
// //               </div>

// //               <button
// //                 type="submit"
// //                 disabled={isSubmitting}
// //                 className={cn(
// //                   "cosmic-button w-full flex items-center justify-center gap-2"
// //                 )}
// //               >
// //                 {isSubmitting ? "Sending..." : "Send Message"}
// //                 <Send size={16} />
// //               </button>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };















// import {
//   Instagram,
//   Linkedin,
//   Mail,
//   MapPin,
//   Phone,
//   Send,
//   Github,
// } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { useToast } from "@/hooks/use-toast";
// import { useState } from "react";

// export const ContactSection = () => {
//   const { toast } = useToast();
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     setTimeout(() => {
//       toast({
//         title: "Message sent!",
//         description: "Thank you for your message. I'll get back to you soon.",
//       });
//       setIsSubmitting(false);
//     }, 1500);
//   };

//   return (
//     <section id="contact" className="py-24 px-4 relative bg-secondary/30">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//           Get In <span className="text-primary">Touch</span>
//         </h2>

//         <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//           Have a project in mind or want to collaborate? Feel free to reach out.
//           I'm always open to discussing new opportunities.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* Contact Info */}
//           <div className="space-y-8">
//             <h3 className="text-2xl font-semibold mb-6">
//               Contact Information
//             </h3>

//             <div className="space-y-6 justify-center">
//               <div className="flex items-start space-x-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <Mail className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium">Email</h4>
//                   <a
//                     href="mailto:hassankhanyousufzai79@gmail.com"
//                     className="text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     hassankhanyousufzai79@gmail.com
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <Phone className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium">Phone</h4>
//                   <a
//                     href="tel:+923112239732"
//                     className="text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     +92 311 2239732
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <MapPin className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium">Location</h4>
//                   <span className="text-muted-foreground hover:text-primary transition-colors">
//                     Hyderabad, Pakistan
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Social Links */}
//             <div className="pt-8">
//               <h4 className="font-medium mb-4">Connect With Me</h4>
//               <div className="flex space-x-5 justify-center">
//                 <a
//                   href="https://www.linkedin.com/in/m-hassaan-8783a5351/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-primary transition-colors"
//                 >
//                   <Linkedin size={22} />
//                 </a>
//                 <a
//                   href="https://github.com/HassanKhan732"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-primary transition-colors"
//                 >
//                   <Github size={22} />
//                 </a>
//                 <a
//                   href="https://www.instagram.com/_m.hassan_khan_/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-primary transition-colors"
//                 >
//                   <Instagram size={22} />
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Message Form */}
//           <div
//             className="bg-card p-8 rounded-lg shadow-xs"
//             onSubmit={handleSubmit}
//           >
//             <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

//             <form className="space-y-6">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium mb-2"
//                 >
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   required
//                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
//                   placeholder="Your Name..."
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium mb-2"
//                 >
//                   Your Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   required
//                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
//                   placeholder="you@example.com"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium mb-2"
//                 >
//                   Your Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   required
//                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
//                   placeholder="Hello Hassan, I’d like to talk about..."
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={cn(
//                   "cosmic-button w-full flex items-center justify-center gap-2"
//                 )}
//               >
//                 {isSubmitting ? "Sending..." : "Send Message"}
//                 <Send size={16} />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


































// import emailjs from "emailjs-com";
// import { useState } from "react";
// import { useToast } from "@/hooks/use-toast";
// import { cn } from "@/lib/utils";
// import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Github } from "lucide-react";

// export const ContactSection = () => {
//   const { toast } = useToast();
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     emailjs
//       .sendForm(
//         "service_at4yxtm",       // 🔹 from EmailJS
//         "template_da4cyy8",      // 🔹 from EmailJS
//         e.target,                // 🔹 form reference
//         "MrE7-gKEtfX7i9ekd"        // 🔹 from EmailJS
//       )
//       .then(
//         () => {
//           toast({
//             title: "Message sent!",
//             description: "Thank you! Your message has been delivered.",
//           });
//           setIsSubmitting(false);
//           e.target.reset();
//         },
//         (error) => {
//           toast({
//             title: "Error!",
//             description: "Failed to send message. Please try again.",
//             variant: "destructive",
//           });
//           setIsSubmitting(false);
//         }
//       );
//   };

//   return (
//     <section id="contact" className="py-24 px-4 relative bg-secondary/30">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//           Get In <span className="text-primary">Touch</span>
//         </h2>

//         <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//           Have a project in mind or want to collaborate? Feel free to reach out.
//           I'm always open to discussing new opportunities.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* Contact info same as before */}
//           <div className="space-y-8">
//             {/* ...contact + social code yahan rahega... */}
//           </div>

//           {/* Email form */}
//           <div className="bg-card p-8 rounded-lg shadow-xs">
//             <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

//             <form className="space-y-6" onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium mb-2">
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   required
//                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
//                   placeholder="Your Name..."
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium mb-2">
//                   Your Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   required
//                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
//                   placeholder="you@example.com"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium mb-2">
//                   Your Message
//                 </label>
//                 <textarea
//                   name="message"
//                   required
//                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
//                   placeholder="Hello Hassan, I’d like to talk about..."
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
//               >
//                 {isSubmitting ? "Sending..." : "Send Message"}
//                 <Send size={16} />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };






























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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_at4yxtm", // 🔹 Your EmailJS service ID
        "template_da4cyy8", // 🔹 Your EmailJS template ID
        e.target,
        "MrE7-gKEtfX7i9ekd" // 🔹 Your EmailJS public key
      )
      .then(
        () => {
          toast({
            title: "Message sent! ✅",
            description: "Thank you! Your message has been delivered successfully.",
          });
          setIsSubmitting(false);
          e.target.reset();
        },
        () => {
          toast({
            title: "Error ❌",
            description: "Failed to send message. Please try again later.",
            variant: "destructive",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Let’s connect and make
          something great together.
        </p>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side — Info */}
          <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:hassankhanyousufzai79@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    hassankhanyousufzai79@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+923112239732"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +92 311 2239732
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground">
                    Hyderabad, Pakistan
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-border mt-6">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-5">
                <a
                  href="https://www.linkedin.com/in/m-hassaan-8783a5351/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="https://github.com/HassanKhan732"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Github size={22} />
                </a>
                <a
                  href="https://www.instagram.com/_m.hassan_khan_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Instagram size={22} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side — Form */}
          <div className="bg-card p-8 rounded-xl shadow-sm border border-border">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Your Name..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello Hassan, I’d like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
