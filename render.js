const PROJECTS = [
  {
    title: "Vendor Consolidation Analysis",
    status: "live",
    pitch: "A 7-tab Excel financial model and matching interactive HTML dashboard analyzing an enterprise vendor consolidation program across Finance, Risk, and Operations. Includes scenario modeling (Conservative / Base / Aggressive), a live two-variable sensitivity table, and multi-year ROI and break-even logic — 823 formula-driven cells with zero errors.",
    images: [
      { src: "IMG_VENDOR_DASH", caption: "Executive Dashboard — Excel model" },
    ],
    details: {
      "What it demonstrates": [
        "Multi-scenario financial modeling with toggle-driven assumptions",
        "Two-variable sensitivity analysis, fully formula-driven",
        "Department-level budget vs. actual variance analysis",
        "Cross-filtering, drill-through interactive dashboard design",
      ],
      "Files": [
        "Excel model (.xlsx) — 7 tabs, 823 formulas",
        "Interactive HTML dashboard — live, clickable",
        "Walkthrough &amp; methodology guide (.docx)",
        "Power BI data model &amp; DAX reference (.docx)",
      ],
    },
    links: [
      { label: "View Live Dashboard", url: "https://analytics-portfolio-five.vercel.app/", primary: true },
      { label: "Download Excel Model (.xlsx)", url: "https://github.com/cgirvin72/Analytics-Portfolio/raw/main/Vendor_Consolidation_Scenario_Model.xlsx", primary: false },
      { label: "Download Walkthrough Guide (.docx)", url: "https://github.com/cgirvin72/Analytics-Portfolio/raw/main/Vendor_Consolidation_Model_Walkthrough_Guide.docx", primary: false },
      { label: "Download DAX &amp; Data Model Reference (.docx)", url: "https://github.com/cgirvin72/Analytics-Portfolio/raw/main/Power_BI_Data_Model_DAX_Reference.docx", primary: false },
      { label: "View Repo on GitHub", url: "https://github.com/cgirvin72/Analytics-Portfolio", primary: false },
    ],
  },
  {
    title: "Consulting Operations KPI Program",
    status: "new",
    pitch: "A KPI definition and governance framework for a professional services business, paired with a monthly operations review deck. Covers 24 metrics across Revenue, Margin, Workforce, Project Health, and Client Satisfaction — each with a defined formula, data source, owner, and reporting cadence — plus a live calculation tab and 12-month trend charts.",
    images: [
      { src: "IMG_KPI_CATALOG", caption: "KPI Definition &amp; Governance Workbook" },
      { src: "IMG_DECK_OVERVIEW", caption: "Monthly Operations Review — Overview slide" },
      { src: "IMG_DECK_UTIL", caption: "Monthly Operations Review — Utilization trend" },
    ],
    details: {
      "What it demonstrates": [
        "Metric governance: definition, formula, owner, and cadence before any dashboard is built",
        "Earned value management (EVM) metrics — CPI, SPI, schedule and cost variance",
        "Original presentation design system (not a template)",
        "A documented 30/60/90 methodology for building a metrics program from zero",
      ],
      "Files": [
        "KPI Definition &amp; Governance Workbook (.xlsx)",
        "Consulting Operations Monthly Review deck (.pptx)",
        "Methodology note (.docx)",
      ],
    },
    links: [
      { label: "Download Workbook (.xlsx)", url: "KPI_Definition_Governance_Workbook.xlsx", primary: true },
      { label: "Download Deck (.pptx)", url: "Consulting_Operations_Monthly_Review.pptx", primary: false },
      { label: "Download Methodology Note (.docx)", url: "KPI_Program_Methodology_Note.docx", primary: false },
    ],
  },
];

function renderProjects() {
  const main = document.getElementById("projects");
  main.innerHTML = PROJECTS.map(p => {
    const statusHtml = p.status === "live"
      ? `<span class="status-badge status-live"><span class="status-dot"></span> Live Demo</span>`
      : `<span class="status-badge status-live"><span class="status-dot"></span> New</span>`;

    const imagesHtml = p.images.map(img => `
      <img src="${window[img.src]}" alt="${img.caption}">
      <div class="preview-caption">${img.caption}</div>
    `).join("");

    const detailsHtml = Object.entries(p.details).map(([heading, items]) => `
      <h4>${heading}</h4>
      <ul>${items.map(i => `<li>${i}</li>`).join("")}</ul>
    `).join("");

    const linksHtml = p.links.map(l => `
      <a class="btn ${l.primary ? 'btn-primary' : 'btn-secondary'}" href="${l.url}" target="_blank">${l.label}</a>
    `).join("");

    return `
      <div class="project">
        <div class="project-header">
          <div class="project-title">${p.title}</div>
          ${statusHtml}
        </div>
        <div class="project-pitch">${p.pitch}</div>
        <div class="project-body">
          <div class="preview-stack">${imagesHtml}</div>
          <div class="project-details">
            ${detailsHtml}
            <div class="links-row">${linksHtml}</div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

renderProjects();
