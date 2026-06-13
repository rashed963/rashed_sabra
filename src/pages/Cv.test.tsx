import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";
import { routes } from "../config/routes";
import { siteConfig } from "../config/site";
import { copyAr } from "../features/copy/ar";
import Cv from "./Cv";

const originalMatchMedia = window.matchMedia;

const LocationProbe = () => {
  const location = useLocation();
  return <output data-testid="location">{location.pathname}</output>;
};

const renderCv = (entry: string | { pathname: string; state: { from: string } } = routes.cv) =>
  render(
    <MemoryRouter initialEntries={[entry]}>
      <Routes>
        <Route
          path={routes.cv}
          element={
            <>
              <Cv />
              <LocationProbe />
            </>
          }
        />
        <Route path="*" element={<LocationProbe />} />
      </Routes>
    </MemoryRouter>,
  );

const mockPdfResponse = (contentType = "application/pdf", ok = true) => {
  vi.stubGlobal(
    "fetch",
    vi.fn().mockResolvedValue({
      ok,
      headers: {
        get: () => contentType,
      },
    }),
  );
};

afterEach(() => {
  vi.unstubAllGlobals();
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: originalMatchMedia,
  });
});

describe("CV dossier", () => {
  it("renders the PDF with open and download controls", async () => {
    mockPdfResponse();
    renderCv();

    expect(await screen.findByTitle("Rashed Sabra CV PDF")).toHaveAttribute(
      "src",
      expect.stringContaining(siteConfig.documents.cv.url),
    );
    expect(screen.getByRole("link", { name: new RegExp(copyAr.common.cvOpen) })).toHaveAttribute(
      "href",
      siteConfig.documents.cv.url,
    );
    expect(
      screen.getByRole("link", { name: new RegExp(copyAr.common.cvDownload) }),
    ).toHaveAttribute("download", siteConfig.documents.cv.downloadName);
  });

  it("returns to the opening route and falls back to home for direct visits", async () => {
    mockPdfResponse();
    const { unmount } = renderCv({
      pathname: routes.cv,
      state: { from: routes.journey },
    });

    fireEvent.click(screen.getByRole("button", { name: copyAr.common.cvClose }));
    expect(screen.getByTestId("location")).toHaveTextContent(routes.journey);

    unmount();
    renderCv();
    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.getByTestId("location")).toHaveTextContent(routes.home);
  });

  it("uses the native PDF handoff on small screens", async () => {
    mockPdfResponse();
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: query === "(max-width: 767px)",
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });

    renderCv();

    expect(await screen.findByRole("heading", { name: copyAr.common.cvMobileTitle })).toBeVisible();
    expect(screen.queryByTitle("Rashed Sabra CV PDF")).not.toBeInTheDocument();
  });

  it("shows a clear fallback when the configured asset is missing", async () => {
    mockPdfResponse("text/html");
    renderCv();

    expect(await screen.findByRole("alert")).toHaveTextContent(copyAr.common.cvMissingTitle);
    await waitFor(() => {
      expect(
        screen.queryByRole("link", { name: new RegExp(copyAr.common.cvDownload) }),
      ).not.toBeInTheDocument();
    });
  });
});
