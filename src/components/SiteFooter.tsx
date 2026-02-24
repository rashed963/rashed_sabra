import { Link } from "react-router-dom";

const SiteFooter = () => (
  <footer className="mt-24 border-t border-border/30">
    <div className="container py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <p className="order-2 sm:order-1">
        © {new Date().getFullYear()} راشد صبرة — كل الحقوق محفوظة
      </p>
      <nav className="order-1 sm:order-2 flex items-center gap-5">
        <Link to="/journey" className="hover:text-primary transition-colors">الرحلة</Link>
        <Link to="/blog" className="hover:text-primary transition-colors">المدونة</Link>
        <a
          href="https://www.linkedin.com/in/rashed-sabra"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          LinkedIn ↗
        </a>
      </nav>
    </div>
  </footer>
);

export default SiteFooter;
