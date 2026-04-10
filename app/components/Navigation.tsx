"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "../contexts/LanguageContext";

export default function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showSolid = !isHome || scrolled;

  const navLinks = [
    { href: "/about", label: t("nav.about") },
    { href: "/science", label: t("nav.science") },
    { href: "/technology", label: t("nav.technology") },
    { href: "/study", label: t("nav.study") },
    { href: "/team", label: t("nav.team") },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showSolid
            ? "bg-[var(--background)]/85 backdrop-blur-lg border-b border-[var(--color-sage)]/10 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-500 ${
                showSolid
                  ? "bg-gradient-to-br from-[var(--color-forest)] to-[var(--color-sage)]"
                  : "bg-white/15 backdrop-blur-sm"
              }`}
            >
              <svg
                className="w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            </div>
            <span
              className={`font-medium tracking-wider text-sm transition-colors duration-500 ${
                showSolid ? "text-[var(--foreground)]" : "text-white"
              }`}
            >
              FELIX
            </span>
          </a>

          {/* Mobile: language + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <div className="flex items-center gap-1">
              <button
                onClick={() => setLanguage("da")}
                className={`text-xs px-2 py-1 rounded transition-all ${
                  language === "da"
                    ? showSolid
                      ? "bg-[var(--color-forest)] text-white"
                      : "bg-white/20 text-white"
                    : showSolid
                      ? "text-[var(--muted)]"
                      : "text-white/50"
                }`}
              >
                DA
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`text-xs px-2 py-1 rounded transition-all ${
                  language === "en"
                    ? showSolid
                      ? "bg-[var(--color-forest)] text-white"
                      : "bg-white/20 text-white"
                    : showSolid
                      ? "text-[var(--muted)]"
                      : "text-white/50"
                }`}
              >
                EN
              </button>
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-1 transition-colors ${showSolid ? "text-[var(--foreground)]" : "text-white"}`}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors duration-300 ${
                  pathname === link.href
                    ? showSolid
                      ? "text-[var(--color-forest)] font-medium"
                      : "text-white font-medium"
                    : showSolid
                      ? "text-[var(--muted)] hover:text-[var(--foreground)]"
                      : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}

            <div
              className={`flex items-center gap-1 border-l pl-6 transition-colors duration-500 ${
                showSolid ? "border-[var(--muted)]/20" : "border-white/20"
              }`}
            >
              <button
                onClick={() => setLanguage("da")}
                className={`text-xs px-2.5 py-1 rounded transition-all ${
                  language === "da"
                    ? showSolid
                      ? "bg-[var(--color-forest)] text-white"
                      : "bg-white/20 text-white"
                    : showSolid
                      ? "text-[var(--muted)] hover:text-[var(--foreground)]"
                      : "text-white/50 hover:text-white"
                }`}
              >
                DA
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`text-xs px-2.5 py-1 rounded transition-all ${
                  language === "en"
                    ? showSolid
                      ? "bg-[var(--color-forest)] text-white"
                      : "bg-white/20 text-white"
                    : showSolid
                      ? "text-[var(--muted)] hover:text-[var(--foreground)]"
                      : "text-white/50 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-[72px] left-0 right-0 bg-[var(--background)] border-b border-[var(--color-sage)]/10 shadow-lg">
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-3 text-sm transition-colors ${
                    pathname === link.href
                      ? "text-[var(--color-forest)] font-medium"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
