import {
  ArrowRight,
  Library,
  PlayCircle,
  Target,
  Database,
  Fingerprint,
  GitBranch,
  Workflow,
  BarChart3,
  ShieldCheck,
  CheckCircle2,
  Layers,
  Activity,
  Boxes,
  Cog,
  Users,
  Building2,
  Briefcase,
  TerminalSquare,
} from "lucide-react";
import { openBookDemo } from "../../componants/home/BookDemoDialog";
import { motion } from "motion/react";
import Seo from "../Seo"
export function Platform() {
  return (
    <>
      <Hero />
      <ControlLayer />
      <WhatItDoes />
      <Modules />
      <HowItWorks />
      <WhyTeamsUse />
      <Differentiation />
      <Audience />
      <Integrations />
      <ClosingCTA />
    </>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
        <Seo
  title="Platform | Detection Forge"
  description="See how Detection Forge validates detection rules, tracks the detection lifecycle, and closes SIEM coverage gaps."
  path="/platform"
/>
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-60" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,color-mix(in_oklab,var(--teal)_18%,transparent),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              Detection assurance platform
            </div>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
              One platform to prove your detections{" "}
              <span className="text-teal">work.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
              Detection Forge gives security teams a structured system to build, validate, govern,
              and improve detections across the environments they already run. It brings detection
              lifecycle management, validation, coverage analysis, telemetry assurance, and risk
              visibility into one control plane.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={openBookDemo}
                className="inline-flex h-11 items-center gap-2 rounded-md bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Book a demo <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="#workflow"
                className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-surface px-5 text-sm font-medium text-foreground transition-colors hover:bg-surface-elevated"
              >
                Explore the workflow
              </a>
            </div>
            <p className="mt-8 max-w-xl text-sm text-muted-foreground">
              Built for teams that need to answer six questions with confidence:{" "}
              <span className="text-foreground">What is covered? What is missing? What is validated?
              What is degrading? What depends on which telemetry? What should be fixed first?</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <PlatformDiagram />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PlatformDiagram() {
  const top = [
    { icon: Library, label: "Detection Library" },
    { icon: PlayCircle, label: "Validation" },
    { icon: BarChart3, label: "Coverage" },
    { icon: Database, label: "Telemetry" },
  ];
  const bottom = [
    { icon: Fingerprint, label: "Identity" },
    { icon: GitBranch, label: "Lifecycle" },
    { icon: Workflow, label: "Multi-SIEM" },
    { icon: Activity, label: "Analytics" },
  ];
  return (
    <div className="relative">
      <div className="absolute -inset-x-6 -inset-y-6 -z-10 rounded-3xl bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,color-mix(in_oklab,var(--teal)_12%,transparent),transparent_70%)]" />
      <div className="rounded-2xl border border-border bg-surface/80 p-4 shadow-2xl shadow-black/40 backdrop-blur sm:p-5">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-teal/70" />
          </div>
          <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            control plane / overview
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {top.map((m) => (
            <DiagramCell key={m.label} icon={m.icon} label={m.label} />
          ))}
        </div>

        <div className="relative my-4 h-10">
          <div className="absolute inset-x-6 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-teal/50 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="rounded-md border border-teal/40 bg-teal/10 px-3 py-1 text-center font-mono text-[10px] uppercase tracking-wider text-teal">
              Detection Forge core
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {bottom.map((m) => (
            <DiagramCell key={m.label} icon={m.icon} label={m.label} />
          ))}
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2 border-t border-border pt-4">
          {["SIEM", "Cloud telemetry", "Identity"].map((s) => (
            <div
              key={s}
              className="flex min-h-[44px] items-center justify-center rounded-md border border-border bg-background px-2 py-2 text-center text-[10px] leading-tight text-muted-foreground sm:text-[11px]"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DiagramCell({ icon: Icon, label }) {
  return (
    <div className="flex min-h-[76px] flex-col items-start justify-between gap-2 rounded-lg border border-border bg-background p-3">
      <Icon className="h-4 w-4 shrink-0 text-teal" />
      <div className="text-[10px] font-medium leading-tight text-foreground sm:text-[11px]">
        {label}
      </div>
    </div>
  );
}

/* ---------------- Control Layer ---------------- */
function ControlLayer() {
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
            <SectionLabel icon={Layers}>Platform intro</SectionLabel>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              The control layer security teams are missing.
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
              Most security teams already have rules, logs, dashboards, and SIEM workflows. What
              they often lack is a system that shows whether detections are effective, current,
              validated, and aligned to business risk.
            </p>
            <p>
              Detection Forge sits on top of existing SIEM, telemetry, and detection workflows to
              provide the missing control layer:{" "}
              <span className="text-foreground">assurance, structure, and operational clarity.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- What it does ---------------- */
function WhatItDoes() {
  const items = [
    {
      icon: GitBranch,
      title: "Author and manage content",
      desc: "Create and maintain Sigma, correlation, and detection content in a structured inventory.",
    },
    {
      icon: Workflow,
      title: "Track full lifecycle",
      desc: "Move detections from draft to review, validation, deployment, tuning, and retirement.",
    },
    {
      icon: PlayCircle,
      title: "Validate against telemetry",
      desc: "Replay historical telemetry and adversary emulation workflows to prove the logic fires.",
    },
    {
      icon: Target,
      title: "Measure real coverage",
      desc: "Quantify ATT&CK, log-source, and business-critical area coverage — and the quality of it.",
    },
    {
      icon: Activity,
      title: "Surface drift and gaps",
      desc: "Detect unhealthy rules, telemetry loss, and drift before they become silent failures.",
    },
    {
      icon: ShieldCheck,
      title: "One source of truth",
      desc: "Review confidence, evidence, ownership, and change history in a single record.",
    },
  ];
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHead
          label="What the platform does"
          title="Connect the full detection workflow."
          sub="Detection Forge manages detections as part of a repeatable engineering system, not as isolated rules."
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((c, i) => (
            <motion.div
              key={c.title}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative bg-background p-6"
            >
              <div className="absolute right-4 top-4 font-mono text-[10px] text-muted-foreground">
                0{i + 1}
              </div>
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-teal/30 bg-teal/10 text-teal">
                <c.icon className="h-4 w-4" />
              </div>
              <h3 className="mt-4 text-sm font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Core modules ---------------- */
function Modules() {
  const modules = [
    {
      icon: Library,
      tag: "M01",
      slug: "detection-library",
      title: "Detection Library",
      desc: "A structured inventory of detections across Sigma, correlation, and related rule types.",
    },
    {
      icon: PlayCircle,
      tag: "M02",
      slug: "replay-validation",
      title: "Detection Validation",
      desc: "Replay historical telemetry against current detection logic to verify that rules still fire as expected.",
    },
    {
      icon: BarChart3,
      tag: "M03",
      slug: "coverage-efficacy",
      title: "Coverage Efficacy",
      desc: "Measure how much of the relevant threat surface is actually covered — and how well.",
    },
    {
      icon: Database,
      tag: "M04",
      slug: "log-source-assurance",
      title: "Log Source Assurance",
      desc: "Know which telemetry your detections depend on, what is healthy, and what is missing.",
    },
    {
      icon: Fingerprint,
      tag: "M05",
      slug: "identity-analytics",
      title: "Identity Analytics",
      desc: "Track assurance for identity-driven detections, not just alert counts.",
    },
    {
      icon: GitBranch,
      tag: "M06",
      slug: "detection-lifecycle",
      title: "Detection Lifecycle",
      desc: "Manage workflow from design and review to validation, deployment, tuning, and retirement.",
    },
    {
      icon: Workflow,
      tag: "M07",
      slug: "multi-siem-deployment",
      title: "Multi-SIEM Deployment",
      desc: "Operate across existing SIEM environments without replacing them.",
    },
    {
      icon: Activity,
      tag: "M08",
      slug: "detection-analytics",
      title: "Detection Analytics",
      desc: "Review confidence, performance, quality, drift, and operational health across the program.",
    },
  ];
  return (
    <section id="modules" className="scroll-mt-24 border-b border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHead
          label="Core platform modules"
          title="Eight modules. One detection control plane."
          sub="Each module owns a specific responsibility in the detection assurance workflow — and they share the same data model."
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {modules.map((m) => (
            <motion.article
              key={m.title}
              id={m.slug}
              variants={{ hidden: { opacity: 0, scale: 0.92 }, show: { opacity: 1, scale: 1 } }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group relative scroll-mt-24 overflow-hidden rounded-xl border border-border bg-background p-6 transition-colors hover:border-teal/40"
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-teal/30 bg-teal/10 text-teal">
                  <m.icon className="h-4 w-4" />
                </div>
                <div className="font-mono text-[10px] tracking-wider text-muted-foreground">
                  {m.tag}
                </div>
              </div>
              <h3 className="mt-5 text-base font-semibold">{m.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- How it works ---------------- */
function HowItWorks() {
  const steps = [
    {
      t: "Build",
      d: "Create or import detections and map them to ATT&CK, telemetry, owners, and business context.",
    },
    {
      t: "Validate",
      d: "Run replay validation and assurance workflows to prove the logic works on real or representative telemetry.",
    },
    {
      t: "Measure",
      d: "Review coverage efficacy, telemetry health, validation status, and confidence signals.",
    },
    {
      t: "Govern",
      d: "Track versions, approvals, lifecycle states, change history, and ownership.",
    },
    {
      t: "Improve",
      d: "Use validation evidence, drift signals, and gap analysis to tune detections over time.",
    },
  ];
  return (
    <section id="workflow" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHead
          label="How it works"
          title="How the platform works."
          sub="A continuous loop, instrumented end-to-end — not a one-time deployment."
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-5"
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.t}
              variants={{ hidden: { opacity: 0, x: -14 }, show: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative bg-background p-6"
            >
              <div className="font-mono text-[10px] tracking-wider text-muted-foreground">
                STEP 0{i + 1}
              </div>
              <div className="mt-3 text-base font-semibold">{s.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              {i < steps.length - 1 && (
                <ArrowRight className="absolute -right-2 top-1/2 hidden h-3 w-3 -translate-y-1/2 text-border lg:block" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Why teams use it ---------------- */
function WhyTeamsUse() {
  const reasons = [
    "Reduce blind spots caused by unvalidated detections",
    "Identify weak, missing, or degraded telemetry",
    "Understand what coverage actually exists — not what's claimed",
    "Connect detection quality to business risk",
    "Introduce engineering discipline without replacing the SIEM",
  ];
  return (
    <section className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <SectionLabel icon={Cog}>Why teams use it</SectionLabel>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Because detections are not a one-time build problem.
            </h2>
            <p className="mt-5 text-pretty text-muted-foreground">
              They are a continuous assurance problem. Security teams adopt Detection Forge when
              point-in-time rule writing stops keeping up with the environment around it.
            </p>
          </motion.div>
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
            className="grid gap-px overflow-hidden rounded-xl border border-border bg-border"
          >
            {reasons.map((r) => (
              <motion.li
                key={r}
                variants={{ hidden: { opacity: 0, x: 14 }, show: { opacity: 1, x: 0 } }}
                transition={{ duration: 0.35 }}
                className="bg-background p-5"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
                  <p className="text-sm text-foreground">{r}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Differentiation ---------------- */
function Differentiation() {
  const points = [
    { t: "Validation evidence", d: "Every detection carries proof it fires on representative telemetry." },
    { t: "Confidence and trust signals", d: "Quality, performance, and freshness scoring per detection." },
    { t: "Lifecycle governance", d: "Versions, approvals, ownership, and change history as a system of record." },
    { t: "Telemetry dependency visibility", d: "Map the log sources every detection actually relies on." },
    { t: "Coverage quality and operational readiness", d: "Beyond technique counts — how well the surface is actually defended." },
  ];
  return (
    <section id="risk-based-detections" className="scroll-mt-24 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHead
          label="Differentiation"
          title="Built for detection assurance, not just rule management."
          sub="Many tools can store detections, run queries, or visualize alerts. Detection Forge is designed to answer a different operational question: Can your team prove that your detections are working, current, and meaningful?"
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5"
        >
          {points.map((p, i) => (
            <motion.div
              key={p.t}
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex h-full flex-col rounded-xl border border-border bg-surface p-5"
            >
              <div className="font-mono text-[10px] tracking-wider text-teal">0{i + 1}</div>
              <h3 className="mt-3 text-sm font-semibold">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Audience ---------------- */
function Audience() {
  const roles = [
    {
      icon: TerminalSquare,
      role: "Detection Engineers",
      value:
        "A real engineering environment for authoring, validating, and tuning detections — with evidence, not guesswork.",
    },
    {
      icon: Users,
      role: "SOC Managers",
      value:
        "Operational visibility into detection health, coverage, and ownership — across teams and SIEMs.",
    },
    {
      icon: Boxes,
      role: "Security Architects",
      value:
        "A control plane that maps detections to telemetry, identity, and risk — so design decisions hold up over time.",
    },
    {
      icon: Building2,
      role: "CISOs",
      value:
        "A defensible answer to 'are we covered?' tied to business risk and program maturity, not rule counts.",
    },
  ];
  return (
    <section className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHead
          label="Audience"
          title="Built for the teams that own detection outcomes."
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
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
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

/* ---------------- Integrations ---------------- */
function Integrations() {
  const groups = [
    { title: "SIEM platforms", items: ["Splunk", "Microsoft Sentinel", "Elastic", "Chronicle", "QRadar"] },
    { title: "Cloud telemetry", items: ["AWS CloudTrail", "Azure Activity", "GCP Audit", "VPC / Flow logs"] },
    { title: "Endpoint data", items: ["CrowdStrike", "SentinelOne", "Defender for Endpoint", "Carbon Black"] },
    { title: "Identity systems", items: ["Entra ID", "Okta", "Active Directory", "Ping"] },
    { title: "Detection content", items: ["Sigma HQ", "Internal rule repos", "Vendor content packs"] },
    { title: "CI/CD workflows", items: ["GitHub", "GitLab", "Bitbucket", "Jenkins"] },
    { title: "ATT&CK programs", items: ["MITRE ATT&CK", "Technique heatmaps", "Coverage diffs"] },
    { title: "Adversary emulation", items: ["Atomic Red Team", "Caldera", "Custom replay datasets"] },
  ];
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHead
          label="Integrations"
          title="Fits into the environment you already run."
          sub="Detection Forge is designed to sit above the tools you already use. It adds coordination, validation, governance, and assurance — not another SIEM to manage."
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {groups.map((g) => (
            <motion.div
              key={g.title}
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
              transition={{ duration: 0.4 }}
              className="rounded-xl border border-border bg-surface p-5"
            >
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{g.title}</div>
              <ul className="mt-3 space-y-2">
                {g.items.map((i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="h-1 w-1 rounded-full bg-teal" />
                    {i}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Closing CTA ---------------- */
function ClosingCTA() {
  return (
    <section className="border-b border-border">
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
            <SectionLabel icon={Briefcase}>See Detection Forge</SectionLabel>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-4xl">
              Bring structure and assurance to detection engineering.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Detection Forge helps teams move from "we have detections" to "we know what works,
              what is missing, and what to improve next."
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <button
                onClick={openBookDemo}
                className="inline-flex h-11 items-center gap-2 rounded-md bg-foreground px-5 text-sm font-medium text-background hover:opacity-90"
              >
                Book a demo <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="#modules"
                className="inline-flex h-11 items-center rounded-md border border-border bg-background px-5 text-sm font-medium hover:bg-surface-elevated"
              >
                See the platform in action
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
      <div className="font-mono text-xs uppercase tracking-wider text-teal">{label}</div>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {sub && <p className="mt-4 text-pretty text-muted-foreground">{sub}</p>}
    </div>
  );
}