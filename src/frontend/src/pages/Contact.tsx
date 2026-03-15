import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@/hooks/useActor";
import {
  CheckCircle2,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import type { Easing } from "motion/react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const ease: Easing = "easeOut";

const fadeUpView = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6, ease },
};

const contactInfo = [
  {
    icon: MapPin,
    label: "Office Address",
    value: "Office Address, City, State, Country",
    href: undefined as string | undefined,
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@dsksustainabilitytech.com",
    href: "mailto:info@dsksustainabilitytech.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 XXXXX XXXXX",
    href: "tel:+91XXXXXXXXXX",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/company/dsk-sustainability-tech",
    href: "https://linkedin.com/company/dsk-sustainability-tech",
  },
];

export default function Contact() {
  const { actor } = useActor();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    document.title = "Contact Us — DSK Sustainability Tech LLP";
    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute(
        "content",
        "Get in touch with DSK Sustainability Tech LLP. We'd love to hear from you.",
      );
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) {
      toast.error("Connection not ready. Please try again.");
      return;
    }
    setSubmitting(true);
    try {
      await actor.submitContactForm(
        form.name,
        form.email,
        form.phone,
        form.message,
      );
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", message: "" });
      toast.success("Message sent successfully!");
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section
        className="relative pt-32 pb-20 text-white"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.22 0.065 253) 0%, oklch(0.30 0.06 253) 100%)",
        }}
      >
        <div className="absolute inset-0 hero-pattern" aria-hidden="true" />
        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-5"
              style={{
                background: "oklch(0.45 0.13 145 / 0.2)",
                color: "oklch(0.75 0.14 145)",
              }}
            >
              Get In Touch
            </span>
            <h1 className="font-display font-800 text-4xl md:text-5xl mb-4">
              Contact Us
            </h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Have a project in mind? Let&apos;s discuss how we can help your
              organization.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg
            viewBox="0 0 1440 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M0 40H1440V10C1200 35 800 0 400 20C200 30 80 8 0 20V40Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div {...fadeUpView}>
              <h2 className="font-display font-700 text-deep-blue text-2xl md:text-3xl mb-6">
                Send Us a Message
              </h2>

              {success && (
                <div
                  data-ocid="contact.success_state"
                  className="flex items-start gap-3 bg-brand-green/10 border border-brand-green/30 rounded-xl p-5 mb-6"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-green mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-brand-green text-sm">
                      Message sent successfully!
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label
                    htmlFor="contact-name"
                    className="text-deep-blue font-medium mb-1.5 block"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="contact-name"
                    name="name"
                    data-ocid="contact.name.input"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="h-11"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="contact-email"
                    className="text-deep-blue font-medium mb-1.5 block"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    data-ocid="contact.email.input"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="h-11"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="contact-phone"
                    className="text-deep-blue font-medium mb-1.5 block"
                  >
                    Phone Number
                  </Label>
                  <Input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    data-ocid="contact.phone.input"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="h-11"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="contact-message"
                    className="text-deep-blue font-medium mb-1.5 block"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    data-ocid="contact.message.textarea"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry..."
                    required
                    rows={5}
                    className="resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  data-ocid="contact.submit_button"
                  disabled={submitting}
                  className="w-full bg-brand-green hover:bg-brand-green-light text-white font-semibold h-11 rounded-lg"
                >
                  {submitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" /> Send Message
                    </span>
                  )}
                </Button>
              </form>
            </motion.div>

            <motion.div
              {...fadeUpView}
              transition={{ duration: 0.6, delay: 0.15, ease }}
              className="space-y-5"
            >
              <h2 className="font-display font-700 text-deep-blue text-2xl md:text-3xl mb-6">
                Contact Information
              </h2>
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-start gap-4 p-5 bg-section-grey rounded-xl border border-border"
                >
                  <div className="w-10 h-10 rounded-xl bg-deep-blue flex items-center justify-center shrink-0">
                    <info.icon className="w-5 h-5 text-brand-green-light" />
                  </div>
                  <div>
                    <p className="font-semibold text-deep-blue text-sm">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground text-sm hover:text-brand-green transition-colors mt-0.5 block"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-sm mt-0.5">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div {...fadeUpView}>
            <div
              className="rounded-2xl overflow-hidden shadow-card border border-border"
              data-ocid="contact.map_marker"
            >
              <iframe
                title="DSK Sustainability Tech LLP Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835!2d144.9537!3d-37.8136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ4JzQ5LjAiUyAxNDTCsDU3JzEzLjMiRQ!5e0!3m2!1sen!2sau!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
