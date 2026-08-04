import { openBookDemo } from "../home/BookDemoDialog";
import { ArrowRight } from "lucide-react";

export function PageHero({ eyebrow, title, description }) {
  return (
    <section className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="font-mono text-xs uppercase tracking-wider text-teal">{eyebrow}</div>
        <h1 className="mt-3 max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-muted-foreground">{description}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={openBookDemo}
            className="inline-flex h-11 items-center gap-2 rounded-md bg-foreground px-5 text-sm font-medium text-background hover:opacity-90"
          >
            Book a demo <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function FeatureGrid({ items }) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {items.map((c) => (
            <div key={c.title} className="bg-background p-6">
              <h3 className="text-sm font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}