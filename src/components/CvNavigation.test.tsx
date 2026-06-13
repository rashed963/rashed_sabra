import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";
import { routes } from "../config/routes";
import { copyAr } from "../features/copy/ar";
import Journey from "../pages/Journey";
import SiteHeader from "./SiteHeader";

const LocationProbe = () => {
  const location = useLocation();
  const from = (location.state as { from?: string } | null)?.from ?? "";

  return (
    <>
      <output data-testid="pathname">{location.pathname}</output>
      <output data-testid="from">{from}</output>
    </>
  );
};

describe("CV navigation", () => {
  it("opens the dossier from the global header with return state", () => {
    render(
      <MemoryRouter initialEntries={[routes.blog]}>
        <Routes>
          <Route
            path="*"
            element={
              <>
                <SiteHeader />
                <LocationProbe />
              </>
            }
          />
        </Routes>
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole("link", { name: copyAr.common.cvNavLabel }));

    expect(screen.getByTestId("pathname")).toHaveTextContent(routes.cv);
    expect(screen.getByTestId("from")).toHaveTextContent(routes.blog);
  });

  it("uses the CV as the primary Journey action", () => {
    render(
      <MemoryRouter initialEntries={[routes.journey]}>
        <Routes>
          <Route path={routes.journey} element={<Journey />} />
          <Route path={routes.cv} element={<LocationProbe />} />
        </Routes>
      </MemoryRouter>,
    );

    const cvAction = screen.getByRole("link", { name: copyAr.common.cvCta });
    expect(cvAction).toHaveClass("editorial-button--primary");

    fireEvent.click(cvAction);
    expect(screen.getByTestId("pathname")).toHaveTextContent(routes.cv);
    expect(screen.getByTestId("from")).toHaveTextContent(routes.journey);
  });
});
