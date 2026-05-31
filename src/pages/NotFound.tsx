import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { routes } from "../config/routes";
import { copyAr } from "../features/copy/ar";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="page-title mb-4">{copyAr.notFound.title}</h1>
        <p className="lede mb-4">{copyAr.notFound.subtitle}</p>
        <Link to={routes.home} className="text-primary underline hover:text-primary/90">
          {copyAr.notFound.backHomeCta}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
