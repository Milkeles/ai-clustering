import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Sun03Icon,
  Moon02Icon,
  Menu01Icon,
  Cancel01Icon,
} from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/theme-context";
import { Logo } from "@/components/Logo";

const navLinks = [
  { label: "Въведение", href: "#introduction" },
  { label: "Семейства", href: "#centroid" },
  { label: "Демо", href: "#demos" },
  { label: "Сравнение", href: "#comparison" },
  { label: "Източници", href: "#references" },
];

export function Navbar() {
  const { dark, toggleDark } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-3
                   bg-background/90 border-b border-border md:backdrop-blur-md md:bg-background/80"
      >
        <a href="#hero" aria-label="Към началото">
          <Logo />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <Button key={href} variant="navigation" effect="hoverUnderline" asChild>
              <a href={href}>{label}</a>
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={toggleDark}
            variant="icon"
            size="icon"
            aria-label={dark ? "Светъл режим" : "Тъмен режим"}
          >
            <HugeiconsIcon
              icon={dark ? Sun03Icon : Moon02Icon}
              size={14}
              strokeWidth={2.5}
            />
          </Button>

          <Button
            variant="icon"
            size="icon"
            aria-label={mobileOpen ? "Затвори меню" : "Отвори меню"}
            className="md:hidden"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <HugeiconsIcon
              icon={mobileOpen ? Cancel01Icon : Menu01Icon}
              size={14}
              strokeWidth={2.5}
            />
          </Button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 z-40 h-full w-64 bg-background border-l border-border
                   flex flex-col pt-24 px-6 gap-2 transition-transform duration-300 ease-in-out md:hidden ${
                     mobileOpen ? "translate-x-0" : "translate-x-full invisible"
                   }`}
      >
        {navLinks.map(({ label, href }) => (
          <Button
            key={href}
            variant="navigation"
            asChild
            className="justify-start w-full"
            effect="hoverUnderline"
            onClick={() => setMobileOpen(false)}
          >
            <a href={href}>{label}</a>
          </Button>
        ))}
      </div>

      {/* Backdrop */}
      {mobileOpen && (
        <button
          aria-label="Затвори меню"
          className="fixed inset-0 z-30 w-full h-full bg-black/40 md:hidden cursor-default"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}