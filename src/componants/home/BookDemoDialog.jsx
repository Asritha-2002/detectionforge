import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { ArrowRight, CheckCircle2, X } from "lucide-react";
import axios from "axios";
import { trackEvent } from "../../lib/analytics";
const OPEN_EVENT = "open-book-demo";

export function openBookDemo() {
  window.dispatchEvent(new CustomEvent(OPEN_EVENT));
}

// Guards against the dialog being mounted more than once in the tree
// (e.g. once in a layout/App shell and again in Navbar). Only the
// instance that mounted first responds to the open event, so you never
// get two overlapping modals stacked on top of each other.
let instanceCount = 0;

const schema = z.object({
  firstName: z.string().trim().min(1, "First name is required"),
  lastName: z.string().trim().min(1, "Last name is required"),

  companyName: z.string().trim().min(1, "Company name is required"),

  companyEmail: z
    .string()
    .trim()
    .email("Enter a valid company email"),

 phoneNumber: z
  .string()
  .trim()
  .regex(/^[0-9+\-\s()]{10,15}$/, "Enter a valid phone number"),

  role: z.string().trim().min(1, "Role is required"),

  location: z.string().trim().min(1, "Location is required"),

  message: z.string().trim().min(1, "Message is required"),
});

// --- Self-contained UI primitives (no external component imports) ---

function Label({ children }) {
  return <label className="text-sm font-medium text-foreground">{children}</label>;
}

function Input({ className = "", ...props }) {
  return (
    <input
      {...props}
      className={`flex h-10 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal/40 ${className}`}
    />
  );
}

function Textarea({ className = "", ...props }) {
  return (
    <textarea
      {...props}
      className={`flex w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-teal/40 ${className}`}
    />
  );
}

function Dialog({ open, onClose, children }) {
  // Lock page scroll while the dialog is open so the page can never
  // scroll behind it (that's what produced the doubled/overlapping
  // look — the backdrop stayed fixed but the page kept scrolling).
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/60"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-lg border border-border bg-background p-6 shadow-xl"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 rounded-md p-1 text-muted-foreground hover:text-foreground"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

function DialogHeader({ children }) {
  return <div className="mb-2 space-y-1.5">{children}</div>;
}

function DialogTitle({ children }) {
  return <h2 className="text-lg font-semibold text-foreground">{children}</h2>;
}

function DialogDescription({ children }) {
  return <p className="text-sm text-muted-foreground">{children}</p>;
}

// --- Main component ---

export function BookDemoDialog() {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const isPrimaryInstance = useRef(false);

  useEffect(() => {
    // Only the first mounted instance of this component becomes the
    // "primary" one that actually opens on the event. Later instances
    // (accidental duplicate mounts elsewhere in the tree) stay inert
    // instead of popping open a second overlapping modal.
    instanceCount += 1;
    isPrimaryInstance.current = instanceCount === 1;

    return () => {
      instanceCount -= 1;
    };
  }, []);

  useEffect(() => {
    const handler = () => {
      if (!isPrimaryInstance.current) return;
      setSubmitted(false);
      setErrors({});
      setOpen(true);
    };
    window.addEventListener(OPEN_EVENT, handler);
    return () => window.removeEventListener(OPEN_EVENT, handler);
  }, []);

  if (!isPrimaryInstance.current && !open) return null;

  const onSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const map = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0]?.toString() ?? "";
        if (k && !map[k]) map[k] = issue.message;
      }
      setErrors(map);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      //https://detection-forge-server.vercel.app
      //http://localhost:5011
      const result = await axios.post(
        "https://detectionforge-backend.vercel.app/api/createDemo",
        {
          firstName: parsed.data.firstName,
          lastName: parsed.data.lastName,
          companyName: parsed.data.companyName,
          companyEmail: parsed.data.companyEmail,
          phoneNumber: parsed.data.phoneNumber,
          role: parsed.data.role,
          location: parsed.data.location,
          message: parsed.data.message,
        }
      );
      setSubmitting(false);
      if (result) {
        setSubmitted(true);
        trackEvent("demo_form_submitted");
        toast.success("Request received. Our team will reach out shortly.");
      }
    } catch (err) {
      setSubmitting(false);
      console.log(err);
      toast.error("Couldn't submit your request. Please try again.");
    }
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="py-6 text-center"
          >
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: 0.05 }}
              className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-teal/30 bg-teal/10 text-teal"
            >
              <CheckCircle2 className="h-6 w-6" />
            </motion.div>
            <h3 className="mt-4 text-lg font-semibold">Thanks — request received.</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              A detection engineer from our team will reach out within one business day to schedule
              your 30-minute walkthrough.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <DialogHeader>
              <DialogTitle>Book a demo</DialogTitle>
              <DialogDescription>
                A 30-minute walkthrough with our detection engineering team. Bring a real rule, SIEM,
                or coverage question.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={onSubmit} className="mt-2 space-y-4" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label>First Name</Label>
                  <Input name="firstName" placeholder="Enter your first name" />
                  {errors.firstName && (
                    <p className="text-xs text-danger">{errors.firstName}</p>
                  )}
                </div>

                <div className="grid gap-2">
                  <Label>Last Name</Label>
                  <Input name="lastName" placeholder="Enter your last name" />
                  {errors.lastName && (
                    <p className="text-xs text-danger">{errors.lastName}</p>
                  )}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label>Company Name</Label>
                  <Input name="companyName" placeholder="Enter your company name" />
                  {errors.companyName && (
                    <p className="text-xs text-danger">{errors.companyName}</p>
                  )}
                </div>

                <div className="grid gap-2">
                  <Label>Company Email</Label>
                  <Input
                    name="companyEmail"
                    placeholder="Enter your company email"
                    type="email"
                  />
                  {errors.companyEmail && (
                    <p className="text-xs text-danger">{errors.companyEmail}</p>
                  )}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label>Role</Label>
                  <Input name="role" placeholder="Enter your role" />
                  {errors.role && (
                    <p className="text-xs text-danger">{errors.role}</p>
                  )}
                </div>

                <div className="grid gap-2">
                  <Label>Location</Label>
                  <Input name="location" placeholder="Enter your location" />
                  {errors.location && (
                    <p className="text-xs text-danger">{errors.location}</p>
                  )}
                </div>
              </div>
              <div className="flex">
                <div className="flex items-center rounded-l-md border border-r-0 border-border px-3 text-sm text-foreground">
                  +91
                </div>

                <Input
                  name="phoneNumber"
                  type="tel"
                  placeholder="9876543210"
                  className="rounded-l-none"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label>Message</Label>
                <Textarea
                  name="message"
                  rows={4}
                />
                {errors.message && (
                  <p className="text-xs text-danger">{errors.message}</p>
                )}
              </div>
              <motion.button
                type="submit"
                disabled={submitting}
                whileTap={{ scale: 0.98 }}
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {submitting ? "Sending…" : <>Request demo <ArrowRight className="h-4 w-4" /></>}
              </motion.button>
              <p className="text-center text-xs text-muted-foreground">
                We'll only use your details to coordinate the demo.
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </Dialog>
  );
}