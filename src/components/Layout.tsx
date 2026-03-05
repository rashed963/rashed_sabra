import { Suspense, lazy } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

const NeuralBackground = lazy(() => import("./NeuralBackground"));

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 z-[60] rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground"
      >
        Skip to content
      </a>
      <Suspense fallback={null}>
        <NeuralBackground />
      </Suspense>
      <div className="relative z-10 flex min-h-screen flex-col">
        <SiteHeader />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </div>
    </div>
  );
};

export default Layout;
