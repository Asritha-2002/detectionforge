import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ThemeProvider } from "../context/ThemeContext";
import { Navbar } from "../componants/site/Navbar";
import { Footer } from "../componants/site/Footer";
import { FloatingIcons } from "../componants/site/FloatingIcons";
import { BookDemoDialog } from "../componants/home/BookDemoDialog";
import { Toaster } from "sonner";

function useHashScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const target = hash || window.location.hash.replace(/^#/, "");
    if (!target) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    const id = target.replace(/^#/, "");
    let attempts = 0;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (attempts++ < 20) {
        window.setTimeout(tryScroll, 50);
      }
    };
    tryScroll();
  }, [pathname, hash]);
}

export function Layout() {
  useHashScroll();

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
        <FloatingIcons />
        <BookDemoDialog />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}