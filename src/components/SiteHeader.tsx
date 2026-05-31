import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../config/routes";
import { siteConfig } from "../config/site";

const SiteHeader = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-white/5 bg-background/72 backdrop-blur-xl">
      <div dir="ltr" className="page-shell relative grid min-h-20 grid-cols-[auto_1fr_auto] items-center gap-4 py-4">
        <Link
          to={routes.home}
          dir="rtl"
          className="col-start-3 row-start-1 hidden min-w-0 justify-self-end text-right text-foreground sm:block"
        >
          <span className="block whitespace-nowrap text-[1.25rem] font-bold leading-none">
            {siteConfig.profile.name}
          </span>
          <span className="mt-1 block max-w-48 truncate text-[0.7rem] font-medium text-primary lg:max-w-none lg:overflow-visible">
            {siteConfig.profile.role}
          </span>
        </Link>

        <nav className="col-start-2 row-start-1 hidden items-center justify-self-center gap-6 lg:flex" aria-label="التنقل الرئيسي">
          {siteConfig.navigation.map((link, index) => {
            const active = pathname === link.href;
            return (
              <Link
                key={`${link.href}-${index}`}
                to={link.href}
                aria-current={active ? "page" : undefined}
                className={`button-label transition-colors ${
                  active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="col-start-1 row-start-1 hidden items-center justify-self-start gap-3 sm:flex">
          <div className="meta-text flex rounded-full border border-white/10 bg-white/[0.03] p-1 font-bold">
            <span className="rounded-full bg-primary px-3 py-2 text-primary-foreground">AR</span>
            <span className="px-3 py-2 text-muted-foreground">EN</span>
          </div>
          <a
            href={siteConfig.external.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="button-label inline-flex items-center rounded-full bg-primary px-5 py-3 text-primary-foreground shadow-[0_0_32px_hsl(var(--primary)/0.24)] transition-transform hover:-translate-y-0.5"
          >
            تواصل معي
          </a>
        </div>

        <button
          type="button"
          className="button-label col-start-1 row-start-1 justify-self-start rounded-full border border-white/10 px-4 py-2 text-foreground lg:hidden"
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
                className={`button-label border-b border-white/10 py-3 last:border-b-0 ${
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
              className="button-label mt-3 inline-flex w-fit items-center rounded-full bg-primary px-5 py-2 text-primary-foreground"
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
