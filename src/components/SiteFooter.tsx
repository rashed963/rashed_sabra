import { Link } from "react-router-dom";
import { siteConfig } from "../config/site";
import { useLanguage } from "../features/i18n/language";

const SiteFooter = () => {
  const { language, routes, copy } = useLanguage();
  const navigation = [
    { href: routes.home, label: copy.navigation.home },
    { href: routes.blog, label: copy.navigation.blog },
    { href: routes.journey, label: copy.navigation.journey },
  ];

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <strong>{siteConfig.profile.name[language]}</strong>
          <p lang="en" dir="ltr">Head of Product &amp; Technology</p>
        </div>

        <nav aria-label={copy.common.footerNavigation}>
          {navigation.map((item, index) => (
            <Link key={`${item.href}-${index}`} to={item.href}>
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.external.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default SiteFooter;
