import { Link } from "react-router-dom";
import { routes } from "../config/routes";
import { siteConfig } from "../config/site";
import { copyAr } from "../features/copy/ar";

const SiteFooter = () => (
  <footer className="mt-20 border-t border-border/80">
    <div className="page-shell flex flex-col gap-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {new Date().getFullYear()} {siteConfig.profile.name}. {copyAr.footer.rightsReserved}
      </p>
      <nav className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="روابط التذييل">
        {siteConfig.navigation
          .filter((item) => item.href !== routes.home)
          .map((item) => (
            <Link key={item.href} to={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        <a
          href={siteConfig.external.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-foreground"
        >
          {copyAr.common.linkedInCta}
        </a>
      </nav>
    </div>
  </footer>
);

export default SiteFooter;
