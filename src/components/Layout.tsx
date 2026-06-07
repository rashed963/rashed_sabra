import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="site-layout">
      <a
        href="#main-content"
        className="skip-link"
      >
        الانتقال إلى المحتوى
      </a>
      <SiteHeader />
      <main id="main-content" className="min-w-0 flex-1" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
};

export default Layout;
