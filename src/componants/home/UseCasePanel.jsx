import {
  X,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  Dot,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
export function UseCasePanel({ open, setOpen, data }) {
  if (!data) return null;
  const Icon = data.icon;
  return (
  <AnimatePresence>
    {open && (
      <>
        {/* Backdrop */}
        <motion.div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[99] bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        />

        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{
            type: "spring",
            stiffness: 280,
            damping: 30,
          }}
          className="fixed top-0 right-0 z-[100] h-screen w-full sm:w-[420px] md:w-[500px] border-l border-border bg-background shadow-2xl overflow-y-auto"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-between border-b border-border p-4 sm:p-6"
          >
            <div className="min-w-0 pr-3">
              <Icon className="h-6 w-6 text-teal" />
              <h2 className="mt-2 text-xl sm:text-2xl font-bold break-words">
                {data.title}
              </h2>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="shrink-0 rounded-md p-2 hover:bg-accent"
            >
              <X />
            </button>
          </motion.div>

          <div className="space-y-8 p-4 sm:p-6">

            {/* Why */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <div className="mb-3 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-teal" />
                <h3 className="text-lg font-semibold">Why it matters</h3>
              </div>

              <p className="text-sm leading-7 text-muted-foreground">
                {data.why}
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <div className="mb-3 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-teal" />
                <h3 className="text-lg font-semibold">
                  What DetectionForge does
                </h3>
              </div>

              <div className="space-y-2">
                {data.features.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.35 + index * 0.08,
                    }}
                    className="flex items-center gap-3 rounded-md border border-border bg-surface p-3"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-teal" />
                    <span className="text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Impact */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <div className="mb-3 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-teal" />
                <h3 className="text-lg font-semibold">
                  Business Impact
                </h3>
              </div>

              <div className="space-y-2">
                {data.impact.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.45 + index * 0.08,
                    }}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Dot className="h-6 w-6 shrink-0 text-teal" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-4 h-11 w-full rounded-md bg-foreground text-background"
            >
              Book a Demo
            </motion.button>

          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);
}