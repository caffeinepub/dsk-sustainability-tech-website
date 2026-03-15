import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  Lightbulb,
  Search,
  Target,
  TrendingUp,
  Users,
  Wrench,
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

const missionPoints = [
  "Deliver intelligent technology solutions that simplify business operations.",
  "Use knowledge-driven frameworks to solve real business problems.",
  "Enable organizations to become more efficient and sustainable.",
  "Promote innovation through strong architecture and design thinking.",
];

const workingSteps = [
  {
    num: 1,
    label: "Understand the Problem",
    icon: Search,
    desc: "Deep-dive analysis of your business challenges and operational gaps.",
    bgColor: "oklch(0.96 0.025 225)",
    iconBg: "oklch(0.90 0.04 225)",
  },
  {
    num: 2,
    label: "Design the Solution",
    icon: Lightbulb,
    desc: "Craft tailored, scalable architecture with practical implementation plans.",
    bgColor: "oklch(0.96 0.025 240)",
    iconBg: "oklch(0.90 0.04 240)",
  },
  {
    num: 3,
    label: "Build Sustainable Systems",
    icon: Wrench,
    desc: "Develop robust, maintainable technology that grows with your business.",
    bgColor: "oklch(0.95 0.03 253)",
    iconBg: "oklch(0.88 0.05 253)",
  },
  {
    num: 4,
    label: "Enable Continuous Improvement",
    icon: TrendingUp,
    desc: "Establish feedback loops and monitoring for long-term optimization.",
    bgColor: "oklch(0.96 0.02 235)",
    iconBg: "oklch(0.90 0.035 235)",
  },
];

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "DSK Sustainability Tech LLP — Sustainable by Design";
    const meta = document.querySelector("meta[name='description']");
    if (meta) {
      meta.setAttribute(
        "content",
        "DSK Sustainability Tech LLP delivers intelligent technology solutions helping organizations operate efficiently, sustainably, and intelligently.",
      );
    }
  }, []);

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.20 0.07 253) 0%, oklch(0.28 0.065 253) 60%, oklch(0.26 0.09 230) 100%)",
        }}
      >
        <div className="absolute inset-0 hero-pattern" aria-hidden="true" />
        <div
          className="absolute top-1/4 right-10 w-64 h-64 rounded-full opacity-5"
          style={{ background: "oklch(0.45 0.13 145)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full opacity-5"
          style={{ background: "oklch(0.6 0.12 145)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 container mx-auto px-4 md:px-8 text-center py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
              style={{
                background: "oklch(0.45 0.13 145 / 0.2)",
                color: "oklch(0.75 0.14 145)",
              }}
            >
              Technology · Sustainability · Knowledge
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="font-display font-800 text-white text-4xl md:text-6xl lg:text-7xl leading-tight mb-4"
          >
            DSK Sustainability
            <br />
            <span style={{ color: "oklch(0.72 0.14 145)" }}>Tech LLP</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="text-xl md:text-2xl font-medium mb-6"
            style={{ color: "oklch(0.72 0.14 145)" }}
          >
            Sustainable by Design, Knowledge by Core
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We design intelligent technology solutions that help organizations
            operate efficiently, sustainably, and intelligently. Our approach
            blends deep knowledge, innovative thinking, and practical technology
            implementation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              data-ocid="hero.services.primary_button"
              size="lg"
              onClick={() => navigate({ to: "/services" })}
              className="bg-brand-green hover:bg-brand-green-light text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-200"
            >
              Explore Our Services <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              data-ocid="hero.contact.secondary_button"
              size="lg"
              variant="outline"
              onClick={() => navigate({ to: "/contact" })}
              className="border-white/40 text-white bg-white/10 hover:bg-white/20 hover:border-white/60 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              Contact Us
            </Button>
          </motion.div>
        </div>

        {/* Wave transition into light blue section */}
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M0 60H1440V20C1200 50 800 0 400 30C200 45 80 15 0 30V60Z"
              fill="oklch(97% 0.015 230)"
            />
          </svg>
        </div>
      </section>

      {/* Who We Are — light steel blue */}
      <section
        className="py-20 md:py-28"
        style={{ background: "oklch(0.97 0.015 230)" }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUpView}>
              <span className="text-brand-green font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="font-display font-700 text-deep-blue text-3xl md:text-4xl mt-2 mb-6">
                Who We Are
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                DSK Sustainability Tech LLP is a technology-driven organization
                focused on delivering practical and scalable digital solutions
                to modern businesses. We believe technology should simplify
                operations, enhance decision-making, and enable sustainable
                growth.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                Our team combines industry knowledge, technical expertise, and
                business understanding to design solutions that truly solve
                real-world problems. We work with organizations to transform
                ideas into reliable systems that improve productivity,
                transparency, and operational efficiency.
              </p>
            </motion.div>

            <motion.div
              {...fadeUpView}
              transition={{ duration: 0.6, delay: 0.15, ease }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-72 h-72 rounded-3xl bg-deep-blue flex items-center justify-center shadow-card-hover">
                  <div className="grid grid-cols-2 gap-6 p-8">
                    {(
                      [
                        { Icon: Users, name: "users" },
                        { Icon: Target, name: "target" },
                        { Icon: Eye, name: "eye" },
                        { Icon: Lightbulb, name: "lightbulb" },
                      ] as const
                    ).map(({ Icon, name }) => (
                      <div
                        key={name}
                        className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center"
                      >
                        <Icon className="w-9 h-9 text-brand-green-light" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-brand-green flex items-center justify-center shadow-card">
                  <span className="font-display font-800 text-white text-3xl">
                    DSK
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission — soft mid-blue */}
      <section
        className="py-20 md:py-28"
        style={{ background: "oklch(0.95 0.02 245)" }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <motion.div {...fadeUpView} className="text-center mb-14">
            <span className="text-brand-green font-semibold text-sm uppercase tracking-wider">
              Our Purpose
            </span>
            <h2 className="font-display font-700 text-deep-blue text-3xl md:text-4xl mt-2">
              Vision &amp; Mission
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              {...fadeUpView}
              className="rounded-2xl p-8 shadow-card border border-white/60 bg-white/70"
              style={{ borderLeft: "4px solid oklch(var(--green))" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-brand-green" />
                </div>
                <h3 className="font-display font-700 text-deep-blue text-xl">
                  Our Vision
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To build sustainable technology solutions that empower
                businesses and create long-term value through innovation and
                knowledge.
              </p>
            </motion.div>

            <motion.div
              {...fadeUpView}
              transition={{ duration: 0.6, delay: 0.15, ease }}
              className="rounded-2xl p-8 shadow-card border border-white/60 bg-white/70"
              style={{ borderLeft: "4px solid oklch(var(--deep-blue))" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-deep-blue" />
                </div>
                <h3 className="font-display font-700 text-deep-blue text-xl">
                  Our Mission
                </h3>
              </div>
              <ul className="space-y-3">
                {missionPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-green mt-1 shrink-0" />
                    <span className="text-muted-foreground text-sm leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DSK Working Model — near-white cool blue */}
      <section
        className="py-20 md:py-28"
        style={{ background: "oklch(0.98 0.008 250)" }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <motion.div {...fadeUpView} className="text-center mb-16">
            <span className="text-brand-green font-semibold text-sm uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="font-display font-700 text-deep-blue text-3xl md:text-4xl mt-2">
              DSK Working Model
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              A proven four-step approach that ensures every solution we build
              is effective, sustainable, and future-ready.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workingSteps.map((step, i) => (
              <motion.div
                key={step.num}
                {...fadeUpView}
                transition={{ duration: 0.6, delay: i * 0.12, ease }}
                className="relative rounded-2xl p-6 shadow-card text-center group hover:shadow-card-hover transition-shadow duration-300"
                style={{ background: step.bgColor }}
              >
                {i < workingSteps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-10 -right-3 z-10"
                    aria-hidden="true"
                  >
                    <ArrowRight className="w-5 h-5 text-brand-green" />
                  </div>
                )}
                <div className="w-12 h-12 rounded-full bg-deep-blue flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span className="font-display font-800 text-white text-lg">
                    {step.num}
                  </span>
                </div>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ background: step.iconBg }}
                >
                  <step.icon className="w-5 h-5 text-deep-blue" />
                </div>
                <h3 className="font-display font-700 text-deep-blue text-base mb-2">
                  {step.label}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
