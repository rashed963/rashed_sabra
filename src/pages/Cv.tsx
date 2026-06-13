import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { siteConfig } from "../config/site";
import { useLanguage } from "../features/i18n/language";

type PdfStatus = "checking" | "available" | "missing";

interface CvLocationState {
  from?: string;
}

const mobilePdfQuery = "(max-width: 767px)";

const Cv = () => {
  const { direction, routes, copy } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as CvLocationState | null;
  const isSafeReturnPath = (path: unknown): path is string =>
    typeof path === "string" &&
    path.startsWith("/") &&
    path !== routes.cv &&
    !path.startsWith(`${routes.cv}?`) &&
    !path.startsWith(`${routes.cv}#`);
  const returnPath = isSafeReturnPath(state?.from) ? state.from : routes.home;
  const { url: pdfUrl, downloadName } = siteConfig.documents.cv;
  const [pdfStatus, setPdfStatus] = useState<PdfStatus>("checking");
  const [useNativeViewer, setUseNativeViewer] = useState(() =>
    window.matchMedia(mobilePdfQuery).matches
  );

  const closeDossier = useCallback(() => {
    navigate(returnPath, { replace: true });
  }, [navigate, returnPath]);

  useEffect(() => {
    const mediaQuery = window.matchMedia(mobilePdfQuery);
    const updateViewer = () => setUseNativeViewer(mediaQuery.matches);

    updateViewer();
    mediaQuery.addEventListener("change", updateViewer);
    return () => mediaQuery.removeEventListener("change", updateViewer);
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    fetch(pdfUrl, { method: "HEAD", signal: controller.signal })
      .then((response) => {
        const contentType = response.headers.get("content-type")?.toLowerCase() ?? "";
        const isHtmlFallback = contentType.includes("text/html");
        setPdfStatus(response.ok && !isHtmlFallback ? "available" : "missing");
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        // Some static hosts reject HEAD while still serving the PDF correctly.
        setPdfStatus("available");
      });

    return () => controller.abort();
  }, [pdfUrl]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDossier();
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [closeDossier]);

  const documentActions = pdfStatus !== "missing" && (
    <div className="cv-dossier__actions" dir={direction}>
      <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
        {copy.common.cvOpen}
        <span aria-hidden="true">↗</span>
      </a>
      <a href={pdfUrl} download={downloadName}>
        {copy.common.cvDownload}
        <span aria-hidden="true">↓</span>
      </a>
    </div>
  );

  return (
    <main className="cv-dossier">
      <div className="cv-dossier__signal" aria-hidden="true" />

      <header className="cv-dossier__toolbar">
        <button
          type="button"
          className="cv-dossier__close"
          onClick={closeDossier}
          aria-label={copy.common.cvClose}
          autoFocus
        >
          <span aria-hidden="true">×</span>
          <span dir={direction}>{copy.common.cvClose}</span>
        </button>

        <div className="cv-dossier__identity" aria-label="Rashed Sabra curriculum vitae">
          <span aria-hidden="true" />
          <p>
            <strong>Rashed Sabra</strong>
            <small>Curriculum Vitae</small>
          </p>
        </div>

        {documentActions}
      </header>

      <div className="cv-dossier__body">
        <aside className="cv-dossier__intro" aria-labelledby="cv-title">
          <div>
            <p className="cv-dossier__eyebrow">Professional dossier · 2026</p>
            <h1 id="cv-title">Product, technology, and AI leadership.</h1>
            <p className="cv-dossier__summary">
              Roles, systems, and technical foundations behind my work.
            </p>
          </div>

          <dl className="cv-dossier__facts">
            <div>
              <dt>Current focus</dt>
              <dd>Head of Product &amp; Technology</dd>
            </div>
            <div>
              <dt>Document format</dt>
              <dd>English · PDF</dd>
            </div>
          </dl>
        </aside>

        <section className="cv-document" aria-label="CV document viewer">
          <div className="cv-document__topline">
            <div>
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </div>
            <p>RASHED-SABRA-CV.PDF</p>
            <p>01 / PDF</p>
          </div>

          <div className="cv-document__viewport">
            {pdfStatus === "checking" && (
              <div className="cv-document__state" role="status" dir={direction}>
                <span className="cv-document__loader" aria-hidden="true" />
                <p>{copy.common.cvChecking}</p>
              </div>
            )}

            {pdfStatus === "missing" && (
              <div className="cv-document__state" role="alert" dir={direction}>
                <span className="cv-document__file-mark" aria-hidden="true">PDF</span>
                <h2>{copy.common.cvMissingTitle}</h2>
                <p>{copy.common.cvMissingBody}</p>
              </div>
            )}

            {pdfStatus === "available" && useNativeViewer && (
              <div className="cv-document__state cv-document__state--mobile" dir={direction}>
                <span className="cv-document__file-mark" aria-hidden="true">PDF</span>
                <h2>{copy.common.cvMobileTitle}</h2>
                <p>{copy.common.cvMobileBody}</p>
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cv-document__open"
                >
                  {copy.common.cvOpen}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            )}

            {pdfStatus === "available" && !useNativeViewer && (
              <iframe
                src={`${pdfUrl}#view=FitH&toolbar=1&navpanes=0`}
                title="Rashed Sabra CV PDF"
                className="cv-document__embed"
              />
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Cv;
