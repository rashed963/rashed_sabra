import { render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { MemoryRouter } from "react-router-dom";
import SiteHeader from "../../components/SiteHeader";
import { LanguageProvider } from "./LanguageProvider";

afterEach(() => {
  document.documentElement.lang = "ar";
  document.documentElement.dir = "rtl";
});

describe("LanguageProvider", () => {
  it("activates English copy, direction, and equivalent-language navigation", async () => {
    render(
      <MemoryRouter initialEntries={["/en/blog?topic=general"]}>
        <LanguageProvider>
          <SiteHeader />
        </LanguageProvider>
      </MemoryRouter>,
    );

    expect(screen.getByRole("link", { name: "Thinking" })).toHaveAttribute(
      "href",
      "/en/blog",
    );
    expect(screen.getByRole("link", { name: "View the website in Arabic" })).toHaveAttribute(
      "href",
      "/blog?topic=general",
    );
    expect(screen.getByRole("banner").firstElementChild).toHaveAttribute("dir", "ltr");

    await waitFor(() => {
      expect(document.documentElement).toHaveAttribute("lang", "en");
      expect(document.documentElement).toHaveAttribute("dir", "ltr");
    });
  });

  it("mirrors the header container for Arabic", async () => {
    render(
      <MemoryRouter initialEntries={["/blog"]}>
        <LanguageProvider>
          <SiteHeader />
        </LanguageProvider>
      </MemoryRouter>,
    );

    expect(screen.getByRole("banner").firstElementChild).toHaveAttribute("dir", "rtl");

    await waitFor(() => {
      expect(document.documentElement).toHaveAttribute("lang", "ar");
      expect(document.documentElement).toHaveAttribute("dir", "rtl");
    });
  });

  it("sets localized CV titles from the route", async () => {
    render(
      <MemoryRouter initialEntries={["/en/cv"]}>
        <LanguageProvider>
          <div />
        </LanguageProvider>
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(document.title).toBe("Rashed Sabra — Curriculum Vitae");
    });
  });
});
