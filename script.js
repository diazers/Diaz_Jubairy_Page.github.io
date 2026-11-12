(() => {
  "use strict";

  const config = window.PORTFOLIO_CONFIG || {};
  const projectData = [
    {
      id: "fmcg-bi",
      number: "01",
      category: "bi",
      categoryLabel: "BUSINESS INTELLIGENCE",
      title: "FMCG Business Intelligence & Commercial Analytics",
      url: "https://app.powerbi.com/view?r=eyJrIjoiNmUxNjljZTEtYzM4Zi00ZDdkLWIxZGUtMTFlODUxYzJkZDlhIiwidCI6IjUyMGViNzg5LThmNmQtNGEyZC1hMWMyLTlhNWM1YmUyOWU1MSIsImMiOjEwfQ%3D%3D",
      summary: "Turning commercial and operational data into reporting that helps teams monitor performance, validate information, and make better day-to-day decisions.",
      question: "How can business teams get a more consistent view of outlet, distributor, pricing, merchandising, and incentive performance?",
      approach: "Contributed to SQL-based reporting and Power BI dashboards, supported data validation and ETL activities, and worked with cross-functional stakeholders to align reporting outputs with operational requirements.",
      outcome: "A practical BI portfolio case study demonstrating business context, reporting workflows, data quality, and stakeholder collaboration. Add approved, non-confidential examples or recreated sample reports before publishing.",
      tools: ["Power BI", "SQL", "DAX", "Power Query", "Excel", "Data validation"],
      skills: ["Power BI & DAX", "SQL", "Power Query & Excel", "Data validation", "Business reporting"],
      visual: "fmcg",
      screenshots: [
        { src: "assets/projects/dashboard-ss-1.png", alt: "FMCG commercial performance dashboard screenshot", caption: "Commercial performance dashboard" },
        { src: "assets/projects/dashboard-ss-2.png", alt: "FMCG outlet or distributor analysis screenshot", caption: "Outlet & distributor analysis" }
      ],
      links: [
        { label: "Add sanitized dashboard", url: "", note: "Add only an approved public or anonymized report link." },
        { label: "Add project write-up", url: "", note: "Optional case-study document." }
      ],
    },
    {
      id: "jakarta-aqi",
      number: "02",
      category: "analytics",
      categoryLabel: "DATA ANALYTICS & STORYTELLING",
      title: "Jakarta Historical Air Quality Analytics",
      url: "https://public.tableau.com/app/profile/diaz.jubairy/viz/15YearsofJakartaAQI/PAGE1",
      summary: "Exploring more than 15 years of daily air-quality observations to understand long-term pollution patterns, pollutant behavior, and changes across monitoring locations.",
      question: "How has Jakarta's air quality changed over time, and which pollutants, stations, and periods deserve closer attention?",
      approach: "Collected and standardized historical air-quality records from sources including Indonesian public data and air-quality services. Processed inconsistent JSON and tabular structures, normalized station and pollutant fields, handled missing values, and developed analytical views and dashboards.",
      outcome: "An end-to-end analytical case study that demonstrates data acquisition, historical data preparation, exploratory analysis, time-series visualization, and data storytelling. Add verified findings and dashboard links from your published work.",
      tools: ["Python", "Polars", "Pandas", "Tableau", "Power BI", "Data visualization"],
      skills: ["Python & Polars", "Power BI & DAX", "Tableau", "EDA & data storytelling", "Data validation"],
      visual: "aqi",
      screenshots: [
        { src: "assets/projects/tableau-ss-1.png", alt: "Jakarta historical air quality dashboard screenshot", caption: "Historical AQI trends" },
        { src: "assets/projects/tableau-ss-2.png", alt: "Jakarta pollutant or station analysis screenshot", caption: "Pollutant & station analysis" }
      ],
      links: [
        { label: "View Tableau dashboard", url: "", configKey: "tableauUrl" },
        { label: "View Power BI report", url: "", configKey: "powerbiUrl" },
        { label: "View source code", url: "", note: "Add the relevant GitHub repository." }
      ],
    },
    {
      id: "fabric-pipeline",
      number: "03",
      category: "engineering",
      categoryLabel: "DATA ENGINEERING",
      title: "Real-time Air Quality Data Pipeline",
      url: "https://jakarta-aqi-dashboard-app-diaz.streamlit.app/Live_Overview",
      summary: "Designing a repeatable ingestion and transformation flow for incoming air-quality observations, from API collection to analytical storage.",
      question: "How can recurring API data be ingested, transformed, and organized reliably without relying on a long-running notebook loop?",
      approach: "Developed a pipeline concept using Python for data acquisition, Eventstream for ingestion, Eventhouse and KQL for raw and transformed data, and a Lakehouse for analytical storage. Work includes Bronze/Silver layer design, schema normalization, timezone handling, and duplicate-management considerations.",
      outcome: "Demonstrates understanding of event-driven ingestion, layered data architecture, KQL transformations, and the practical reliability issues involved in operational data pipelines.",
      tools: ["Microsoft Fabric", "Python", "Eventstream", "Eventhouse", "KQL", "Lakehouse", "Delta Lake"],
      skills: ["Python & Polars", "Microsoft Fabric", "KQL", "Spark & Delta Lake", "ETL & data modeling"],
      visual: "pipeline",
      screenshots: [
        { src: "assets/projects/jakarta-aqi-live-dashboard.png", alt: "Live Jakarta air quality dashboard showing station map and current AQI summary", caption: "Live AQI dashboard" },
        { src: "assets/projects/jakarta-aqi-architecture.png", alt: "Architecture diagram of the Jakarta AQI data collection, ingestion, storage, and Streamlit application", caption: "End-to-end system architecture" }
      ],
      links: [
        { label: "View architecture notes", url: "", note: "Add an architecture diagram or technical write-up." },
        { label: "View source code", url: "", note: "Add the relevant GitHub repository." }
      ],
    },
    {
      id: "data-automation",
      number: "04",
      category: "engineering",
      categoryLabel: "DATA PREPARATION & AUTOMATION",
      title: "Automated Data Processing Workflows",
      summary: "Reducing repetitive preparation work by building reusable scripts for file conversion, source normalization, cleaning, and structured data preparation.",
      question: "How can recurring and inconsistent source files be transformed into a predictable dataset with less manual effort?",
      approach: "Used Python data workflows to handle multiple file structures, normalize column names, standardize date formats, preserve missing-value information, combine historical files, and prepare data for analysis and downstream storage.",
      outcome: "A practical demonstration of automation thinking, reproducible data preparation, handling inconsistent source formats, and building repeatable workflows.",
      tools: ["Python", "Polars", "Pandas", "JSON", "Excel", "pywin32"],
      skills: ["Python & Polars", "ETL & data modeling", "Data validation"],
      visual: "automation",
      screenshots: [
        { src: "assets/projects/KLHK REAL TIME DASHBOARD.png", alt: "Automated data preparation workflow screenshot", caption: "Automated processing workflow" },
        { src: "assets/projects/ChatGPT Image 3 Okt 2025, 15.12.46.png", alt: "Data validation or transformation output screenshot", caption: "Validation & transformation output" }
      ],
      links: [
        { label: "View source code", url: "", note: "Add the relevant GitHub repository." },
        { label: "View documentation", url: "", note: "Add a notebook or technical explanation." }
      ],
    },

    {
      id: "workforce-operations-bi",
      number: "05",
      category: "bi",
      categoryLabel: "WORKFORCE ANALYTICS & BUSINESS INTELLIGENCE",
      title: "Workforce Operations & Revenue Analytics",
      url: "https://app.powerbi.com/view?r=eyJrIjoiNWIxYjhmZmItODM5Zi00YjliLWJjNWYtY2FhYzgyZTE0MTA1IiwidCI6IjUyMGViNzg5LThmNmQtNGEyZC1hMWMyLTlhNWM1YmUyOWU1MSIsImMiOjEwfQ%3D%3D",
      summary: "Transforming workforce and operational data into interactive business intelligence, providing visibility into worker revenue, job category distribution, employment quotas, geographic coverage, and workforce performance across Indonesian cities.",
      question: "How can workforce operations be monitored more effectively by connecting worker revenue, job distribution, employment activity, and geographic coverage in a unified analytical view?",
      approach: "Developed interactive Power BI dashboards to analyze workforce operations from multiple perspectives. Combined worker-level revenue analysis, salary periods, job category performance, domicile distribution, employment quotas, job posting activity, and worker status monitoring. Incorporated geographic mapping, KPI reporting, trend analysis, and interactive filters to support exploration across cities, job categories, workers, and reporting periods.",
      outcome: "Demonstrates practical business intelligence capabilities in workforce analytics, including operational KPI development, revenue analysis, workforce segmentation, geographic visualization, and interactive reporting. Provides stakeholders with a consolidated view of workforce activity and operational performance.",
      tools: ["Power BI", "DAX", "Power Query", "Excel", "Geospatial Visualization", "Data Modeling"],
      skills: ["Power BI & DAX", "Power Query & Excel", "EDA & data storytelling", "Business reporting", "Data validation"],
      visual: "fmcg",
      screenshots: [
        {
          src: "assets/projects/workforce-company-ss1.png",
          alt: "Workforce revenue dashboard showing worker revenue by salary period, worker revenue summary, domicile popularity, geographic distribution, and job category popularity",
          caption: "Worker revenue & geographic distribution"
        },
        {
          src: "assets/projects/workforce-company-ss2.png",
          alt: "Workforce analytics dashboard showing revenue percentage by job category, city distribution, salary period, employment quota, and job category performance",
          caption: "Job category & employment analysis"
        }
      ],

      links: [
        {
          label: "View Power BI dashboard",
          url: "",
          note: "Add your published Power BI report URL."
        },
        {
          label: "View source code",
          url: "",
          note: "Add the relevant GitHub repository if available."
        },
        {
          label: "View documentation",
          url: "",
          note: "Add the project methodology or analytical documentation."
        }
      ],

      disclosure: "Independent or professional BI case study, as applicable. Anonymize worker identities, personal information, and confidential company financial data before public publication."
    },

    {
      id: "bps-housing-2019",
      number: "06",
      category: "analytics",
      categoryLabel: "PUBLIC SECTOR & GEOSPATIAL ANALYTICS",
      title: "Indonesia Housing Statistics 2019 — Regional & Housing Insights",
      url: "https://app.powerbi.com/view?r=eyJrIjoiODA1MzYxMzgtMDVlMy00ZDVmLTkxNWQtMDlmYmViNThkYTFhIiwidCI6IjUyMGViNzg5LThmNmQtNGEyZC1hMWMyLTlhNWM1YmUyOWU1MSIsImMiOjEwfQ%3D%3D&pageName=ReportSection9f54fc1fbf4c4395eeb2",
      summary: "Transforming Indonesia's 2019 housing statistics from Badan Pusat Statistik (BPS) into interactive insights on housing acquisition, financing preferences, homeownership preparation, and regional differences across provinces.",
      question: "How do housing acquisition patterns, financing preferences, and homeownership preparation differ across Indonesian provinces and between urban and rural areas?",
      approach: "Developed an interactive Power BI dashboard using BPS 2019 housing statistics. Designed analytical views to explore housing acquisition methods, payment preferences, homeownership preparation, average mortgage installments, and financing periods. Incorporated provincial and settlement-type filters alongside geographic visualizations to support regional comparisons and exploration.",
      outcome: "Demonstrates the ability to translate official statistical data into an accessible analytical product, combining demographic and housing indicators, interactive filtering, KPI reporting, and geospatial visualization to support a better understanding of Indonesia's housing landscape.",
      tools: ["Power BI", "DAX", "Power Query", "Excel", "BPS Statistical Data", "Geospatial Visualization"],
      skills: ["Power BI & DAX", "EDA & data storytelling", "Business reporting", "Data validation"],
      visual: "automation",
      screenshots: [
      {src: "assets/projects/bps-housing-2019-overview.png", alt: "Indonesia BPS 2019 housing statistics dashboard showing housing acquisition methods, payment preferences, mortgage indicators, and provincial comparisons", caption: "Housing acquisition, financing & ownership patterns"},
      {src: "assets/projects/bps-housing-2019-geographic.png", alt: "Power BI geographic housing dashboard showing provincial and urban-rural filters with regional housing statistics", caption: "Provincial & urban-rural analysis"}
    ],
    links: [
      {label: "View Power BI dashboard", url: "", note: "Add your published Power BI report URL."},
      {label: "View source code", url: "", note: "Add the relevant GitHub repository if available."},
      {label: "View documentation", url: "", note: "Add the project methodology or data source documentation."}
    ],
    disclosure: "Independent BI project using official Indonesian housing statistics from Badan Pusat Statistik (BPS), 2019. Cite the original statistical publication and dataset when publishing."
  },
  ];

  const skills = [
    "Power BI & DAX",
    "SQL",
    "Power Query & Excel",
    "Tableau",
    "Python & Polars",
    "Microsoft Fabric",
    "KQL",
    "Spark & Delta Lake",
    "ETL & data modeling",
    "EDA & data storytelling",
    "Data validation",
    "Business reporting"
  ];

  function setConfiguredText() {
    document.querySelectorAll("[data-config]").forEach((element) => {
      const key = element.getAttribute("data-config");
      const value = config[key];
      if (typeof value === "string" && value.trim()) element.textContent = value;
    });

    document.querySelectorAll("[data-config-link]").forEach((element) => {
      const key = element.getAttribute("data-config-link");
      const value = config[key];
      if (typeof value === "string" && value.trim()) {
        element.href = value;
      } else {
        element.classList.add("is-placeholder-link");
        element.addEventListener("click", (event) => {
          event.preventDefault();
          document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
        });
      }
    });

    const email = (config.email || "your.email@example.com").trim();
    const emailLink = document.getElementById("contact-email");
    if (emailLink) {
      emailLink.textContent = `${email} ↗`;
      emailLink.href = `mailto:${email}`;
    }

    const portrait = document.getElementById("profile-photo");
    const portraitFallback = document.getElementById("profile-photo-fallback");
    if (portrait && portraitFallback && typeof config.portraitUrl === "string" && config.portraitUrl.trim()) {
      portrait.src = config.portraitUrl.trim();
      portrait.hidden = false;
      portrait.addEventListener("error", () => {
        portrait.hidden = true;
        portraitFallback.hidden = false;
      }, { once: true });
      portraitFallback.hidden = true;
      const configuredAlt = config.portraitAlt || `Professional portrait of ${config.name || "portfolio owner"}`;
      portrait.alt = configuredAlt;
    }

    const year = document.getElementById("current-year");
    if (year) year.textContent = new Date().getFullYear();

    const socialLinks = [
      { label: "LinkedIn", url: config.linkedinUrl },
      { label: "GitHub", url: config.githubUrl }
    ].filter((item) => item.url);

    const heroSocials = document.getElementById("hero-socials");
    const contactLinks = document.getElementById("contact-links");
    socialLinks.forEach((item) => {
      const link = document.createElement("a");
      link.href = item.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = `${item.label} ↗`;
      heroSocials?.appendChild(link.cloneNode(true));
      contactLinks?.appendChild(link);
    });
  }

  function projectLinkMarkup(project) {
    const links = project.links.map((item) => {
      const url = item.configKey ? config[item.configKey] : item.url;
      if (url) {
        return `<a class="project-link" href="${escapeAttribute(url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(item.label)} <span>↗</span></a>`;
      }
      return `<span class="project-link project-link-placeholder" title="${escapeAttribute(item.note || "Add a URL in script.js")}">${escapeHTML(item.label)} <span>＋</span></span>`;
    }).join("");
    return `<div class="project-links">${links}</div>`;
  }

  function projectScreenshotGallery(project) {
    const screenshots = Array.isArray(project.screenshots) ? project.screenshots : [];
    if (!screenshots.length) return "";
    const items = screenshots.map((shot, index) => {
      const caption = escapeHTML(shot.caption || `Project screenshot ${index + 1}`);
      const alt = escapeAttribute(shot.alt || caption);
      if (shot.src) {
        const src = escapeAttribute(shot.src);
        return `<figure class="project-screenshot">
          <a class="project-screenshot-link" href="${src}" target="_blank" rel="noopener noreferrer" aria-label="Open full-size image: ${caption}">
            <img src="${src}" alt="${alt}" loading="lazy">
            <span class="screenshot-expand" aria-hidden="true">↗</span>
          </a>
          <figcaption>${caption}</figcaption>
        </figure>`;
      }
      return `<figure class="project-screenshot project-screenshot-placeholder">
        <div class="screenshot-placeholder-art" role="img" aria-label="${alt}">
          <span class="screenshot-placeholder-icon">▧</span>
          <span>SCREENSHOT ${String(index + 1).padStart(2, "0")}</span>
          <small>Add your project image</small>
        </div>
        <figcaption>${caption} <em>· image to add</em></figcaption>
      </figure>`;
    }).join("");
    return `<div class="project-gallery" aria-label="${escapeAttribute(project.title)} screenshots">
      <div class="project-gallery-heading"><span>PROJECT SCREENSHOTS</span><span>${screenshots.length} VIEWS</span></div>
      <div class="project-gallery-grid">${items}</div>
    </div>`;
  }

  function projectCard(project) {
    const tools = project.tools.map((tool) => `<span>${escapeHTML(tool)}</span>`).join("");
    return `
      <article class="project-card" data-category="${project.category}" id="${project.id}">
        <div class="project-body">
          <div class="project-title-row"><span class="project-number">${project.number}</span><span class="project-category">${escapeHTML(project.categoryLabel)}</span></div>
          <h3>
            ${
              project.url
                ? `<a href="${escapeAttribute(project.url)}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="project-title-link">
                    ${escapeHTML(project.title)} ↗
                  </a>`
                : escapeHTML(project.title)
            }
          </h3>
          <p class="project-summary">${escapeHTML(project.summary)}</p>
          ${projectScreenshotGallery(project)}
          <div class="project-question"><span>THE QUESTION</span><p>${escapeHTML(project.question)}</p></div>
          <div class="project-detail-grid">
            <div><span class="detail-label">APPROACH</span><p>${escapeHTML(project.approach)}</p></div>
            <div><span class="detail-label">WHAT IT DEMONSTRATES</span><p>${escapeHTML(project.outcome)}</p></div>
          </div>
          <div class="tag-list project-tags">${tools}</div>
          ${projectLinkMarkup(project)}
        </div>
      </article>`;
  }

  function visualMarkup(kind) {
    const visuals = {
      fmcg: `<div class="mock-dashboard fmcg-dashboard"><div class="mock-kpis"><i><b>Sales</b><strong>•••</strong></i><i><b>Outlets</b><strong>•••</strong></i><i><b>Coverage</b><strong>•••</strong></i></div><div class="mock-chart"><div class="mock-y-axis"><i></i><i></i><i></i></div><div class="mock-line"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div></div><div class="mock-legend"><i></i> Performance trend <i></i> Target</div></div>`,
      aqi: `<div class="aqi-board"><div class="aqi-readout"><small>PM₂.₅ · HISTORICAL VIEW</small><strong>2010—2025</strong><span>DAILY OBSERVATIONS</span></div><div class="aqi-bars"><i style="--bar:33%"></i><i style="--bar:46%"></i><i style="--bar:28%"></i><i style="--bar:62%"></i><i style="--bar:54%"></i><i style="--bar:81%"></i><i style="--bar:68%"></i><i style="--bar:92%"></i><i style="--bar:58%"></i><i style="--bar:76%"></i><i style="--bar:48%"></i><i style="--bar:86%"></i></div><div class="aqi-months"><span>2010</span><span>2015</span><span>2020</span><span>2025</span></div></div>`,
      pipeline: `<div class="pipeline-board"><div class="pipeline-node"><b>API</b><small>Source</small></div><span class="pipeline-arrow">→</span><div class="pipeline-node"><b>Bronze</b><small>Raw data</small></div><span class="pipeline-arrow">→</span><div class="pipeline-node"><b>Silver</b><small>Validated</small></div><span class="pipeline-arrow">→</span><div class="pipeline-node"><b>Lakehouse</b><small>Analytics</small></div><div class="pipeline-caption">INGESTION · TRANSFORMATION · STORAGE</div></div>`,
      automation: `<div class="automation-board"><div class="automation-file"><span>JSON</span><b>Source files</b></div><span class="automation-arrow">↓</span><div class="automation-steps"><i>Normalize</i><i>Validate</i><i>Transform</i></div><span class="automation-arrow">↓</span><div class="automation-output"><span>✓</span><b>Analysis-ready dataset</b></div></div>`
    };
    return visuals[kind] || "";
  }

  function renderProjects(filter = "all") {
    const container = document.getElementById("project-list");
    if (!container) return;
    const filtered = projectData.filter((project) => filter === "all" || project.category === filter);
    container.innerHTML = filtered.map(projectCard).join("");
  }

  function renderMatrix() {
    const container = document.getElementById("skills-matrix");
    if (!container) return;
    const projectHeaders = projectData.map((project) => `<button type="button" class="matrix-project-button" data-project-select="${project.id}" aria-pressed="false"><span>${project.number}</span>${escapeHTML(shortTitle(project.title))}</button>`).join("");
    const rows = skills.map((skill) => {
      const cells = projectData.map((project) => {
        const active = project.skills.includes(skill);
        return `<td class="matrix-cell ${active ? "is-used" : ""}" data-project-cell="${project.id}">${active ? "✓" : "–"}</td>`;
      }).join("");
      return `<tr><th scope="row">${escapeHTML(skill)}</th>${cells}</tr>`;
    }).join("");
    container.innerHTML = `<table class="skills-table"><thead><tr><th scope="col">SKILL / METHOD</th>${projectHeaders}</tr></thead><tbody>${rows}</tbody></table>`;
    container.querySelectorAll("[data-project-select]").forEach((button) => {
      button.addEventListener("click", () => {
        const chosen = button.getAttribute("data-project-select");
        const alreadySelected = button.getAttribute("aria-pressed") === "true";
        container.querySelectorAll("[data-project-select]").forEach((item) => item.setAttribute("aria-pressed", "false"));
        container.querySelectorAll("[data-project-cell]").forEach((cell) => cell.classList.remove("is-highlighted"));
        if (!alreadySelected) {
          button.setAttribute("aria-pressed", "true");
          container.querySelectorAll(`[data-project-cell="${chosen}"]`).forEach((cell) => cell.classList.add("is-highlighted"));
        }
      });
    });
  }

  function shortTitle(value) {
    const names = {
      "FMCG Business Intelligence & Commercial Analytics": "FMCG BI",
      "Jakarta Historical Air Quality Analytics": "Jakarta AQI",
      "Real-time Air Quality Data Pipeline": "Fabric pipeline",
      "Automated Data Processing Workflows": "Automation"
    };
    return names[value] || value;
  }

  function setupFilters() {
    document.querySelectorAll(".filter-button").forEach((button) => {
      button.addEventListener("click", () => {
        document.querySelectorAll(".filter-button").forEach((item) => {
          item.classList.remove("is-active");
          item.setAttribute("aria-pressed", "false");
        });
        button.classList.add("is-active");
        button.setAttribute("aria-pressed", "true");
        renderProjects(button.dataset.filter || "all");
      });
    });
  }

  function setupNavigation() {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.getElementById("primary-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
      nav.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("nav-open", !isOpen);
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
      nav.classList.remove("is-open");
      document.body.classList.remove("nav-open");
    }));
  }

  function setupRoleTicker() {
    const target = document.getElementById("role-ticker-text");
    const roles = Array.isArray(config.roleVariants) && config.roleVariants.length
      ? config.roleVariants.filter((role) => typeof role === "string" && role.trim())
      : ["Business Intelligence", "Data Analytics", "Data Engineering"];
    if (!target || roles.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let index = 0;
    window.setInterval(() => {
      index = (index + 1) % roles.length;
      target.classList.add("is-changing");
      window.setTimeout(() => {
        target.textContent = roles[index];
        target.classList.remove("is-changing");
      }, 180);
    }, 2600);
  }

  function setupHeader() {
    const header = document.querySelector(".site-header");
    const update = () => header?.classList.toggle("is-scrolled", window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
  }
  function escapeAttribute(value) { return escapeHTML(value); }

  setConfiguredText();
  renderProjects();
  renderMatrix();
  setupFilters();
  setupNavigation();
  setupHeader();
  setupRoleTicker();
})();
