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