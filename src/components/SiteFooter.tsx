import { Link } from "react-router-dom";
import { routes } from "../config/routes";
import { siteConfig } from "../config/site";
import { copyAr } from "../features/copy/ar";

const SiteFooter = () => (
  <footer className="mt-24 border-t border-border/30">
    <div className="container py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p className="order-2 sm:order-1">
        © {new Date().getFullYear()} {siteConfig.profile.name} — {copyAr.footer.rightsReserved}
      </p>
      <nav className="order-1 sm:order-2 flex items-center gap-5">
        {siteConfig.navigation
          .filter((item) => item.href !== routes.home)
          .map((item) => (
            <Link key={item.href} to={item.href} className="hover:text-primary transition-colors">
              {item.label}
            </Link>
          ))}
        <a
          href={siteConfig.external.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          {copyAr.common.linkedInCta}
        </a>
      </nav>
    </div>
  </footer>
);

export default SiteFooter;
