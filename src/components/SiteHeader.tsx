import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../config/routes";
import { siteConfig } from "../config/site";

const SiteHeader = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isLinkActive = (href: string) =>
    href === routes.home
      ? pathname === href
      : pathname === href || pathname.startsWith(`${href}/`);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div dir="ltr" className="site-header__inner">
        <Link
          to={routes.home}
          dir="rtl"
          className="site-brand"
        >
          <span className="site-brand__mark" aria-hidden="true" />
          <span>
            <strong>{siteConfig.profile.name}</strong>
            <small lang="en" dir="ltr">Product · Technology · AI</small>
          </span>
        </Link>

        <nav className="site-navigation" aria-label="التنقل الرئيسي">
          {siteConfig.navigation.map((link, index) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={`${link.href}-${index}`}
                to={link.href}
                aria-current={active ? "page" : undefined}
                className={active ? "is-active" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <a
          href={siteConfig.external.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="site-header__linkedin"
        >
          LinkedIn
        </a>

        <button
          type="button"
          className="site-menu-toggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
        >
          القائمة
        </button>
      </div>

      {menuOpen && (
        <div className="site-mobile-panel">
          <nav id="mobile-navigation" className="site-mobile-navigation" aria-label="التنقل الرئيسي">
            {siteConfig.navigation.map((link, index) => (
              <Link
                key={`${link.href}-${index}`}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                aria-current={isLinkActive(link.href) ? "page" : undefined}
                className={isLinkActive(link.href) ? "is-active" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={siteConfig.external.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="site-mobile-navigation__linkedin"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
