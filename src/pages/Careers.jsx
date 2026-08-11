import { Link } from "react-router-dom";
import { openBookDemo } from "../componants/home/BookDemoDialog";
import { motion } from "motion/react";
import Seo from "../componants/Seo"
import {
  ArrowRight,
  Briefcase,
  Compass,
  Hammer,
  Mail,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

export default function Careers() {
  return (
    <>
    <Seo
  title="Careers | Detection Forge"
  description="Join Detection Forge and help build the platform SOC teams use to validate detections and close SIEM coverage gaps."
  path="/careers"
/>
      <Hero />
      <CurrentStatus />
      <WhatWereDoingInstead />
      <WhatWellLookFor />
      <StayInTouch />
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
            Careers
          </div>
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            We're early. Hiring will follow{" "}
            <span className="text-teal">the product.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
            Detection Forge is currently focused on building with a small,
            deliberate team. We don't have open roles today, but we're happy to
            hear from people who care about detection engineering.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Current status ---------------- */
function CurrentStatus() {
  return (
    <section className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <SectionLabel icon={Compass}>Where we are today</SectionLabel>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              No open positions right now.
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
              We haven't prioritized hiring yet. Right now, our attention is on
              the product itself — talking to security teams, validating the
              core workflows, and making sure what we build actually earns a
              place in a detection program.
            </p>
            <p className="text-foreground">
              That means there's nothing to apply for at the moment, and we'd
              rather say that plainly than post roles we're not truly ready to
              fill.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- What we're doing instead ---------------- */
function WhatWereDoingInstead() {
  const points = [
    {
      icon: Hammer,
      title: "Building the core product",
      desc: "The current team is heads-down on detection validation, coverage visibility, and telemetry assurance.",
    },
    {
      icon: Users,
      title: "Working closely with early customers",
      desc: "Shaping the platform through direct feedback from the detection engineers and SOC teams using it today.",
    },
    {
      icon: Target,
      title: "Staying deliberately small",
      desc: "Hiring ahead of clear need tends to slow a young product down rather than speed it up. We'd rather grow into it.",
    },
  ];
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHead
          label="Right now"
          title="What we're focused on instead of hiring."
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-12 grid gap-4 md:grid-cols-3"
        >
          {points.map((p, i) => (
            <motion.article
              key={p.title}
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-xl border border-border bg-background p-6 transition-colors hover:border-teal/40"
            >
              <div className="absolute right-4 top-4 font-mono text-[10px] text-muted-foreground">
                0{i + 1}
              </div>
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-teal/30 bg-teal/10 text-teal">
                <p.icon className="h-4 w-4" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- What we'll look for, eventually ---------------- */
function WhatWellLookFor() {
  const areas = [
    "Detection engineering and threat detection",
    "Backend and platform engineering",
    "Security-focused product design",
    "Customer-facing technical roles",
  ];
  return (
    <section className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <SectionLabel icon={Sparkles}>Looking ahead</SectionLabel>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              When we do hire, here's roughly where we'll start.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-pretty text-muted-foreground">
              We don't have a timeline yet, and this isn't a job posting — just
              an honest sense of the areas we expect to grow into first.
            </p>
            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
              className="grid gap-px overflow-hidden rounded-xl border border-border bg-border"
            >
              {areas.map((a) => (
                <motion.li
                  key={a}
                  variants={{ hidden: { opacity: 0, x: -10 }, show: { opacity: 1, x: 0 } }}
                  transition={{ duration: 0.3 }}
                  className="bg-background p-4"
                >
                  <span className="text-sm text-foreground">{a}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stay in touch ---------------- */
function StayInTouch() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl border border-border bg-background p-8 md:p-14"
        >
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="relative grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
            <div>
              <SectionLabel icon={Mail}>Stay in touch</SectionLabel>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                Interested in Detection Forge down the line?
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                If you'd like to be among the first to know when we start
                hiring, send us a note. We won't add you to a mailing list or
                follow up unless there's something real to talk about.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <a
                href="mailto:careers@detectionforge.com"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-foreground px-5 text-sm font-medium text-background hover:opacity-90"
              >
                Email us <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Closing CTA ---------------- */
function ClosingCTA() {
  return (
    <section className="border-b border-border bg-surface/40">
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
            <SectionLabel icon={Briefcase}>In the meantime</SectionLabel>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-4xl">
              Curious what we're building?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Take a look at the platform, or talk to the team directly about
              what Detection Forge does today.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <button
                onClick={openBookDemo}
                className="inline-flex h-11 items-center gap-2 rounded-md bg-foreground px-5 text-sm font-medium text-background hover:opacity-90"
              >
                Book a demo <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                to="/company"
                className="inline-flex h-11 items-center rounded-md border border-border bg-background px-5 text-sm font-medium hover:bg-surface-elevated"
              >
                Learn about the company
              </Link>
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