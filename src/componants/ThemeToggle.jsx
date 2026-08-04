import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "8px",
        border: "1px solid #d1d5db",
        background: "var(--bg-color)",
        color: "var(--text-color)",
        display: "grid",
        placeItems: "center",
        cursor: "pointer",
      }}
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}