import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { siteConfig } from "../config/site";
import { useLanguage } from "../features/i18n/language";

const SiteHeader = () => {
  const location = useLocation();
  const { language, direction, routes, switchPath, copy } = useLanguage();
  const { pathname } = location;
  const [menuOpen, setMenuOpen] = useState(false);
  const cvState = {
    from: `${location.pathname}${location.search}${location.hash}`,
  };
  const isLinkActive = (href: string) =>
    href === routes.home
      ? pathname === href
      : pathname === href || pathname.startsWith(`${href}/`);
  const navigation = [
    { href: routes.home, label: copy.navigation.home },
    { href: routes.blog, label: copy.navigation.blog },
    { href: routes.journey, label: copy.navigation.journey },
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="site-header__inner" dir={direction}>
        <Link
          to={routes.home}
          dir={direction}
          className="site-brand"
        >
          <span className="site-brand__mark" aria-hidden="true" />
          <span>
            <strong>{siteConfig.profile.name[language]}</strong>
            <small lang="en" dir="ltr">Product &amp; Technology · AI</small>
          </span>
        </Link>

        <nav className="site-navigation" aria-label={copy.common.primaryNavigation}>
          {navigation.map((link, index) => {
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

        <div className="site-header__utilities">
          <Link
            to={switchPath}
            className="site-language-switch"
            aria-label={copy.common.switchLanguage}
            lang={language === "ar" ? "en" : "ar"}
            dir={language === "ar" ? "ltr" : "rtl"}
          >
            {copy.common.switchLanguageShort}
          </Link>
          <Link
            to={routes.cv}
            state={cvState}
            className="site-header__cv"
            lang="en"
            dir="ltr"
          >
            {copy.common.cvNavLabel}
          </Link>
          <a
            href={siteConfig.external.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="site-header__linkedin"
          >
            LinkedIn
          </a>
        </div>

        <button
          type="button"
          className="site-menu-toggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? copy.common.closeMenu : copy.common.openMenu}
        >
          {copy.common.menu}
        </button>
      </div>

      {menuOpen && (
        <div className="site-mobile-panel">
          <nav id="mobile-navigation" className="site-mobile-navigation" aria-label={copy.common.primaryNavigation}>
            {navigation.map((link, index) => (
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
            <Link
              to={switchPath}
              onClick={() => setMenuOpen(false)}
              className="site-mobile-navigation__language"
              aria-label={copy.common.switchLanguage}
              lang={language === "ar" ? "en" : "ar"}
              dir={language === "ar" ? "ltr" : "rtl"}
            >
              {copy.common.switchLanguageShort}
            </Link>
            <Link
              to={routes.cv}
              state={cvState}
              onClick={() => setMenuOpen(false)}
              className="site-mobile-navigation__cv"
              lang="en"
              dir="ltr"
            >
              {copy.common.cvNavLabel}
            </Link>
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
