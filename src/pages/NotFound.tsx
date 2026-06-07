import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "../components/Layout";
import { routes } from "../config/routes";
import { copyAr } from "../features/copy/ar";

const NotFound = () => {
  const location = useLocation();

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
            <span lang="en" dir="ltr">Signal not found</span>
          </p>
          <h1 id="not-found-title">{copyAr.notFound.title}</h1>
          <p>{copyAr.notFound.subtitle}</p>
          <Link to={routes.home} className="editorial-button editorial-button--primary">
            {copyAr.notFound.backHomeCta}
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
