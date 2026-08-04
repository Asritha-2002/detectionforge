import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { ThemeToggle } from "../ThemeToggle";
import { BookDemoDialog, openBookDemo } from "../home/BookDemoDialog";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Platform", to: "/platform" },
  { label: "Use cases", to: "/use-cases" },
  { label: "Company", to: "/company" },
  { label: "Resources", to: "/resources" },
  { label: "Careers", to: "/careers" },
];
import logo from "../../assets/Logo2.png"

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const expiresAt = localStorage.getItem("expiresAt");
      if (expiresAt && Date.now() < Number(expiresAt)) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };

    const syncRole = () => {
      setRole(localStorage.getItem("role") || "");
    };

    checkAuth();
    syncRole();

    const interval = setInterval(checkAuth, 1000);
    window.addEventListener("roleChanged", syncRole);

    return () => {
      clearInterval(interval);
      window.removeEventListener("roleChanged", syncRole);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(
        "https://detection-forge-server.vercel.app/api/logout",
        {},
        { withCredentials: true }
      );

      localStorage.removeItem("expiresAt");
      localStorage.removeItem("role");
      setIsLoggedIn(false);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const openSignIn = () => {
    alert("Open Sign In dialog here");
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid #e5e7eb",
        background: "var(--bg-color)",
        backdropFilter: "blur(100px)",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          height: "64px",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img
            src={logo}
            alt="Detection Forge"
            style={{
              height: "44px",
              width: "56px",
              objectFit: "cover",
              borderRadius: "6px",
            }}
          />
          <span
            className="brand-name"
            style={{ fontSize: "18px", fontWeight: "700", color: "var(--teal)" }}
          >
            DetectionForge
          </span>
        </Link>

        <nav style={{ display: "flex", gap: "4px" }} className="desktop-nav">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              style={({ isActive }) => ({
                textDecoration: "none",
                padding: "6px 12px",
                fontSize: "14px",
                fontWeight: isActive ? "600" : "400",
                color: isActive ? "var(--teal)" : "var(--muted-color)",
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <ThemeToggle />

          {/* {!isLoggedIn ? (
            <button
              onClick={openSignIn}
              style={{
                height: "36px",
                padding: "0 14px",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
                background: "var(--card-color)",
                color: "var(--text-color)",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Sign In
            </button>
          ) : (
            <>
              {role === "admin" && (
                <button
                  onClick={() => navigate("/dashboard")}
                  style={{
                    height: "36px",
                    padding: "0 14px",
                    borderRadius: "8px",
                    border: "1px solid #d1d5db",
                    background: "var(--card-color)",
                    color: "var(--text-color)",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  Admin Portal
                </button>
              )}

              <button
                onClick={handleLogout}
                style={{
                  height: "36px",
                  padding: "0 14px",
                  borderRadius: "8px",
                  border: "1px solid #d1d5db",
                  background: "var(--card-color)",
                  color: "var(--text-color)",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Sign Out
              </button>
            </>
          )} */}

          <button
            onClick={openBookDemo}
            className="desktop-book-demo"
            style={{
              height: "36px",
              padding: "0 14px",
              borderRadius: "8px",
              border: "none",
              background: "#111827",
              color: "#ffffff",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Book a demo
          </button>

          <button
            onClick={() => setOpen((prev) => !prev)}
            className="mobile-menu-btn"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            style={{
              overflow: "hidden",
              borderTop: "1px solid #e5e7eb",
            }}
            className="mobile-menu"
          >
            <div style={{ padding: "12px 24px" }}>
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setOpen(false)}
                  style={({ isActive }) => ({
                    display: "block",
                    padding: "10px 0",
                    fontWeight: isActive ? "600" : "400",
                    color: isActive ? "var(--teal)" : "var(--muted-color)",
                    textDecoration: "none",
                  })}
                >
                  {item.label}
                </NavLink>
              ))}

              <button
                onClick={() => {
                  setOpen(false);
                  openBookDemo();
                }}
                style={{
                  width: "100%",
                  marginTop: "12px",
                  height: "40px",
                  borderRadius: "8px",
                  border: "none",
                  background: "#111827",
                  color: "#fff",
                  fontWeight: "600",
                }}
              >
                Book a demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <BookDemoDialog />
    </header>
  );
}