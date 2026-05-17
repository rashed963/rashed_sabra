import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { siteConfig } from "../config/site";

const SiteHeader = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-border/80 bg-background">
      <div className="page-shell flex min-h-20 items-center justify-between gap-6 py-4">
        <Link to={siteConfig.navigation[0].href} className="min-w-0 text-foreground">
          <span className="block text-xl font-bold leading-tight">{siteConfig.profile.name}</span>
          <span className="mt-1 block text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground">
            {siteConfig.profile.role}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 sm:flex" aria-label="التنقل الرئيسي">
          {siteConfig.navigation.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-medium transition-colors ${
                  active
                    ? "text-foreground underline decoration-border underline-offset-8"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="rounded-sm border border-border px-3 py-2 text-sm font-medium text-foreground sm:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label="فتح القائمة"
        >
          القائمة
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-border/80 bg-background sm:hidden">
          <nav id="mobile-navigation" className="page-shell flex flex-col py-3" aria-label="التنقل الرئيسي">
            {siteConfig.navigation.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`border-b border-border/60 py-3 text-sm font-medium last:border-b-0 ${
                  pathname === link.href ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
