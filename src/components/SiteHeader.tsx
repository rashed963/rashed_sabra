import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../config/routes";
import { siteConfig } from "../config/site";

const SiteHeader = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-white/5 bg-background/72 backdrop-blur-xl">
      <div className="page-shell flex min-h-20 items-center justify-between gap-4 py-4">
        <Link to={routes.home} className="min-w-0 text-foreground">
          <span className="block text-xl font-black leading-none tracking-tight">
            {siteConfig.profile.name}
          </span>
          <span className="mt-1 block text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-primary">
            {siteConfig.profile.role}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="التنقل الرئيسي">
          {siteConfig.navigation.map((link, index) => {
            const active = pathname === link.href;
            return (
              <Link
                key={`${link.href}-${index}`}
                to={link.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-semibold transition-colors ${
                  active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <div className="flex rounded-full border border-white/10 bg-white/[0.03] p-1 text-xs font-bold">
            <span className="rounded-full bg-primary px-3 py-2 text-primary-foreground">AR</span>
            <span className="px-3 py-2 text-muted-foreground">EN</span>
          </div>
          <a
            href={siteConfig.external.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-primary px-5 py-3 text-sm font-black text-primary-foreground shadow-[0_0_32px_hsl(var(--primary)/0.24)] transition-transform hover:-translate-y-0.5"
          >
            تواصل معي
          </a>
        </div>

        <button
          type="button"
          className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-foreground lg:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label="فتح القائمة"
        >
          القائمة
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-background/95 backdrop-blur-xl lg:hidden">
          <nav id="mobile-navigation" className="page-shell flex flex-col py-3" aria-label="التنقل الرئيسي">
            {siteConfig.navigation.map((link, index) => (
              <Link
                key={`${link.href}-${index}`}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`border-b border-white/10 py-3 text-sm font-semibold last:border-b-0 ${
                  pathname === link.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={siteConfig.external.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-fit items-center rounded-full bg-primary px-5 py-2 text-sm font-black text-primary-foreground"
            >
              تواصل معي
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
