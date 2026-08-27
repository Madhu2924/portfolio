import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import "../portfolio.css";
import { portfolioHtml } from "@/lib/portfolio-html";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Madhumitha MJ — Data Analyst Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Madhumitha MJ, aspiring data analyst — Power BI, SQL, Python and Excel dashboards including sales, profit and customer insights projects.",
      },
      { property: "og:title", content: "Madhumitha MJ — Data Analyst Portfolio" },
      {
        property: "og:description",
        content:
          "Data analytics projects and dashboards by Madhumitha MJ: Power BI, SQL, Python and Excel.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    let cancelled = false;
    import("@/lib/portfolio-script.js").then((m) => {
      if (!cancelled) (m as { initPortfolio: () => void }).initPortfolio();
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: portfolioHtml }} />;
}
