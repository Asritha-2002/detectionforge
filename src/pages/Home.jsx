import { Hero } from "../componants/home/Hero";
import {
  Problem,
  Pillars,
  Capabilities,
  HowItWorks,
  Why,
  UseCases,
  Metrics,
  Integrations,
  CTA,
} from "../componants/home/Sections";

export function Home() {
  return (
    <>
    <Seo
  title="Detection Forge | SIEM Detection Validation Platform"
  description="Validate detections against historical SIEM data, measure ATT&CK coverage, and strengthen your SOC."
  path="/"
/>
      <Hero />
      <Problem />
      <Pillars />
      <Capabilities />
      <HowItWorks />
      <Why />
      <UseCases />
      <Metrics />
      <Integrations />
      <CTA />
    </>
  );
}