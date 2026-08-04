import {
  AlertCircle,
  Layers,
  PlayCircle,
  Target,
  GitBranch,
  Database,
  Fingerprint,
  Activity,
  ShieldCheck,
  Search,
  Workflow,
  BarChart3,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { openBookDemo } from "./BookDemoDialog";
import { UseCasePanel } from "./UseCasePanel";
import { motion } from "motion/react";

import {
  Shield,
  Users,
  Settings,
  ClipboardCheck,
  TrendingUp,
} from "lucide-react";

import { Check } from "lucide-react";
import { useState } from "react";

/* ---------------- Problem ---------------- */
export function Problem() {
  const pains = [
    "Detections ship without measurable validation",
    "Coverage gaps go unnoticed across log sources",
    "Tuning happens in tickets, not in a system of record",
    "Identity-driven attacks slip past static rules",
    "Leaders can't answer: are we actually covered?",
    "Detection work isn't aligned to business risk",
  ];
  return (
    <section className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <SectionLabel icon={AlertCircle}>The problem</SectionLabel>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              You've invested millions in SIEMs. You still can't prove your detections work.
            </h2>
            <p className="mt-5 text-pretty text-muted-foreground">
              Detection engineering is the highest-leverage function in the SOC — and the least
              instrumented. Teams ship rules, hope they fire, and learn about gaps from incidents
              rather than from validation.
            </p>
          </motion.div>
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
            className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2"
          >
            {pains.map((p) => (
              <motion.li
                key={p}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
                className="bg-background p-5"
              >
                <div className="flex items-start gap-2.5">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-danger" />
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

/* ---------------- Pillars ---------------- */
export function Pillars() {
  const pillars = [
    {
      icon: Target,
      title: "Risk-Based Detections",
      desc: "Prioritize detections by business risk, adversary behavior, and exposure context — not just rule count.",
    },
    {
      icon: BarChart3,
      title: "Coverage Efficacy",
      desc: "Quantify whether the right logs, detections, and ATT&CK mappings exist across your environment.",
    },
    {
      icon: Fingerprint,
      title: "Identity Threat Analytics",
      desc: "Strengthen detection of suspicious access, privilege misuse, and lateral movement across identities.",
    },
    {
      icon: PlayCircle,
      title: "Detection Validation",
      desc: "Continuously replay, review, tune, and measure detection quality with structured workflows.",
    },
  ];
  return (
    <section id="platform" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHead
          label="Platform pillars"
          title="Four pillars of modern detection engineering."
          sub="Detection Forge organizes the work that matters into a single engineering surface."
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {pillars.map((p, i) => (
            <motion.article
              key={p.title}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                show: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-xl border border-border bg-surface p-6 transition-colors hover:bg-surface-elevated"
            >
              <div className="absolute right-4 top-4 font-mono text-[10px] text-muted-foreground">
                0{i + 1}
              </div>
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-teal/30 bg-teal/10 text-teal">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Capabilities ---------------- */
export function Capabilities() {
  const caps = [
    { icon: GitBranch, title: "Detection Lifecycle Management", desc: "Author, version, review, approve, and retire — every rule in one workflow." },
    { icon: Layers, title: "Sigma · IOA · Correlation", desc: "Native support for Sigma, IOA, and correlation logic with portable formats." },
    { icon: PlayCircle, title: "Replay Validation", desc: "Test rules against historical SIEM data without copying raw logs out." },
    { icon: Target, title: "MITRE ATT&CK Mapping", desc: "Technique-level mapping with heatmaps and coverage diffs over time." },
    { icon: CheckCircle2, title: "Versioning & Approvals", desc: "Git-like history, change reviews, and approval gates for every rule." },
    { icon: BarChart3, title: "Coverage Efficacy", desc: "Quantify gaps across detections, log sources, and risk surfaces." },
    { icon: Database, title: "Log-Source Coverage", desc: "Validate that the right log types are actually flowing — by source and tenant." },
    { icon: Fingerprint, title: "Identity Threat Analytics", desc: "Behavioral context for users, sessions, and privilege paths." },
    { icon: Activity, title: "Tuning & Quality Metrics", desc: "Track FP rates, noise, drift, and rule health as engineering KPIs." },
    { icon: Search, title: "Forensic Investigation Support", desc: "Pivot from a detection into log evidence when deeper analysis is required." },
    { icon: ShieldCheck, title: "Risk-Based Detections", desc: "Score and order detections by business risk and adversary impact." },
    { icon: Workflow, title: "Multi-SIEM Architecture", desc: "Works alongside Splunk, Sentinel, Elastic, Chronicle, QRadar and more." },
  ];
  return (
    <section id="capabilities" className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHead
          label="Capabilities"
          title="The detection engineering toolchain, unified."
          sub="Everything detection teams need to operate as a real engineering function."
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.05 } },
          }}
          className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3"
        >
          {caps.map((c) => (
            <motion.div
              key={c.title}
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1 },
              }}
              transition={{ duration: 0.4 }}
              className="bg-background p-6"
            >
              <div className="flex items-center gap-2.5 text-foreground">
                <c.icon className="h-4 w-4 text-teal" />
                <h3 className="text-sm font-semibold">{c.title}</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- How it works ---------------- */
export function HowItWorks() {
  const steps = [
    { t: "Author or import", d: "Write Sigma, IOA, or correlation rules — or import existing content from your SIEM." },
    { t: "Map", d: "Attach ATT&CK techniques, identity context, log sources, and risk." },
    { t: "Validate", d: "Replay against historical SIEM data without moving raw logs." },
    { t: "Review", d: "Inspect matches, missed anomalies, false positives, and coverage." },
    { t: "Measure", d: "Quantify coverage efficacy and risk alignment over time." },
    { t: "Approve", d: "Promote validated detections through approval workflows." },
    { t: "Investigate", d: "Pivot to log evidence for deeper forensic analysis when needed." },
  ];
  return (
    <section id="how" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHead
          label="How it works"
          title="A repeatable detection lifecycle, end to end."
          sub="Detection Forge mirrors the engineering workflow your team should already have — and instruments it."
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-7"
        >
          {steps.map((s, i) => (
            <motion.div
              key={s.t}
              variants={{
                hidden: { opacity: 0, x: -16 },
                show: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative bg-background p-5"
            >
              <div className="font-mono text-[10px] text-muted-foreground">STEP 0{i + 1}</div>
              <div className="mt-2 text-sm font-semibold">{s.t}</div>
              <p className="mt-1.5 text-xs text-muted-foreground">{s.d}</p>
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

/* ---------------- Why ---------------- */
export function Why() {
  const reasons = [
    { t: "Purpose-built for detection engineering", d: "Not a SIEM, not a SOAR — the missing engineering layer between content and operations." },
    { t: "Works with your SIEM, not against it", d: "Sits alongside your stack. Your data stays where it lives." },
    { t: "Replay without log movement", d: "Validate against historical logs in-place. No costly re-ingestion or copies." },
    { t: "Identity-aware by design", d: "Detection logic that understands users, sessions, and privilege paths." },
    { t: "Coverage you can defend to the board", d: "Quantified efficacy across log sources, techniques, and risk surfaces." },
    { t: "Engineering discipline, not ticket sprawl", d: "Versioning, approvals, and quality metrics — built in." },
  ];
  return (
    <section className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHead
          label="Why Detection Forge"
          title="Built for the teams who own detection outcomes."
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {reasons.map((r) => (
            <motion.div
              key={r.t}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="rounded-xl border border-border bg-background p-6"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal" />
                <div>
                  <h3 className="text-sm font-semibold">{r.t}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{r.d}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Use cases ---------------- */
export function UseCases() {
  const [openPanel, setOpenPanel] = useState(false);
  const [selectedUseCase, setSelectedUseCase] = useState(null);
  const cases = [
    {
      icon: Shield,
      title: "Detection engineering program management",
      why: "Teams struggle to manage and validate detection rules across SIEMs, cloud, and endpoint environments without central governance.",
      features: [
        "Central rule repository",
        "Version history",
        "Approval workflow",
        "MITRE ATT&CK mapping",
      ],
      impact: ["40% faster rule deployment", "Reduced false positives"],
    },
    {
      icon: BarChart3,
      title: "SOC content quality improvement",
      why: "SOC teams face inconsistent detection quality, high alert noise, and lack of validation frameworks.",
      features: [
        "Detection tuning insights",
        "Noise reduction analytics",
        "Rule effectiveness scoring",
        "Continuous validation pipeline",
      ],
      impact: ["30–50% reduction in alert noise", "Improved analyst efficiency"],
    },
    {
      icon: Users,
      title: "MSSP / MDR content standardization",
      why: "Security providers struggle with inconsistent detection logic across multiple customer environments.",
      features: [
        "Multi-tenant rule templates",
        "Standardized detection packs",
        "Cross-customer consistency checks",
        "Reusable detection libraries",
      ],
      impact: ["Faster onboarding of new clients", "Consistent detection quality across tenants"],
    },
    {
      icon: Settings,
      title: "Pre-production rule validation",
      why: "Teams often deploy untested detection rules directly into production causing noise and missed alerts.",
      features: [
        "Rule simulation environment",
        "Pre-deployment testing",
        "False positive prediction",
        "Coverage validation",
      ],
      impact: ["Reduced production incidents", "Higher detection accuracy"],
    },
    {
      icon: ClipboardCheck,
      title: "Detection coverage reviews for security leaders",
      why: "Security leaders lack visibility into what threats are actually covered by existing detections.",
      features: [
        "Coverage dashboards",
        "Gap analysis reports",
        "MITRE-based visibility",
        "Executive summaries",
      ],
      impact: ["Better security posture visibility", "Improved audit readiness"],
    },
    {
      icon: Database,
      title: "Log-source coverage assessment",
      why: "Organizations don’t know which log sources are missing or underutilized for threat detection.",
      features: [
        "Log source inventory",
        "Coverage mapping",
        "Missing telemetry detection",
        "Integration recommendations",
      ],
      impact: ["Improved visibility across systems", "Reduced blind spots"],
    },
    {
      icon: Fingerprint,
      title: "Identity-centric threat detection",
      why: "Traditional detection approaches miss identity-based attacks like credential abuse and session hijacking.",
      features: [
        "User behavior analytics",
        "Identity risk scoring",
        "Anomaly detection per user",
        "Session monitoring",
      ],
      impact: ["Early breach detection", "Reduced lateral movement risk"],
    },
    {
      icon: Search,
      title: "Investigation support for anomaly analysis",
      why: "Security analysts struggle to investigate anomalies quickly due to scattered data sources.",
      features: [
        "Unified investigation timeline",
        "Anomaly correlation engine",
        "Evidence linking",
        "Case management support",
      ],
      impact: ["Faster incident response", "Reduced investigation time"],
    },
    {
      icon: TrendingUp,
      title: "Risk-aligned detection strategy and governance",
      why: "Organizations lack alignment between business risk and detection engineering priorities.",
      features: [
        "Risk-based prioritization",
        "Detection governance framework",
        "Strategic alignment dashboards",
        "Compliance mapping",
      ],
      impact: ["Better risk coverage", "Improved compliance alignment"],
    },
  ];
  return (
    <>
      <section id="use-cases" className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <SectionHead
            label="Use cases"
            title="Where Detection Forge earns its place."
          />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06 } },
            }}
            className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          >
            {cases.map((c) => {
              const Icon = c.icon;

              return (
                <motion.div
                  key={c.title}
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    show: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -2 }}
                  onClick={() => {
                    setSelectedUseCase(c);
                    setOpenPanel(true);
                  }}
                  className="group flex cursor-pointer items-center justify-between rounded-lg border border-border bg-surface px-4 py-4 transition-colors hover:border-teal/40 hover:bg-surface-elevated"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-teal" />
                    <span className="text-sm font-medium">{c.title}</span>
                  </div>

                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-teal" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <UseCasePanel
        open={openPanel}
        setOpen={setOpenPanel}
        data={selectedUseCase}
      />
    </>
  );
}

/* ---------------- Metrics ---------------- */
export function Metrics() {
  const stats = [
    { v: "78%", l: "faster rule validation cycles" },
    { v: "3.4×", l: "ATT&CK coverage visibility" },
    { v: "62%", l: "fewer false-positive investigations" },
    { v: "100%", l: "of replays run without log movement" },
  ];
  return (
    <section className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <SectionHead
          label="Measurable outcomes"
          title="Detection maturity, quantified."
          sub="What teams typically see within the first two quarters of operating on Detection Forge."
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
          className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div
              key={s.l}
              variants={{
                hidden: { opacity: 0, scale: 0.85 },
                show: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-background p-8"
            >
              <div className="font-mono text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                {s.v}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Integrations ---------------- */
export function Integrations() {
  const groups = [
    { title: "SIEM & analytics", items: ["Splunk", "Microsoft Sentinel", "Elastic", "Chronicle", "QRadar", "Panther"] },
    { title: "Endpoint & telemetry", items: ["CrowdStrike", "SentinelOne", "Defender for Endpoint", "Carbon Black"] },
    { title: "Identity & cloud", items: ["Entra ID", "Okta", "AWS CloudTrail", "GCP Audit", "Azure Activity"] },
    { title: "Data & content", items: ["Snowflake", "Databricks", "Sigma HQ", "MITRE ATT&CK", "Git"] },
  ];
  return (
    <section id="integrations" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHead
          label="Ecosystem"
          title="Integrates across the security data plane."
          sub="Detection Forge connects to where your detections, logs, and identities already live."
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {groups.map((g) => (
            <motion.div
              key={g.title}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0 },
              }}
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

/* ---------------- CTA ---------------- */
export function CTA() {
  return (
    <section id="demo" className="border-b border-border">
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
    <SectionLabel icon={ShieldCheck}>See Detection Forge</SectionLabel>
    <h2 className="mt-3 text-2xl md:text-4xl font-semibold tracking-tight text-left md:text-center">
      Bring engineering discipline to detection — without replacing your SIEM.
    </h2>
    <p className="mt-4 text-muted-foreground">
      A 30-minute walkthrough with our detection engineering team. Bring a real rule, a real
      SIEM, and a real coverage question.
    </p>
    <div className="mt-7 flex flex-wrap justify-center gap-3">
      <button
        onClick={openBookDemo}
        className="inline-flex h-11 items-center gap-2 rounded-md bg-foreground px-5 text-sm font-medium text-background hover:opacity-90"
      >
        Book a demo <ArrowRight className="h-4 w-4" />
      </button>
      <a
        href="#platform"
        className="inline-flex h-11 items-center rounded-md border border-border bg-background px-5 text-sm font-medium hover:bg-surface-elevated"
      >
        Explore the platform
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
      <div className="font-mono font-bold text-2xl uppercase tracking-wider text-teal">{label}</div>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-pretty text-muted-foreground">{sub}</p>}
    </div>
  );
}