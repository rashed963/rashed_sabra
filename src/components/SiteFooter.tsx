import { Link } from "react-router-dom";
import { siteConfig } from "../config/site";
import { copyAr } from "../features/copy/ar";

const SiteFooter = () => (
  <footer className="site-pattern border-t border-white/10 bg-background">
    <div className="page-shell grid gap-8 py-10 text-muted-foreground md:grid-cols-[1fr_auto] md:items-end">
      <div>
        <p className="text-[1.5rem] font-bold leading-snug text-foreground">{siteConfig.profile.name}</p>
        <p className="mt-2 font-semibold text-primary">{copyAr.footer.tagline}</p>
        <p className="support-copy mt-4 max-w-xl">
          أكتب وأبني عند تقاطع المنتج، الهندسة، الجودة، والذكاء الاصطناعي العملي.
        </p>
      </div>

      <nav className="support-copy flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="روابط التذييل">
        {siteConfig.navigation.map((item, index) => (
          <Link key={`${item.href}-${index}`} to={item.href} className="transition-colors hover:text-primary">
            {item.label}
          </Link>
        ))}
        <a
          href={siteConfig.external.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-primary"
        >
          {copyAr.common.linkedInCta}
        </a>
      </nav>

      <p className="meta-text border-t border-white/10 pt-6 md:col-span-2">
        © {new Date().getFullYear()} {siteConfig.profile.name}. {copyAr.footer.rightsReserved}
      </p>
    </div>
  </footer>
);

export default SiteFooter;
