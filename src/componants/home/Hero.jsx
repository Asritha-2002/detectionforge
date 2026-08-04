import { ArrowRight, ShieldCheck, Database, Building2 } from "lucide-react";
import { motion } from "motion/react";
import { ProductMockup } from "./ProductMockup";
import { openBookDemo } from "./BookDemoDialog";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-60" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,color-mix(in_oklab,var(--teal)_18%,transparent),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="mx-auto max-w-5xl text-center">

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            Detection assurance for modern SOC teams
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-balance text-4xl font-semibold tracking-tight md:text-6xl"
          >
            Prove your detections{" "}
            <span className="text-teal">work.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-5 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg"
          >
            Validate detections against historical SIEM data, measure ATT&CK and
            log-source coverage, and govern rule changes without moving raw logs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <button
              onClick={openBookDemo}
              className="inline-flex h-11 items-center gap-2 rounded-md bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Book a demo <ArrowRight className="h-4 w-4" />
            </button>

            <a
              href="#how"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-surface px-5 text-sm font-medium text-foreground transition-colors hover:bg-surface-elevated"
            >
              See how it works
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground"
          >
            {[
              [ShieldCheck, "SIEM-agnostic — works with any SIEM platform"],
              [Database, "Uses historical logs already in your environment"],
              [Building2, "Built for enterprise SOC and MDR teams"],
            ].map(([Icon, label], index) => {
              const I = Icon;

              return (
                <motion.span
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.65 + index * 0.1,
                  }}
                  className="inline-flex items-center gap-1.5"
                >
                  <I className="h-3.5 w-3.5 text-teal" /> {label}
                </motion.span>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: "easeOut",
          }}
          className="relative mt-16"
        >
          <div className="absolute -inset-x-8 -inset-y-8 -z-10 rounded-3xl bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,color-mix(in_oklab,var(--teal)_10%,transparent),transparent_70%)]" />
          <ProductMockup />
        </motion.div>
      </div>
    </section>
  );
}