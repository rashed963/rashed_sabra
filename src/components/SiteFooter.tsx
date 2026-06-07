import { Link } from "react-router-dom";
import { siteConfig } from "../config/site";

const SiteFooter = () => (
  <footer className="site-footer">
    <div className="site-footer__inner">
      <div>
        <strong>{siteConfig.profile.name}</strong>
        <p lang="en" dir="ltr">Head of Product &amp; Technology</p>
      </div>

      <nav aria-label="روابط التذييل">
        {siteConfig.navigation.map((item, index) => (
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

export default SiteFooter;
