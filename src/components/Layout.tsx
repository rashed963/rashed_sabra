import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import CursorHalo from "./CursorHalo";
import { useLanguage } from "../features/i18n/language";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { copy } = useLanguage();

  return (
    <div className="site-layout">
      <CursorHalo />
      <a
        href="#main-content"
        className="skip-link"
      >
        {copy.common.skipToContent}
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
