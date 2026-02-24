import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import NeuralBackground from "./NeuralBackground";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative flex min-h-screen flex-col">
      <NeuralBackground />
      <div className="relative z-10 flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
    </div>
  );
};

export default Layout;
