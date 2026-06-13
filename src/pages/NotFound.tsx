import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/Layout";
import { useLanguage } from "../features/i18n/language";

const NotFound = () => {
  const location = useLocation();
  const { routes, copy } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="site-page not-found" aria-labelledby="not-found-title">
        <div className="not-found__signal" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="not-found__copy">
          <p className="section-label">
            <span>00</span>
            <span>{copy.notFound.label}</span>
          </p>
          <h1 id="not-found-title">{copy.notFound.title}</h1>
          <p>{copy.notFound.subtitle}</p>
          <Link to={routes.home} className="editorial-button editorial-button--primary">
            {copy.notFound.backHomeCta}
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
