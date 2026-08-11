import { Link } from "react-router-dom";
import { openBookDemo } from "../componants/home/BookDemoDialog";
import { motion } from "motion/react";
import { Seo } from "../components/Seo";
import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Eye,
  ShieldCheck,
  Building2,
  TerminalSquare,
  Users,
  Boxes,
  Briefcase,
  Compass,
  Target,
  FileCheck,
  Lightbulb,
} from "lucide-react";

export default function Company() {
  return (
    <>
    <Seo
  title="Company | Detection Forge"
  description="Learn about Detection Forge's mission to bring validation and assurance to detection engineering, and the team building the platform."
  path="/company"
/>
      <Hero />
      <WhyExist />
      <Beliefs />
      <WhatBuilding />
      <WhyNow />
      <WhoFor />
      <HowThink />
      <Direction />
      <ClosingCTA />
    </>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-60" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,color-mix(in_oklab,var(--teal)_18%,transparent),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            Company
          </div>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            Built around one belief: detections should be{" "}
            <span className="text-teal">provable.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
            Detection Forge exists to help security teams bring structure,
            confidence, and engineering discipline to detection operations. The
            company is focused on one core problem: organizations invest heavily
            in detections, SIEMs, and telemetry, but still struggle to prove what
            is working, what is missing, and what can be trusted.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={openBookDemo}
              className="inline-flex h-11 items-center gap-2 rounded-md bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Book a demo <ArrowRight className="h-4 w-4" />
            </button>
            <Link
              to="/"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-surface px-5 text-sm font-medium text-foreground transition-colors hover:bg-surface-elevated"
            >
              Explore the Platform
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Why we exist ---------------- */
function WhyExist() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <SectionLabel icon={Compass}>Why we exist</SectionLabel>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Most security teams are not short on tools. They are short on
              clarity.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="space-y-5 text-pretty text-muted-foreground"
          >
            <p>
              They have rules across multiple systems, uneven validation
              practices, telemetry gaps that weaken detections silently, and
              limited ways to show whether the detection program is improving in
              a measurable way. Detection Forge was created to address that gap.
            </p>
            <p>
              The company’s mission is to help teams move from scattered
              detection operations to a more structured, evidence-based, and
              operationally mature model.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Beliefs ---------------- */
function Beliefs() {
  const beliefs = [
    {
      icon: FileCheck,
      title: "Detections should be validated, not assumed",
      desc: "A rule in production is not proof it works. Validation should be continuous, evidence-based, and tied to real telemetry.",
    },
    {
      icon: BarChart3,
      title: "Coverage should be measurable, not nominal",
      desc: "Mapping a detection to a technique is not the same as proving it defends against that technique. Coverage needs depth, not just labels.",
    },
    {
      icon: Eye,
      title: "Telemetry dependencies should be visible, not hidden",
      desc: "Every detection relies on specific data sources. When those sources change, degrade, or disappear, the detection weakens — often without warning.",
    },
    {
      icon: ShieldCheck,
      title: "Detection workflows should be governed, not improvised",
      desc: "Authoring, review, deployment, tuning, and retirement should follow a repeatable process — not ad hoc decisions and tribal knowledge.",
    },
    {
      icon: Building2,
      title: "Security leaders should understand detection posture",
      desc: "CISOs and SOC managers need clear, defensible answers about what is covered, what is validated, and what is at risk — not fragmented reports.",
    },
  ];
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHead
          label="What we believe"
          title="Detection engineering deserves the same rigor as software engineering."
          sub="A detection should not be treated as a one-time query that disappears into production. It should be built, reviewed, validated, measured, tuned, governed, and improved over time."
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {beliefs.map((b, i) => (
            <motion.article
              key={b.title}
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-xl border border-border bg-background p-6 transition-colors hover:border-teal/40"
            >
              <div className="absolute right-4 top-4 font-mono text-[10px] text-muted-foreground">
                0{i + 1}
              </div>
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-teal/30 bg-teal/10 text-teal">
                <b.icon className="h-4 w-4" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- What we are building ---------------- */
function WhatBuilding() {
  const themes = [
    "Structured detection lifecycle workflows",
    "Validation against telemetry and emulation workflows",
    "ATT&CK and coverage visibility",
    "Telemetry and log-source assurance",
    "Identity-focused detection assurance",
    "Risk-aware prioritization",
    "Multi-environment operational coordination",
  ];
  return (
    <section className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHead
          label="What we are building"
          title="A control plane for detection assurance."
        />
        <div className="mt-10 grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-5 text-pretty text-muted-foreground"
          >
            <p>
              Detection Forge is building a platform that helps security teams
              manage the full operational reality of detection engineering.
            </p>
            <p className="text-foreground">
              The aim is not to replace the SIEM. It is to make the detection
              program around it more explainable, measurable, and trustworthy.
            </p>
          </motion.div>
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            className="grid gap-px overflow-hidden rounded-xl border border-border bg-border"
          >
            {themes.map((t) => (
              <motion.li
                key={t}
                variants={{ hidden: { opacity: 0, x: 14 }, show: { opacity: 1, x: 0 } }}
                transition={{ duration: 0.35 }}
                className="bg-background p-5"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                  <p className="text-sm text-foreground">{t}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why it matters now ---------------- */
function WhyNow() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <SectionLabel icon={Target}>Why it matters now</SectionLabel>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Detection programs are getting harder to trust.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="space-y-5 text-pretty text-muted-foreground"
          >
            <p>
              Security teams are expected to manage larger rule sets, more
              telemetry sources, more detection formats, more environments, and
              higher expectations from leadership — often without the
              operational systems needed to keep that program understandable and
              reliable.
            </p>
            <p>
              That makes detection maturity harder to maintain at the exact
              moment when it matters more.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Who we build for ---------------- */
function WhoFor() {
  const roles = [
    {
      icon: TerminalSquare,
      role: "Detection Engineers",
      value:
        "Need evidence, workflow, and control over rule quality and validation.",
    },
    {
      icon: Users,
      role: "SOC Managers",
      value:
        "Need a clearer view of what is covered, what is weak, and where the team should focus next.",
    },
    {
      icon: Boxes,
      role: "Security Architects",
      value:
        "Need to understand telemetry dependencies, visibility gaps, and how detection strategy maps to the environment.",
    },
    {
      icon: Building2,
      role: "CISOs",
      value:
        "Need to know whether the organization’s detection posture is trustworthy, improving, and aligned to business priorities.",
    },
  ];
  return (
    <section id="customers" className="scroll-mt-24 border-b border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHead
          label="Who we build for"
          title="Built for the teams responsible for detection outcomes."
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {roles.map((r) => (
            <motion.article
              key={r.role}
              variants={{ hidden: { opacity: 0, scale: 0.92 }, show: { opacity: 1, scale: 1 } }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="rounded-xl border border-border bg-background p-6"
            >
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-teal/30 bg-teal/10 text-teal">
                <r.icon className="h-4 w-4" />
              </div>
              <h3 className="mt-5 text-base font-semibold">{r.role}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.value}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- How we think ---------------- */
function HowThink() {
  const points = [
    "Teams already have SIEMs, logs, and detection content",
    "The missing layer is assurance, structure, and operational clarity",
    "Good detection programs are not defined by rule count alone",
    "Confidence comes from validation, evidence, governance, and measurable coverage",
    "Security buyers do not need more noise; they need better answers",
  ];
  return (
    <section id="press" className="scroll-mt-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <SectionLabel icon={Lightbulb}>How we think</SectionLabel>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              How we think about the market.
            </h2>
          </motion.div>
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
            className="grid gap-px overflow-hidden rounded-xl border border-border bg-border"
          >
            {points.map((p, i) => (
              <motion.li
                key={p}
                variants={{ hidden: { opacity: 0, x: 14 }, show: { opacity: 1, x: 0 } }}
                transition={{ duration: 0.35 }}
                className="bg-background p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 font-mono text-[10px] tracking-wider text-teal">
                    0{i + 1}
                  </div>
                  <p className="text-sm text-foreground">{p}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Company direction ---------------- */
function Direction() {
  const questions = [
    "What is covered?",
    "What is missing?",
    "What is validated?",
    "What is degrading?",
    "What depends on which telemetry?",
    "What should be fixed first?",
  ];
  return (
    <section id="careers" className="scroll-mt-24 border-b border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHead
          label="Company direction"
          title="The questions shaping the company."
          sub="Detection Forge is focused on helping organizations answer a simple but difficult set of questions:"
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {questions.map((q, i) => (
            <motion.div
              key={q}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex items-center gap-4 rounded-xl border border-border bg-background p-6"
            >
              <div className="font-mono text-xs tracking-wider text-teal">
                0{i + 1}
              </div>
              <div className="text-base font-semibold">{q}</div>
            </motion.div>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 max-w-2xl text-pretty text-muted-foreground"
        >
          That framing shapes the product, the workflow, and the company’s
          long-term direction.
        </motion.p>
      </div>
    </section>
  );
}

/* ---------------- Closing CTA ---------------- */
function ClosingCTA() {
  return (
    <section id="contact" className="scroll-mt-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl border border-border bg-surface px-8 py-16 md:px-16"
        >
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal to-transparent opacity-60" />
          <div className="relative mx-auto max-w-2xl md:text-center">
            <SectionLabel icon={Briefcase}>Get in touch</SectionLabel>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-4xl">
              Building for teams that need confidence, not assumptions.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Detection Forge is creating a more structured way to build,
              validate, govern, and improve detections at scale.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <button
                onClick={openBookDemo}
                className="inline-flex h-11 items-center gap-2 rounded-md bg-foreground px-5 text-sm font-medium text-background hover:opacity-90"
              >
                Book a demo <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="mailto:hello@detectionforge.com"
                className="inline-flex h-11 items-center rounded-md border border-border bg-background px-5 text-sm font-medium hover:bg-surface-elevated"
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- helpers ---------------- */
function SectionLabel({ icon: Icon, children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground">
      <Icon className="h-3 w-3 text-teal" />
      {children}
    </div>
  );
}

function SectionHead({ label, title, sub }) {
  return (
    <div className="max-w-2xl">
      <div className="font-mono text-xs uppercase tracking-wider text-teal">
        {label}
      </div>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {sub && <p className="mt-4 text-pretty text-muted-foreground">{sub}</p>}
    </div>
  );
}