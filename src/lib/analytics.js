import ReactGA from "react-ga4";

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export function initGA() {
  if (GA_ID) ReactGA.initialize(GA_ID);
}

export function trackPageview(path) {
  if (GA_ID) ReactGA.send({ hitType: "pageview", page: path });
}

// Never pass email, name, phone, or any identifying info as params here.
export function trackEvent(name, params = {}) {
  if (GA_ID) ReactGA.event(name, params);
}