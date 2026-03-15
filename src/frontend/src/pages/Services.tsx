import {
  Briefcase,
  Code2,
  FlaskConical,
  GraduationCap,
  Layers,
  Lightbulb,
  Monitor,
  Target,
} from "lucide-react";
import type { Easing } from "motion/react";
import { motion } from "motion/react";
import { useEffect } from "react";

const ease: Easing = "easeOut";

const fadeUpView = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6, ease },
};

// Card background colors — professional blue tones
const serviceCardBgs = [
  { bg: "oklch(0.97 0.02 225)", border: "oklch(0.90 0.04 225)" }, // light steel blue
  { bg: "oklch(0.96 0.025 240)", border: "oklch(0.89 0.04 240)" }, // light blue
  { bg: "oklch(0.97 0.018 253)", border: "oklch(0.90 0.035 253)" }, // light indigo-blue
  { bg: "oklch(0.96 0.02 235)", border: "oklch(0.89 0.04 235)" }, // light cornflower
];

const services = [
  {
    icon: Code2,
    title: "Software Development",
    desc: "DSK Sustainability Tech LLP develops customized software solutions designed specifically for organizational needs. Our approach focuses on reliability, scalability, and usability, ensuring systems deliver real operational value. We build enterprise-grade applications, platforms, and internal business tools that help organizations streamline processes, manage data effectively, and improve decision-making.",
  },
  {
    icon: Monitor,
    title: "IT Consulting",
    desc: "Our IT consulting services help businesses understand how technology can improve their operations. We assess current systems, identify gaps, and recommend practical solutions that align with business goals. Our consulting focuses on efficiency, long-term scalability, and sustainable technology adoption.",
  },
  {
    icon: Briefcase,
    title: "Business Consulting",
    desc: "Technology alone cannot transform organizations. Business strategy must align with digital implementation. DSK provides business consulting services that help organizations redesign processes, improve workflows, and adopt modern operational models supported by technology.",
  },
  {
    icon: GraduationCap,
    title: "Training",
    desc: "Knowledge is the core of sustainable growth. Our training programs focus on building industry-relevant knowledge in technology, business systems, and emerging digital practices. We provide training for professionals, students, and organizations looking to build strong practical skills.",
  },
];

const innovations = [
  {
    icon: Lightbulb,
    title: "Product Design",
    desc: "Designing innovative digital products that solve real business challenges through intuitive systems and practical architecture.",
  },
  {
    icon: Layers,
    title: "Solution Architecture",
    desc: "Building strong technical architectures that ensure scalability, security, and long-term sustainability.",
  },
  {
    icon: Target,
    title: "Problem Solving",
    desc: "Applying analytical thinking and technology expertise to address complex operational challenges.",
  },
  {
    icon: FlaskConical,
    title: "Research",
    desc: "Continuous exploration of new technologies, tools, and methods to improve solution quality and efficiency.",
  },
];

export default function Services() {
  useEffect(() => {
    document.title = "Our Services — DSK Sustainability Tech LLP";
    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute(
        "content",
        "Software Development, IT Consulting, Business Consulting, and Training services from DSK Sustainability Tech LLP.",
      );
    }
  }, []);

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 text-white"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.20 0.07 253) 0%, oklch(0.28 0.065 253) 100%)",
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
              What We Offer
            </span>
            <h1 className="font-display font-800 text-4xl md:text-5xl mb-4">
              Our Services
            </h1>
            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Practical, scalable solutions crafted to transform how your
              organization works.
            </p>
          </motion.div>
        </div>
        {/* Wave transition into light blue section */}
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg
            viewBox="0 0 1440 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M0 40H1440V10C1200 35 800 0 400 20C200 30 80 8 0 20V40Z"
              fill="oklch(97% 0.02 225)"
            />
          </svg>
        </div>
      </section>

      {/* What We Do — light blue section with blue-toned cards */}
      <section
        className="py-16 md:py-24"
        style={{ background: "oklch(0.97 0.02 225)" }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <motion.div {...fadeUpView} className="text-center mb-14">
            <span className="text-brand-green font-semibold text-sm uppercase tracking-wider">
              Core Offerings
            </span>
            <h2 className="font-display font-700 text-deep-blue text-3xl md:text-4xl mt-2">
              What We Do
            </h2>
          </motion.div>

          <div className="space-y-8">
            {services.map((service, i) => {
              const cardStyle = serviceCardBgs[i % serviceCardBgs.length];
              return (
                <motion.div
                  key={service.title}
                  data-ocid={`services.item.${i + 1}`}
                  {...fadeUpView}
                  transition={{ duration: 0.6, delay: i * 0.1, ease }}
                  className="rounded-2xl p-8 shadow-card flex flex-col md:flex-row gap-6 items-start"
                  style={{
                    background: cardStyle.bg,
                    border: `1px solid ${cardStyle.border}`,
                  }}
                >
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-deep-blue flex items-center justify-center shadow-sm">
                      <service.icon className="w-7 h-7 text-brand-green-light" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display font-700 text-deep-blue text-xl mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Innovations — deep navy blue section */}
      <section
        id="innovations"
        className="py-20 md:py-28"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.22 0.07 253) 0%, oklch(0.28 0.06 235) 100%)",
        }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <motion.div {...fadeUpView} className="text-center mb-14">
            <span
              className="font-semibold text-sm uppercase tracking-wider"
              style={{ color: "oklch(0.75 0.14 145)" }}
            >
              Innovation Areas
            </span>
            <h2
              className="font-display font-700 text-3xl md:text-4xl mt-2"
              style={{ color: "oklch(0.97 0.01 253)" }}
            >
              Innovations
            </h2>
            <p
              className="mt-3 max-w-xl mx-auto"
              style={{ color: "oklch(0.80 0.025 240)" }}
            >
              We continuously explore and apply cutting-edge approaches to build
              solutions that stand the test of time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {innovations.map((item, i) => (
              <motion.div
                key={item.title}
                data-ocid={`innovations.item.${i + 1}`}
                {...fadeUpView}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                className="rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 group"
                style={{
                  background: "oklch(1 0 0 / 0.06)",
                  border: "1px solid oklch(1 0 0 / 0.12)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: "oklch(0.75 0.14 145 / 0.25)" }}
                >
                  <item.icon
                    className="w-6 h-6"
                    style={{ color: "oklch(0.82 0.14 145)" }}
                  />
                </div>
                <h3
                  className="font-display font-700 text-lg mb-3"
                  style={{ color: "oklch(0.97 0.01 253)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "oklch(0.78 0.025 240)" }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
