// Portfolio markup (authored as HTML, injected at render time).
import profileAsset from "@/assets/profile.jpg.asset.json";

export const portfolioHtml = `


<canvas id="bgCanvas"></canvas>


<header class="nav" id="nav">
  <div class="nav-inner">
    <a href="#home" class="brand">
      <span class="brand-mark">M</span><span class="brand-name">Madhumitha<span class="dot">.</span></span>
    </a>
    <nav class="nav-links" id="navLinks">
      <a href="#about">About</a>
      <a href="#education">Education</a>
      <a href="#experience">Experience</a>
      <a href="#skills">Skills</a>
      <a href="#services">Services</a>
      <a href="#projects">Projects</a>
      <a href="#certifications">Certifications</a>
      <a href="#contact">Contact</a>
    </nav>
    <div class="nav-actions">
      <button id="themeToggle" class="icon-btn" aria-label="Toggle dark mode" title="Toggle theme">
        <svg class="i-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
        <svg class="i-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
      </button>
      <a href="#contact" class="btn btn-primary btn-sm nav-cta">Hire Me</a>
      <button class="icon-btn menu-btn" id="menuBtn" aria-label="Menu">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
      </button>
    </div>
  </div>
</header>


<section class="hero" id="home">
  <div class="hero-shapes" aria-hidden="true">
    <span class="shape s1"></span><span class="shape s2"></span><span class="shape s3"></span>
    <svg class="net" viewBox="0 0 800 600" aria-hidden="true">
      <g class="net-lines" stroke="url(#g1)" stroke-width="1">
        <line x1="60" y1="80" x2="240" y2="160"/><line x1="240" y1="160" x2="180" y2="320"/>
        <line x1="240" y1="160" x2="420" y2="120"/><line x1="420" y1="120" x2="560" y2="220"/>
        <line x1="180" y1="320" x2="360" y2="380"/><line x1="360" y1="380" x2="560" y2="220"/>
        <line x1="560" y1="220" x2="720" y2="140"/><line x1="360" y1="380" x2="520" y2="480"/>
      </g>
      <defs><linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2563EB"/><stop offset="1" stop-color="#06B6D4"/></linearGradient></defs>
      <g class="net-dots" fill="#2563EB">
        <circle cx="60" cy="80" r="4"/><circle cx="240" cy="160" r="5"/><circle cx="180" cy="320" r="4"/>
        <circle cx="420" cy="120" r="4"/><circle cx="560" cy="220" r="5"/><circle cx="360" cy="380" r="4"/>
        <circle cx="720" cy="140" r="4"/><circle cx="520" cy="480" r="4"/>
      </g>
    </svg>
  </div>

  <div class="hero-inner">
    <div class="hero-card glass">
      <div class="badge"><span class="dot-live"></span>Open to Data Analyst opportunities</div>

      <div class="hero-grid">
        <div class="hero-copy">
          <h1>Hi, I'm Madhumitha MJ<span class="cursor-copyright">™</span></h1>
          <p class="headline">Aspiring <span id="typedRole">Data Analyst</span><span class="caret">|</span></p>
          <p class="intro">I am a final-year Computer Science and Business Systems student with a strong interest in Data Analytics. I enjoy learning new technologies, solving real-world problems using data, and continuously improving my analytical and technical skills through projects and internships.</p>
          <div class="hero-actions">
            <a href="/resume.pdf" class="btn btn-dark" download="Madhumitha_MJ_Resume.pdf">Download Resume</a>
            <a href="#skills" class="btn btn-outline">View Skills</a>
            <a href="#contact" class="btn btn-ghost">Contact Me →</a>
          </div>
        </div>

        <div class="hero-side">
          <div class="id-card">
            <div class="id-photo">
              <img src="__PROFILE__" alt="Madhumitha MJ" onerror="this.parentElement.classList.add('no-photo')">
              <span class="ph-initials">MM</span>
            </div>
            <div class="id-meta">
              <strong>Madhumitha MJ</strong>
              <span>Arjun College of Technology</span>
              <span class="loc">📍 Dindigul, Tamil Nadu, India</span>
            </div>
          </div>

          <div class="kpi-card">
            <div class="kpi-head">
              <span class="kpi-title">📊 Call Center Dashboard.xlsx</span>
              <span class="kpi-live">LIVE</span>
            </div>
            <div class="kpi-grid">
              <div class="kpi"><span class="kpi-num" data-count="200">0</span><span class="kpi-label">Calls Analyzed</span></div>
              <div class="kpi"><span class="kpi-num" data-count="3">0</span><span class="kpi-label">Cities</span></div>
              <div class="kpi"><span class="kpi-num" data-count="5">0</span><span class="kpi-label">Reps Tracked</span></div>
              <div class="kpi"><span class="kpi-num" data-count="4" data-decimal="7">0</span><span class="kpi-label">Avg CSAT</span></div>
            </div>
            <div class="kpi-bars" aria-hidden="true">
              <span style="--h:40%"></span><span style="--h:65%"></span><span style="--h:50%"></span>
              <span style="--h:80%"></span><span style="--h:58%"></span><span style="--h:72%"></span><span style="--h:45%"></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="scroll-cue" aria-hidden="true"><span></span></div>
  </div>
</section>


<section class="section" id="about">
  <div class="container about-grid">
    <div class="reveal">
      <p class="eyebrow">About Me</p>
      <h2>Turning raw data into decisions worth making</h2>
      <p class="lead">I am a final-year Computer Science and Business Systems student passionate about Data Analytics and Business Intelligence. I enjoy transforming raw data into meaningful insights that support better decision-making.</p>
      <p>Currently, I am strengthening my knowledge in Python, SQL, Excel, Power BI, and Data Visualization while gaining real-world experience through internships. I believe in continuous learning, teamwork, curiosity, and solving business problems through data. My long-term goal is to become a skilled Data Analyst capable of delivering valuable insights that help organizations make informed decisions.</p>
    </div>
    <div class="about-cards reveal">
      <div class="mini-card"><span class="mini-ic">🧠</span><h3>Analytical Mindset</h3><p>Breaking messy datasets into clear, decision-ready stories.</p></div>
      <div class="mini-card"><span class="mini-ic">📚</span><h3>Continuous Learning</h3><p>Always picking up the next tool, query, or technique.</p></div>
      <div class="mini-card"><span class="mini-ic">🧩</span><h3>Problem-Solving</h3><p>Comfortable working backwards from a business question to data.</p></div>
      <div class="mini-card"><span class="mini-ic">🔍</span><h3>Curiosity</h3><p>Asks "why" until the numbers actually make sense.</p></div>
      <div class="mini-card"><span class="mini-ic">🤝</span><h3>Collaboration</h3><p>Works well across teams to turn insight into action.</p></div>
      <div class="mini-card"><span class="mini-ic">🎯</span><h3>Career Objective</h3><p>Becoming a Data Analyst who delivers insights that matter.</p></div>
    </div>
  </div>
</section>


<section class="section alt" id="education">
  <div class="container">
    <p class="eyebrow center">Education</p>
    <h2 class="center">Academic Journey</h2>
    <div class="timeline">
      <div class="timeline-item reveal">
        <div class="t-dot">🎓</div>
        <div class="t-card">
          <span class="t-year">2023 — 2027 (Expected)</span>
          <h3>Bachelor of Technology</h3>
          <p class="t-sub">Computer Science and Business Systems (CSBS)</p>
          <p class="t-org">Arjun College of Technology</p>
          <p>Building a foundation across computer science, business analytics, and applied data tools — bridging technical depth with business context.</p>
        </div>
      </div>
    </div>
  </div>
</section>


<section class="section" id="experience">
  <div class="container">
    <p class="eyebrow center">Experience</p>
    <h2 class="center">Where I've Applied It</h2>
    <div class="exp-card reveal">
      <div class="exp-logo">NT</div>
      <div class="exp-body">
        <div class="exp-top">
          <div>
            <h3>AI &amp; Data Analytics Intern</h3>
            <p class="exp-org">NoviTech R&amp;D Pvt. Ltd.</p>
          </div>
          <span class="exp-tag">90-Day Internship · 2026 – Present</span>
        </div>
        <ul class="exp-list">
          <li>Learning AI, Data Analytics, and Machine Learning concepts</li>
          <li>Data cleaning using Excel and Power Query</li>
          <li>Data transformation and Excel reporting</li>
          <li>Building SQL fundamentals and analytical reports</li>
          <li>Working with VLOOKUP, XLOOKUP, INDEX-MATCH, IF functions, and Pivot Tables</li>
          <li>Analyzing datasets to derive meaningful, decision-ready insights</li>
        </ul>
      </div>
    </div>
  </div>
</section>


<section class="section alt" id="skills">
  <div class="container">
    <p class="eyebrow center">Skills</p>
    <h2 class="center">Toolkit &amp; Capabilities</h2>

    <div class="skills-tabs">
      <div class="skill-col reveal">
        <h3>Programming &amp; Analytics</h3>
        <div class="bar-skill"><div class="bar-top"><span>Python</span><span>78%</span></div><div class="bar-track"><div class="bar-fill" data-w="78"></div></div></div>
        <div class="bar-skill"><div class="bar-top"><span>SQL</span><span>80%</span></div><div class="bar-track"><div class="bar-fill" data-w="80"></div></div></div>
        <div class="bar-skill"><div class="bar-top"><span>Power BI</span><span>75%</span></div><div class="bar-track"><div class="bar-fill" data-w="75"></div></div></div>
        <div class="bar-skill"><div class="bar-top"><span>Microsoft Excel (Advanced)</span><span>90%</span></div><div class="bar-track"><div class="bar-fill" data-w="90"></div></div></div>
        <div class="bar-skill"><div class="bar-top"><span>Power Query</span><span>72%</span></div><div class="bar-track"><div class="bar-fill" data-w="72"></div></div></div>
        <div class="bar-skill"><div class="bar-top"><span>Data Cleaning &amp; Transformation</span><span>85%</span></div><div class="bar-track"><div class="bar-fill" data-w="85"></div></div></div>
      </div>

      <div class="skill-col reveal">
        <h3>Visualization Tools</h3>
        <div class="ring-grid">
          <div class="ring" data-pct="75"><svg viewBox="0 0 120 120"><circle class="ring-bg" cx="60" cy="60" r="52"/><circle class="ring-fg" cx="60" cy="60" r="52"/></svg><span class="ring-label">Power BI<br><b>75%</b></span></div>
          <div class="ring" data-pct="65"><svg viewBox="0 0 120 120"><circle class="ring-bg" cx="60" cy="60" r="52"/><circle class="ring-fg" cx="60" cy="60" r="52"/></svg><span class="ring-label">Tableau<br><b>65%</b></span></div>
          <div class="ring" data-pct="90"><svg viewBox="0 0 120 120"><circle class="ring-bg" cx="60" cy="60" r="52"/><circle class="ring-fg" cx="60" cy="60" r="52"/></svg><span class="ring-label">Excel<br><b>90%</b></span></div>
        </div>
        <h3 class="mt">Reporting</h3>
        <div class="chip-row">
          <span class="chip">Pivot Tables</span><span class="chip">Dashboards</span><span class="chip">Data Analysis</span><span class="chip">Reporting</span>
        </div>
      </div>

      <div class="skill-col reveal">
        <h3>Soft Skills</h3>
        <div class="chip-row wrap">
          <span class="chip chip-outline">Analytical Thinking</span>
          <span class="chip chip-outline">Problem Solving</span>
          <span class="chip chip-outline">Communication</span>
          <span class="chip chip-outline">Teamwork</span>
          <span class="chip chip-outline">Time Management</span>
          <span class="chip chip-outline">Adaptability</span>
          <span class="chip chip-outline">Continuous Learning</span>
          <span class="chip chip-outline">Attention to Detail</span>
        </div>
      </div>
    </div>
  </div>
</section>


<section class="section" id="services">
  <div class="container">
    <p class="eyebrow center">Services</p>
    <h2 class="center">How I Can Help</h2>
    <div class="services-grid">
      <div class="service-card reveal"><span class="s-ic">📈</span><h3>Data Analysis</h3><p>Analyze raw datasets to discover trends, patterns, and actionable insights.</p></div>
      <div class="service-card reveal"><span class="s-ic">🧹</span><h3>Data Cleaning &amp; Preparation</h3><p>Clean, organize, and transform data using Excel, SQL, and Power Query.</p></div>
      <div class="service-card reveal"><span class="s-ic">📊</span><h3>Dashboard Development</h3><p>Develop interactive dashboards using Power BI and Microsoft Excel.</p></div>
      <div class="service-card reveal"><span class="s-ic">🗄️</span><h3>SQL Database Analysis</h3><p>Write SQL queries for retrieving, analyzing, and managing business data.</p></div>
      <div class="service-card reveal"><span class="s-ic">🧾</span><h3>Excel Reporting &amp; Automation</h3><p>Create automated reports, Pivot Tables, dashboards, and advanced Excel solutions.</p></div>
      <div class="service-card goal reveal"><span class="s-ic">🚀</span><h3>Future Goal</h3><p>Provide end-to-end data analytics solutions that enable businesses to make informed, data-driven decisions.</p></div>
    </div>
  </div>
</section>


<section class="section alt" id="projects">
  <div class="container">
    <p class="eyebrow center">Projects</p>
    <h2 class="center">Featured Work</h2>

    <div class="project-card reveal">
      <div class="project-thumb">
        <div class="mock-dash">
          <div class="mock-kpis">
            <div><b>1,000</b><span>Total Calls</span></div>
            <div><b>$96.6K</b><span>Revenue</span></div>
            <div><b>5</b><span>Reps</span></div>
            <div><b>3.89</b><span>Avg Rating</span></div>
          </div>
          <div class="mock-chart">
            <svg viewBox="0 0 300 90" preserveAspectRatio="none"><polyline points="0,70 40,55 80,60 120,35 160,42 200,20 240,30 300,10" fill="none" stroke="#06B6D4" stroke-width="3"/></svg>
          </div>
          <div class="mock-bars">
            <span style="--h:55%"></span><span style="--h:80%"></span><span style="--h:40%"></span><span style="--h:65%"></span><span style="--h:48%"></span>
          </div>
        </div>
      </div>
      <div class="project-body">
        <h3>Call Center Analytics Dashboard</h3>
        <p>An interactive Excel dashboard analyzing call center operations, built from a raw dataset of 200+ customer service calls across 3 cities, 5 representatives, and 15 customers. Uses PivotTables and PivotCharts to break down call volume, revenue, average call duration, and satisfaction ratings by representative, city, gender, day of week, and month.</p>
        <p>The Dashboard sheet ties it together with KPI summary cards, a monthly call-trend line chart, and a rep-level performance bar chart — all driven by a representative slicer for interactive filtering. Built entirely with native Excel tools, demonstrating data cleaning, KPI design, and dashboard-building skills.</p>
        <div class="chip-row">
          <span class="chip">Excel</span><span class="chip">PivotTables</span><span class="chip">Slicers</span><span class="chip">Conditional Formatting</span>
        </div>
        <div class="project-actions">
          <a href="/projects/call-center-analytics" class="btn btn-dark btn-sm">View Case Study</a>
        </div>

      </div>
    </div>


    <div class="project-card reveal">
      <div class="project-thumb">
        <div class="mock-dash">
          <div class="mock-kpis">
            <div><b>$1.93M</b><span>Total Sales</span></div>
            <div><b>$248K</b><span>Total Profit</span></div>
            <div><b>12.9%</b><span>Profit Margin</span></div>
            <div><b>789</b><span>Customers</span></div>
          </div>
          <div class="mock-chart">
            <svg viewBox="0 0 300 90" preserveAspectRatio="none"><polyline points="0,75 40,58 80,64 120,40 160,30 200,38 240,18 300,8" fill="none" stroke="#2563EB" stroke-width="3"/></svg>
          </div>
          <div class="mock-bars">
            <span style="--h:70%"></span><span style="--h:45%"></span><span style="--h:88%"></span><span style="--h:52%"></span><span style="--h:62%"></span>
          </div>
        </div>
      </div>
      <div class="project-body">
        <h3>Business Sales, Profit &amp; Customer Insights Dashboard</h3>
        <p>An end-to-end analytics dashboard that turns raw retail transaction data into clear business decisions. It tracks total sales, profit, profit margin, order volume and average order value, then breaks performance down by region, category, sub-category, segment and shipping mode to show exactly where the business earns and where it leaks money.</p>
        <p>A customer insights view profiles the base by segment and location, ranks top customers by revenue and repeat purchases, and highlights discount-heavy orders that erode margin. Monthly sales-vs-profit trend lines reveal seasonality, while interactive slicers for year, region and category let stakeholders self-serve answers instead of asking for new reports.</p>
        <div class="chip-row">
          <span class="chip">Power BI</span><span class="chip">SQL</span><span class="chip">DAX</span><span class="chip">Data Modeling</span><span class="chip">Excel</span>
        </div>
        <div class="project-actions">
          <a href="/projects/business-sales-profit-insights" class="btn btn-dark btn-sm">View Case Study</a>
        </div>

      </div>
    </div>

    <div class="project-placeholder-row">
      <div class="project-placeholder reveal"><span>+</span><p>More projects coming soon</p></div>
    </div>
  </div>
</section>


<section class="section" id="certifications">
  <div class="container">
    <p class="eyebrow center">Certifications</p>
    <h2 class="center">Credentials</h2>
    <div class="cert-grid">
      <div class="cert-card placeholder reveal"><span class="cert-ic">📊</span><h3>Proven through projects</h3><p>Instead of certificates, my skills are evidenced by hands-on case studies — see the Projects section for full analyses, methods and business recommendations.</p><a href="#projects" class="btn btn-outline btn-sm">View projects</a></div>

    </div>
  </div>
</section>


<section class="section alt" id="showcase">
  <div class="container">
    <p class="eyebrow center">Dashboard Showcase</p>
    <h2 class="center">Design Capabilities</h2>
    <div class="showcase-grid">
      <div class="show-card reveal">
        <span class="show-tag">Power BI</span>
        <div class="show-body">
          <div class="show-kpi-row"><span>Sales</span><b>▲ 12.4%</b></div>
          <svg viewBox="0 0 200 60" class="show-line"><polyline points="0,45 30,40 60,42 90,20 120,28 150,10 180,18 200,5" fill="none" stroke="#2563EB" stroke-width="3"/></svg>
        </div>
      </div>
      <div class="show-card reveal">
        <span class="show-tag">Excel</span>
        <div class="show-body">
          <div class="show-bars-grid"><span style="--h:60%"></span><span style="--h:85%"></span><span style="--h:45%"></span><span style="--h:70%"></span><span style="--h:55%"></span><span style="--h:90%"></span></div>
        </div>
      </div>
      <div class="show-card reveal">
        <span class="show-tag">KPI Cards</span>
        <div class="show-body kpi-mini-grid">
          <div><b>4.8</b><span>Rating</span></div>
          <div><b>1.2K</b><span>Records</span></div>
          <div><b>98%</b><span>Accuracy</span></div>
        </div>
      </div>
      <div class="show-card reveal">
        <span class="show-tag">Business Report</span>
        <div class="show-body report-lines">
          <span></span><span></span><span class="short"></span><span></span><span class="short"></span>
        </div>
      </div>
    </div>
  </div>
</section>


<section class="section" id="contact">
  <div class="container contact-grid">
    <div class="reveal">
      <p class="eyebrow">Contact</p>
      <h2>Let's build something with data</h2>
      <p class="lead">Open to internships and full-time Data Analyst opportunities. Reach out — I'd love to hear about what you're working on.</p>

      <div class="contact-info">
        <a href="mailto:madhusakthi0126@gmail.com" class="c-item">
          <span class="c-ic">✉️</span><div><strong>Email</strong><span>madhusakthi0126@gmail.com</span></div>
        </a>
        <div class="c-item">
          <span class="c-ic">📍</span><div><strong>Location</strong><span>Dindigul, Tamil Nadu, India</span></div>
        </div>
        <a href="https://www.linkedin.com/in/madhumitha-m-j-273274322" target="_blank" rel="noopener" class="c-item">
          <span class="c-ic">💼</span><div><strong>LinkedIn</strong><span>madhumitha-m-j</span></div>
        </a>
        <div class="c-item">
          <span class="c-ic">🟢</span><div><strong>Availability</strong><span>Open to internships &amp; full-time roles</span></div>
        </div>
      </div>

      <div class="social-row">
        <a href="https://www.linkedin.com/in/madhumitha-m-j-273274322" target="_blank" rel="noopener" class="social-btn" aria-label="LinkedIn">in</a>
        <a href="mailto:madhusakthi0126@gmail.com" class="social-btn" aria-label="Email">✉</a>
        
      </div>
    </div>

    <form class="contact-form glass reveal" id="contactForm">
      <div class="form-row">
        <label>Name<input type="text" name="name" required placeholder="Your name" /></label>
      </div>
      <div class="form-row">
        <label>Email<input type="email" name="email" required placeholder="you@example.com" /></label>
      </div>
      <div class="form-row">
        <label>Message<textarea name="message" rows="5" required placeholder="Tell me about the opportunity or project..."></textarea></label>
      </div>
      <button type="submit" class="btn btn-dark form-submit">
        <span class="btn-txt">Send Message</span>
      </button>
      <p class="form-status" id="formStatus" role="status"></p>
    </form>
  </div>
</section>


<footer class="footer">
  <div class="container footer-inner">
    <div>
      <a href="#home" class="brand"><span class="brand-mark">M</span><span class="brand-name">Madhumitha<span class="dot">.</span></span></a>
      <p>Aspiring Data Analyst</p>
    </div>
    <nav class="footer-links">
      <a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
    </nav>
    <div class="social-row">
      <a href="https://www.linkedin.com/in/madhumitha-m-j-273274322" target="_blank" rel="noopener" class="social-btn" aria-label="LinkedIn">in</a>
      <a href="mailto:madhusakthi0126@gmail.com" class="social-btn" aria-label="Email">✉</a>
    </div>
  </div>
  <div class="footer-bottom container">
    <span>© <span id="year"></span> Madhumitha MJ. All rights reserved.</span>
    <span>Designed with ❤️ using modern web technologies</span>
  </div>
</footer>

<button id="backToTop" class="back-to-top" aria-label="Back to top">↑</button>

<script>
// ===================== CONFIG =====================
// Point this to your deployed backend's /api/contact endpoint.
// Leave as-is to fall back to a mailto: link if no backend is reachable.
const CONTACT_API_URL = "/api/contact";

// ===================== YEAR =====================
document.getElementById('year').textContent = new Date().getFullYear();

// ===================== THEME TOGGLE =====================
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('mm-theme');
if (savedTheme) {
  root.setAttribute('data-theme', savedTheme);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  root.setAttribute('data-theme', 'dark');
}
themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('mm-theme', next);
});

// ===================== NAV SCROLL + MOBILE MENU =====================
const nav = document.getElementById('nav');
const navLinks = document.getElementById('navLinks');
const menuBtn = document.getElementById('menuBtn');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
  backToTop.classList.toggle('show', window.scrollY > 600);
}, { passive: true });

menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// ===================== BACK TO TOP =====================
const backToTop = document.getElementById('backToTop');
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ===================== TYPING ANIMATION =====================
const roles = ["Data Analyst", "Power BI Enthusiast", "SQL Developer", "Python Programmer", "Excel Expert", "Data Analytics Learner"];
const typedEl = document.getElementById('typedRole');
let roleIdx = 0, charIdx = 0, deleting = false;

function typeLoop() {
  const current = roles[roleIdx];
  if (!deleting) {
    charIdx++;
    typedEl.textContent = current.slice(0, charIdx);
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    charIdx--;
    typedEl.textContent = current.slice(0, charIdx);
    if (charIdx === 0) {
      deleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
    }
  }
  setTimeout(typeLoop, deleting ? 40 : 75);
}
typeLoop();

// ===================== SCROLL REVEAL =====================
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => revealObserver.observe(el));

// ===================== COUNTERS (hero KPI) =====================
const counters = document.querySelectorAll('.kpi-num');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });
counters.forEach(el => counterObserver.observe(el));

function animateCounter(el) {
  const target = parseFloat(el.dataset.count);
  const decimalDigit = el.dataset.decimal;
  const duration = 1400;
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    let value = target * eased;
    el.textContent = decimalDigit ? (Math.floor(value) + '.' + decimalDigit) : Math.round(value) + (target >= 100 ? '+' : '');
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = decimalDigit ? (target + '.' + decimalDigit) : target + (target >= 100 ? '+' : '');
  }
  requestAnimationFrame(tick);
}

// ===================== SKILL BARS =====================
const bars = document.querySelectorAll('.bar-fill');
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.w + '%';
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
bars.forEach(b => barObserver.observe(b));

// ===================== SKILL RINGS =====================
const rings = document.querySelectorAll('.ring');
const ringObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const pct = parseFloat(entry.target.dataset.pct);
      const circle = entry.target.querySelector('.ring-fg');
      const circumference = 326.7;
      const offset = circumference - (pct / 100) * circumference;
      circle.style.strokeDashoffset = offset;
      ringObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });
rings.forEach(r => ringObserver.observe(r));

// ===================== CONTACT FORM =====================
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const submitBtn = form.querySelector('.form-submit');
  const data = Object.fromEntries(new FormData(form).entries());

  submitBtn.disabled = true;
  const originalText = submitBtn.querySelector('.btn-txt').textContent;
  submitBtn.querySelector('.btn-txt').textContent = 'Sending...';
  status.textContent = '';
  status.className = 'form-status';

  try {
    const res = await fetch(CONTACT_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (!res.ok) throw new Error('Request failed');
    status.textContent = "Thanks! Your message has been sent — I'll get back to you soon.";
    status.classList.add('ok');
    form.reset();
  } catch (err) {
    // Fallback: open a pre-filled mail client so the message is never lost.
    const subject = encodeURIComponent(\`Portfolio contact from \${data.name || 'a visitor'}\`);
    const body = encodeURIComponent(\`\${data.message}\\n\\n— \${data.name} (\${data.email})\`);
    window.location.href = \`mailto:madhusakthi0126@gmail.com?subject=\${subject}&body=\${body}\`;
    status.textContent = "Couldn't reach the server, so I've opened your email app instead.";
    status.classList.add('err');
  } finally {
    submitBtn.disabled = false;
    submitBtn.querySelector('.btn-txt').textContent = originalText;
  }
});

// ===================== AMBIENT BACKGROUND CANVAS =====================
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
let particles = [];
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = document.body.scrollHeight;
}
function initParticles() {
  const count = Math.min(50, Math.floor(window.innerWidth / 30));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.6 + 0.6,
    vy: Math.random() * 0.15 + 0.05,
    o: Math.random() * 0.35 + 0.08
  }));
}
function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const isDark = root.getAttribute('data-theme') === 'dark';
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = isDark ? \`rgba(6,182,212,\${p.o})\` : \`rgba(37,99,235,\${p.o})\`;
    ctx.fill();
    p.y -= p.vy;
    if (p.y < -10) p.y = canvas.height + 10;
  });
  requestAnimationFrame(drawParticles);
}
window.addEventListener('resize', () => { resize(); initParticles(); });
resize();
initParticles();
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  drawParticles();
} else {
  drawParticles = () => {}; // no-op
}

</script>
`
  .replaceAll("__PROFILE__", profileAsset.url);
