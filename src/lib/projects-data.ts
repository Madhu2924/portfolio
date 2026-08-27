export type ProjectSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Project = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  tools: string[];
  kpis: { value: string; label: string }[];
  sections: ProjectSection[];
};

export const projects: Record<string, Project> = {
  "call-center-analytics": {
    slug: "call-center-analytics",
    title: "Call Center Analytics Dashboard",
    kicker: "Excel · Case Study",
    summary:
      "An interactive Excel dashboard built on 1,000 customer service calls that turns raw call logs into rep performance, revenue and satisfaction insights.",
    tools: ["Excel", "PivotTables", "PivotCharts", "Slicers", "Conditional Formatting"],
    kpis: [
      { value: "1,000", label: "Calls analysed" },
      { value: "$96.6K", label: "Purchase amount" },
      { value: "3.89", label: "Avg. satisfaction" },
      { value: "5", label: "Representatives" },
    ],
    sections: [
      {
        heading: "The business question",
        paragraphs: [
          "A call centre wanted to know which representatives actually drive revenue, how call duration relates to customer satisfaction, and when demand peaks during the week.",
          "The raw export was a flat log of 1,000 calls across FY2023–FY2024 with call duration, purchase amount, satisfaction rating, representative ID and a separate customer table holding gender, age and city.",
        ],
      },
      {
        heading: "What I built",
        bullets: [
          "Cleaned the raw log: standardised dates, removed blanks, and created helper columns for financial year, day of week, duration buckets and rounded rating.",
          "Joined the call log to the customer table on Customer ID to bring demographics (gender, age, city) into the analysis.",
          "Built a PivotTable layer summarising call count, total purchase amount, total duration, average rating and count of 5-star calls.",
          "Designed a Dashboard sheet with KPI cards, a monthly call-trend line chart, a representative performance bar chart and a city breakdown.",
          "Added slicers for representative, financial year and day of week so the whole dashboard filters interactively.",
        ],
      },
      {
        heading: "Insights found",
        bullets: [
          "Revenue is close to evenly spread across the five reps ($16.7K–$20.9K), so headline totals hide performance gaps — average rating and calls handled separate them better.",
          "Average satisfaction sits at 3.89 / 5 with 307 five-star calls, meaning roughly a third of calls delight customers while the rest are merely acceptable.",
          "Longer duration buckets do not consistently produce higher ratings, suggesting resolution quality matters more than time spent.",
          "Call volume clusters on specific weekdays, giving a clear signal for staffing schedules.",
        ],
      },
      {
        heading: "Skills demonstrated",
        paragraphs: [
          "Data cleaning and modelling in Excel, KPI definition, PivotTable/PivotChart design, lookup joins across tables, and building a single-screen dashboard that a non-analyst can operate with slicers.",
        ],
      },
    ],
  },
  "business-sales-profit-insights": {
    slug: "business-sales-profit-insights",
    title: "Business Sales, Profit & Customer Insights Dashboard",
    kicker: "Analytics · Case Study",
    summary:
      "An end-to-end sales and profitability dashboard over 8,300+ retail orders (2021–2024), showing where revenue grows, where margin leaks, and who the best customers are.",
    tools: ["Excel", "PivotTables", "Power BI", "SQL", "Data Modeling"],
    kpis: [
      { value: "$1.93M", label: "Total sales" },
      { value: "$248K", label: "Total profit" },
      { value: "12.9%", label: "Profit margin" },
      { value: "789", label: "Customers" },
    ],
    sections: [
      {
        heading: "The business question",
        paragraphs: [
          "Sales were growing, but leadership could not say which categories and regions actually made money. The goal was one dashboard that answers: where do we sell, where do we profit, and who keeps coming back?",
          "The dataset covers 8,314 order lines from 2021 to 2024 across 49 states, 3 categories, 17 sub-categories, 31,500 units sold and 789 unique customers.",
        ],
      },
      {
        heading: "What I built",
        bullets: [
          "Cleaned and structured the transaction table (order date, customer, state, category, sub-category, product, sales, quantity, profit) and added month/year fields for time analysis.",
          "Defined the KPI layer: total sales, total profit, profit margin, order volume, average order value and units sold.",
          "Built breakdowns by category, sub-category, state and month, plus a sales-vs-profit trend to expose seasonality.",
          "Created a customer insights view ranking top customers by revenue and repeat orders.",
          "Wired year, region and category filters so stakeholders self-serve instead of requesting new reports.",
        ],
      },
      {
        heading: "Insights found",
        bullets: [
          "Technology is the strongest segment: $704K sales and $122K profit — the highest margin of the three categories.",
          "Furniture is the trap: $622K in sales but only $17.9K profit (~2.9% margin), meaning nearly a third of revenue contributes almost nothing to the bottom line.",
          "Office Supplies quietly outperforms Furniture on profit ($108K on $602K sales) despite similar revenue.",
          "Sales concentrate geographically — California ($390K) and New York ($247K) alone account for roughly a third of revenue, so regional risk is high.",
          "Monthly trends show recurring year-end peaks, which is the window where discounting decisions matter most to margin.",
        ],
      },
      {
        heading: "Recommendations",
        bullets: [
          "Review pricing and discounting on low-margin Furniture sub-categories before chasing more volume.",
          "Reinvest in Technology and high-margin Office Supplies lines where each extra dollar of sales returns far more profit.",
          "Build retention offers for the top repeat customers, who deliver revenue at no acquisition cost.",
        ],
      },
      {
        heading: "Skills demonstrated",
        paragraphs: [
          "Data cleaning, dimensional thinking (product / geography / customer / time), KPI and margin analysis, dashboard layout and storytelling, and translating numbers into concrete business recommendations.",
        ],
      },
    ],
  },
};
