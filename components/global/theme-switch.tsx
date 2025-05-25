"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle({ className = "", id = "" }) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={className} id={id}>
      <Button
        variant="outline"
        size="icon"
        className="cursor-pointer"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        <Moon className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-90" />
        <Sun className="absolute h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
