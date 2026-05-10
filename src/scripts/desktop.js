// ==================== DATA ====================
const PROJECTS = [
  // === PINNED / FEATURED ===
  { name: "ReWrit", desc: "A place where you can read and write tutorials and documentation. Markdown editor, commenting, ratings — a StackOverflow alternative.", lang: "Svelte", langColor: "#ff3e00", stars: 5, forks: 1, url: "https://github.com/RangerDevv/ReWrit", website: "https://rewrit.vercel.app", categories: ["pinned", "web", "all"] },
  { name: "Draftonn", desc: "A FOSS alternative to Google Docs and Notion. Notes, to-do lists, drawing boards, all in one place.", lang: "Svelte", langColor: "#ff3e00", stars: 4, forks: 2, url: "https://github.com/RangerDevv/Draftonn", website: "https://draftonn.vercel.app", categories: ["pinned", "web", "tools", "all"] },
  { name: "AIC-Dismissal", desc: "A school dismissal management app with real-time tracking and user auth.", lang: "Svelte", langColor: "#ff3e00", stars: 0, forks: 1, url: "https://github.com/RangerDevv/AIC-Dismissal", website: "https://aicdismissal.vercel.app", categories: ["pinned", "web", "all"] },
  { name: "Pitchfork", desc: "A FOSS alternative to Product Hunt for discovering and sharing dev tools.", lang: "Svelte", langColor: "#ff3e00", stars: 1, forks: 2, url: "https://github.com/RangerDevv/Pitchfork", website: "https://pitchfork.vercel.app", categories: ["pinned", "web", "all"] },
  { name: "SpectrumSense", desc: "Early autism detection tool using machine learning and behavioral analysis.", lang: "Python", langColor: "#3776ab", stars: 0, forks: 0, url: "https://github.com/RangerDevv/SpectrumSense", categories: ["pinned", "ai", "all"] },
  { name: "GreenBeen", desc: "Green solutions to green homeowners — eco-friendly living resource site.", lang: "Astro", langColor: "#bc52ee", stars: 0, forks: 0, url: "https://github.com/RangerDevv/GreenBeen", website: "https://green-been.vercel.app", categories: ["pinned", "web", "all"] },

  // === WEB APPS ===
  { name: "RemmbrMe", desc: "A todo list and planner for college students with clean organization features.", lang: "TypeScript", langColor: "#3178c6", stars: 0, forks: 0, url: "https://github.com/RangerDevv/RemmbrMe", categories: ["web", "tools", "all"] },
  { name: "Istigfarathon", desc: "Community istigfar tracker for Ramadan with hadith integration.", lang: "Svelte", langColor: "#ff3e00", stars: 0, forks: 0, url: "https://github.com/RangerDevv/Istigfarathon", categories: ["web", "all"] },
  { name: "PocketPense", desc: "Desktop budget tracking app with charts, savings goals, and debt payoff planner. Built with Electron + Tauri.", lang: "TypeScript", langColor: "#3178c6", stars: 0, forks: 0, url: "https://github.com/RangerDevv/PocketPense", categories: ["web", "tools", "all"] },
  { name: "CAAWebsite", desc: "Official website for the Central Asian Community Discord Server.", lang: "Astro", langColor: "#bc52ee", stars: 0, forks: 0, url: "https://github.com/RangerDevv/CAAWebsite", website: "https://caa-website-psi.vercel.app", categories: ["web", "all"] },
  { name: "DopeAI", desc: "A suite of AI tools to help you speed up your workflow.", lang: "Astro", langColor: "#bc52ee", stars: 0, forks: 0, url: "https://github.com/RangerDevv/DopeAI", website: "https://dopeai.vercel.app", categories: ["ai", "web", "all"] },
  { name: "HayatGreens", desc: "A plant-based restaurant website with menu, documentation, and approach pages.", lang: "TypeScript", langColor: "#3178c6", stars: 0, forks: 0, url: "https://github.com/RangerDevv/HayatGreens", categories: ["web", "all"] },
  { name: "fnyaplan", desc: "Online Personal Finance Learning Platform with interactive slides.", lang: "Astro", langColor: "#bc52ee", stars: 0, forks: 0, url: "https://github.com/RangerDevv/fnyaplan", website: "https://fnyaplan.vercel.app", categories: ["web", "all"] },
  { name: "TSAMatrixConcept", desc: "TSA Matrix concept project for competition.", lang: "Svelte", langColor: "#ff3e00", stars: 0, forks: 0, url: "https://github.com/RangerDevv/TSAMatrixConcept", categories: ["web", "all"] },
  { name: "PCC-Website", desc: "Website project built with HTML.", lang: "HTML", langColor: "#e34f26", stars: 0, forks: 0, url: "https://github.com/RangerDevv/PCC-Website", categories: ["web", "all"] },
  { name: "Heather-Black-Website", desc: "A custom-designed website built with HTML.", lang: "HTML", langColor: "#e34f26", stars: 0, forks: 0, url: "https://github.com/RangerDevv/Heather-Black-Website", categories: ["web", "all"] },
  { name: "Quizlet-Clone", desc: "A FOSS clone of Quizlet with flashcards and study tools. Built with Next.js.", lang: "TypeScript", langColor: "#3178c6", stars: 0, forks: 3, url: "https://github.com/RangerDevv/Quizlet-Clone", categories: ["web", "all"] },
  { name: "Open-Library", desc: "An opensource library app where people can read books.", lang: "HTML", langColor: "#e34f26", stars: 0, forks: 0, url: "https://github.com/RangerDevv/Open-Library", categories: ["web", "all"] },
  { name: "NeighborNetwork", desc: "Community platform for neighborhood connections.", lang: "HTML", langColor: "#e34f26", stars: 0, forks: 0, url: "https://github.com/RangerDevv/NeighborNetwork", categories: ["web", "all"] },
  { name: "Side-Hustle", desc: "A side project website built with Astro.", lang: "Astro", langColor: "#bc52ee", stars: 0, forks: 0, url: "https://github.com/RangerDevv/Side-Hustle", categories: ["web", "all"] },
  { name: "CursorBridge-Tailwindcss", desc: "CursorBridge rebuilt with Tailwind CSS.", lang: "HTML", langColor: "#e34f26", stars: 0, forks: 0, url: "https://github.com/RangerDevv/CursorBridge-Tailwindcss", categories: ["web", "all"] },
  { name: "Portfolio-Templete-Website", desc: "Browse templates for your portfolio to land an outstanding job.", lang: "HTML", langColor: "#e34f26", stars: 0, forks: 0, url: "https://github.com/RangerDevv/Portfolio-Templete-Website", categories: ["web", "all"] },

  // === TOOLS ===
  { name: "Traffic-simulator", desc: "A real-time traffic simulation tool.", lang: "Svelte", langColor: "#ff3e00", stars: 0, forks: 0, url: "https://github.com/RangerDevv/Traffic-simulator", categories: ["tools", "all"] },
  { name: "FileConverter", desc: "A file conversion tool built with Rust for fast, reliable transformations.", lang: "Rust", langColor: "#dea584", stars: 0, forks: 0, url: "https://github.com/RangerDevv/FileConverter", categories: ["tools", "all"] },
  { name: "AllClad", desc: "Versatile Python tooling suite.", lang: "Python", langColor: "#3776ab", stars: 0, forks: 0, url: "https://github.com/RangerDevv/AllClad", categories: ["tools", "all"] },
  { name: "debugPT", desc: "A static code analyzer for catching bugs early.", lang: "JavaScript", langColor: "#f7df1e", stars: 0, forks: 0, url: "https://github.com/RangerDevv/debugPT", categories: ["tools", "all"] },
  { name: "AdvisoryCode", desc: "Advisory selection program for South Fayette Twp Middle School.", lang: "Python", langColor: "#3776ab", stars: 0, forks: 0, url: "https://github.com/RangerDevv/AdvisoryCode", categories: ["tools", "all"] },
  { name: "Terminal", desc: "A FOSS web terminal emulator.", lang: "JavaScript", langColor: "#f7df1e", stars: 0, forks: 0, url: "https://github.com/RangerDevv/Terminal", categories: ["tools", "web", "all"] },
  { name: "Voting-system", desc: "A web-based voting system.", lang: "HTML", langColor: "#e34f26", stars: 0, forks: 0, url: "https://github.com/RangerDevv/Voting-system", categories: ["tools", "all"] },
  { name: "ArduinoOS", desc: "Operating system for Arduino hardware.", lang: "C++", langColor: "#00599c", stars: 0, forks: 0, url: "https://github.com/RangerDevv/ArduinoOS", categories: ["tools", "all"] },

  // === AI / ML ===
  { name: "BlindManSoftware", desc: "An AI-powered software for smart blind man cane navigation.", lang: "Python", langColor: "#3776ab", stars: 0, forks: 0, url: "https://github.com/RangerDevv/BlindManSoftware", categories: ["ai", "all"] },
  { name: "VectorDB", desc: "Exploring vector database concepts for semantic search.", lang: "Python", langColor: "#3776ab", stars: 0, forks: 0, url: "https://github.com/RangerDevv/VectorDB", categories: ["ai", "tools", "all"] },
  { name: "Jarvis_AI", desc: "Jarvis from Iron Man — a personal AI assistant.", lang: "Python", langColor: "#3776ab", stars: 0, forks: 0, url: "https://github.com/RangerDevv/Jarvis_AI", categories: ["ai", "all"] },
  { name: "AITest", desc: "Playing around with AI experiments and prototyping.", lang: "Python", langColor: "#3776ab", stars: 0, forks: 0, url: "https://github.com/RangerDevv/AITest", categories: ["ai", "all"] },

  // === GAMES ===
  { name: "KaboomGame", desc: "A game built with the Kaboom.js game library.", lang: "JavaScript", langColor: "#f7df1e", stars: 0, forks: 0, url: "https://github.com/RangerDevv/KaboomGame", categories: ["games", "all"] },
  { name: "Neia-JavaScript-Version", desc: "A JavaScript game built with ElectronJS and TailwindCSS.", lang: "HTML", langColor: "#e34f26", stars: 0, forks: 0, url: "https://github.com/RangerDevv/Neia-JavaScript-Version", categories: ["games", "all"] },
  { name: "Neia-Godot", desc: "Neia game rebuilt in the Godot engine.", lang: "GDScript", langColor: "#478cbf", stars: 0, forks: 0, url: "https://github.com/RangerDevv/Neia-Godot", categories: ["games", "all"] },
  { name: "Neia-Python", desc: "Neia game — Python edition.", lang: "Python", langColor: "#3776ab", stars: 0, forks: 0, url: "https://github.com/RangerDevv/Neia-Python", categories: ["games", "all"] },
  { name: "Numpydle", desc: "Wordle, but with numbers!", lang: "Python", langColor: "#3776ab", stars: 0, forks: 0, url: "https://github.com/RangerDevv/Numpydle", categories: ["games", "all"] },
  { name: "Madlibs", desc: "A simple Mad Libs game in Python.", lang: "Python", langColor: "#3776ab", stars: 0, forks: 0, url: "https://github.com/RangerDevv/Madlibs", categories: ["games", "all"] },
  { name: "guess-my-no", desc: "A number guessing game.", lang: "JavaScript", langColor: "#f7df1e", stars: 0, forks: 0, url: "https://github.com/RangerDevv/guess-my-no", categories: ["games", "all"] }
];

// ==================== CASE STUDIES (Markdown-based) ====================
// To add a new writeup:
//   1. Create a .md file in writeups/ (see existing ones for format)
//   2. Add the filename below
const WRITEUP_FILES = [
  'writeups/rewrit.md',
  'writeups/spectrumsense.md'
];

// Parsed writeups get stored here after loading
let caseStudies = [];

// --- Minimal Markdown parser (no dependencies) ---
function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };
  const meta = {};
  match[1].split('\n').forEach(line => {
    const idx = line.indexOf(':');
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    const val = line.slice(idx + 1).trim();
    meta[key] = val;
  });
  return { meta, body: match[2].trim() };
}

function markdownToHtml(md) {
  // Split into sections by ## headings
  const sections = [];
  let current = null;
  md.split('\n').forEach(line => {
    const headingMatch = line.match(/^## (.+)$/);
    if (headingMatch) {
      if (current) sections.push(current);
      current = { heading: headingMatch[1], lines: [] };
    } else if (current) {
      current.lines.push(line);
    }
  });
  if (current) sections.push(current);

  return sections.map(sec => {
    const content = sec.lines.join('\n').trim();
    if (!content) return '';
    // Check if content is a list
    const listLines = content.split('\n').filter(l => l.match(/^- /));
    if (listLines.length > 0 && listLines.length === content.split('\n').filter(l => l.trim()).length) {
      // Check if list items look like metrics (e.g. "- **5** Stars")
      const isMetrics = listLines.every(l => l.match(/^- \*\*.*?\*\*/));
      if (isMetrics) {
        const items = listLines.map(l => {
          const m = l.match(/^- \*\*(.+?)\*\*\s*(.+)$/);
          return m ? `<div class="cs-metric"><span class="cs-metric-value">${escapeHtml(m[1])}</span><span class="cs-metric-label">${escapeHtml(m[2])}</span></div>` : '';
        }).join('');
        return `<div class="cs-section fade-in-section"><h3>${escapeHtml(sec.heading)}</h3><div class="cs-metrics-row">${items}</div></div>`;
      }
      const items = listLines.map(l => `<li>${inlineMarkdown(l.slice(2))}</li>`).join('');
      return `<div class="cs-section fade-in-section"><h3>${escapeHtml(sec.heading)}</h3><ul class="cs-list">${items}</ul></div>`;
    }
    // Paragraphs
    const paragraphs = content.split(/\n\n+/).map(p => `<p>${inlineMarkdown(p.trim())}</p>`).join('');
    return `<div class="cs-section fade-in-section"><h3>${escapeHtml(sec.heading)}</h3>${paragraphs}</div>`;
  }).join('');
}

function inlineMarkdown(text) {
  return text
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="cs-inline-img" loading="lazy" />')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/`(.+?)`/g, '<code>$1</code>');
}

// --- Fetch & render ---
async function loadWriteups() {
  const results = await Promise.allSettled(
    WRITEUP_FILES.map(async file => {
      const res = await fetch(file);
      if (!res.ok) throw new Error(`Failed to load ${file}`);
      const raw = await res.text();
      const { meta, body } = parseFrontmatter(raw);
      return {
        title: meta.title || 'Untitled',
        subtitle: meta.subtitle || '',
        date: meta.date || '',
        tags: (meta.tags || '').split(',').map(t => t.trim()).filter(Boolean),
        cover: meta.cover || '',
        project: meta.project || '',
        body
      };
    })
  );
  caseStudies = results.filter(r => r.status === 'fulfilled').map(r => r.value);
}

function renderCaseStudies() {
  const grid = document.getElementById('case-studies-grid');
  if (!grid) return;
  grid.innerHTML = '';

  if (caseStudies.length === 0) {
    grid.innerHTML = '<p style="color:var(--text-muted);font-size:0.85rem;">No writeups yet. Add a .md file to the writeups/ folder.</p>';
    return;
  }

  caseStudies.forEach((cs, i) => {
    const card = document.createElement('div');
    card.className = 'case-study-card';
    card.style.animationDelay = (i * 0.08) + 's';

    const tags = cs.tags.map(t => `<span class="cs-tag">${escapeHtml(t)}</span>`).join('');

    card.innerHTML = `
      <div class="cs-card-cover">
        <img src="${cs.cover}" alt="${escapeHtml(cs.title)}" loading="lazy" onerror="this.style.display='none'" />
      </div>
      <div class="cs-card-body">
        <div class="cs-card-date">${escapeHtml(cs.date)}</div>
        <h4>${escapeHtml(cs.title)}</h4>
        <p>${escapeHtml(cs.subtitle)}</p>
        <div class="cs-card-tags">${tags}</div>
      </div>
    `;

    card.addEventListener('click', () => openCaseStudyDetail(cs));
    grid.appendChild(card);
  });
}

function openCaseStudyDetail(cs) {
  const win = createCaseStudyDetailWindow();
  const content = document.getElementById('cs-detail-content');
  const title = document.getElementById('cs-detail-title');

  title.textContent = cs.title;

  const sectionsHtml = markdownToHtml(cs.body);

  const linkedProject = cs.project ? PROJECTS.find(p => p.name === cs.project) : null;
  let projectLink = '';
  if (linkedProject) {
    projectLink = `<div class="cs-section fade-in-section">
      <button class="cta-btn cs-project-link" onclick="openProjectDetail(PROJECTS.find(p => p.name === '${linkedProject.name.replace(/'/g, "\\'")}'))">
        <span>View Project: ${escapeHtml(linkedProject.name)}</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
    </div>`;
  }

  const tags = cs.tags.map(t => `<span class="cs-detail-tag">${escapeHtml(t)}</span>`).join('');

  content.innerHTML = `
    <div class="cs-detail-cover">
      <img src="${cs.cover}" alt="${escapeHtml(cs.title)}" onerror="this.style.display='none'" />
    </div>
    <div class="cs-detail-body">
      <div class="cs-detail-meta">
        <span class="cs-detail-date">${escapeHtml(cs.date)}</span>
        <div class="cs-detail-tags">${tags}</div>
      </div>
      <h2>${escapeHtml(cs.title)}</h2>
      <p class="cs-detail-subtitle">${escapeHtml(cs.subtitle)}</p>
      ${sectionsHtml}
      ${projectLink}
    </div>
  `;

  openWindow('window-cs-detail');
}

function createCaseStudyDetailWindow() {
  let win = document.getElementById('window-cs-detail');
  if (win) return win;

  win = document.createElement('div');
  win.className = 'window';
  win.id = 'window-cs-detail';
  win.style.display = 'none';

  win.innerHTML = `
    <div class="window-titlebar">
      <div class="window-controls">
        <button class="win-btn close" title="Close"></button>
        <button class="win-btn minimize" title="Minimize"></button>
        <button class="win-btn maximize" title="Maximize"></button>
      </div>
      <div class="window-title" id="cs-detail-title">Case Study</div>
      <div class="window-controls-spacer"></div>
    </div>
    <div class="window-content cs-detail-content" id="cs-detail-content"></div>
  `;

  document.getElementById('windows-container').appendChild(win);

  const id = win.id;
  win.querySelector('.win-btn.close').addEventListener('click', () => closeWindow(id));
  win.querySelector('.win-btn.minimize').addEventListener('click', () => minimizeWindow(id));
  win.querySelector('.win-btn.maximize').addEventListener('click', () => toggleMaximize(id));
  win.addEventListener('mousedown', () => focusWindow(id));
  win.querySelector('.window-titlebar').addEventListener('dblclick', (e) => {
    if (e.target.closest('.window-controls')) return;
    toggleMaximize(id);
  });

  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const w = Math.min(600, vw - 40);
  const h = Math.min(560, vh - 140);
  win.style.width = w + 'px';
  win.style.height = h + 'px';
  win.style.left = Math.max(10, (vw * 0.5) - w / 2) + 'px';
  win.style.top = Math.max(38, (vh * 0.42) - h / 2) + 'px';

  windowState[id] = { open: false, minimized: false, maximized: false, prevBounds: null };
  return win;
}

// ==================== WINDOW MANAGER ====================
const windowState = {};
let zCounter = 100;
let activeWindowId = null;

function initWindowPositions() {
  const windows = document.querySelectorAll('.window');
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const topH = 28;
  const dockH = 76;
  const usable = vh - topH - dockH - 20;

  const configs = {
    'window-about':    { w: 580, h: 560, cx: 0.45, cy: 0.42 },
    'window-projects': { w: 740, h: 540, cx: 0.5,  cy: 0.42 },
    'window-skills':   { w: 580, h: 520, cx: 0.48, cy: 0.4  },
    'window-contact':  { w: 480, h: 440, cx: 0.5,  cy: 0.42 },
    'window-terminal': { w: 580, h: 380, cx: 0.46, cy: 0.44 },
    'window-github':   { w: 400, h: 320, cx: 0.5,  cy: 0.4  },
    'window-project-detail': { w: 560, h: 520, cx: 0.52, cy: 0.42 },
    'window-casestudies': { w: 680, h: 520, cx: 0.5, cy: 0.42 },
    'window-cs-detail': { w: 600, h: 560, cx: 0.5, cy: 0.42 }
  };

  windows.forEach(win => {
    const id = win.id;
    const cfg = configs[id] || { w: 500, h: 400, cx: 0.5, cy: 0.5 };

    const w = Math.min(cfg.w, vw - 40);
    const h = Math.min(cfg.h, usable);
    const x = Math.max(10, (vw * cfg.cx) - w / 2);
    const y = Math.max(topH + 10, (vh * cfg.cy) - h / 2);

    win.style.width = w + 'px';
    win.style.height = h + 'px';
    win.style.left = x + 'px';
    win.style.top = y + 'px';

    windowState[id] = { open: false, minimized: false, maximized: false, prevBounds: null };
  });
}

function openWindow(id) {
  const win = document.getElementById(id);
  if (!win) return;

  const state = windowState[id];
  state.open = true;
  state.minimized = false;
  win.style.display = 'flex';
  win.classList.remove('minimizing');

  // Re-trigger open animation
  win.style.animation = 'none';
  win.offsetHeight; // reflow
  win.style.animation = '';

  focusWindow(id);
  updateDock();

  // Trigger animations inside the window
  requestAnimationFrame(() => {
    triggerWindowAnimations(id);
  });
}

function closeWindow(id) {
  const win = document.getElementById(id);
  if (!win) return;

  win.style.display = 'none';
  win.classList.remove('maximized');
  windowState[id].open = false;
  windowState[id].minimized = false;
  windowState[id].maximized = false;

  if (activeWindowId === id) activeWindowId = null;
  updateDock();
  updateTopBarAppName();
}

function minimizeWindow(id) {
  const win = document.getElementById(id);
  if (!win) return;

  windowState[id].minimized = true;
  win.classList.add('minimizing');

  setTimeout(() => {
    win.style.display = 'none';
    win.classList.remove('minimizing');
  }, 350);

  if (activeWindowId === id) activeWindowId = null;
  updateDock();
  updateTopBarAppName();
}

function toggleMaximize(id) {
  const win = document.getElementById(id);
  if (!win) return;

  const state = windowState[id];
  if (state.maximized) {
    win.classList.remove('maximized');
    if (state.prevBounds) {
      Object.assign(win.style, state.prevBounds);
    }
    state.maximized = false;
  } else {
    state.prevBounds = {
      left: win.style.left,
      top: win.style.top,
      width: win.style.width,
      height: win.style.height
    };
    win.classList.add('maximized');
    state.maximized = true;
  }
}

function focusWindow(id) {
  document.querySelectorAll('.window').forEach(w => w.classList.remove('active'));
  const win = document.getElementById(id);
  if (!win) return;

  zCounter++;
  win.style.zIndex = zCounter;
  win.classList.add('active');
  activeWindowId = id;
  updateDock();
  updateTopBarAppName();
}

// ==================== ANIMATIONS INSIDE WINDOWS ====================
function triggerWindowAnimations(id) {
  const win = document.getElementById(id);
  if (!win) return;

  // Fade-in sections
  const sections = win.querySelectorAll('.fade-in-section');
  sections.forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 150 + i * 120);
  });

  // Count-up stats
  if (id === 'window-about') {
    win.querySelectorAll('.stat').forEach(stat => {
      const target = parseInt(stat.dataset.count, 10);
      const numEl = stat.querySelector('.stat-num');
      animateCount(numEl, 0, target, 1200);
    });
  }

  // Skill bar fill animation
  if (id === 'window-skills') {
    const pills = win.querySelectorAll('.skill-pill');
    pills.forEach((pill, i) => {
      pill.classList.remove('animated');
      setTimeout(() => pill.classList.add('animated'), 100 + i * 80);
    });
  }
}

function animateCount(el, start, end, duration) {
  const range = end - start;
  const startTime = performance.now();

  function tick(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(start + range * eased);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

// ==================== DRAGGING ====================
function initDragging() {
  let dragWin = null;
  let startX = 0;
  let startY = 0;
  let startLeft = 0;
  let startTop = 0;

  document.addEventListener('mousedown', (e) => {
    const titlebar = e.target.closest('.window-titlebar');
    if (!titlebar || e.target.closest('.window-controls')) return;

    const win = titlebar.closest('.window');
    if (!win) return;

    const state = windowState[win.id];

    // If maximized, un-maximize and reposition under cursor
    if (state?.maximized) {
      const prev = state.prevBounds;
      const prevW = parseInt(prev?.width, 10) || 500;
      win.classList.remove('maximized');
      if (prev) {
        win.style.width = prev.width;
        win.style.height = prev.height;
      }
      // Center the restored window horizontally under the cursor
      const newLeft = e.clientX - prevW / 2;
      const newTop = Math.max(28, e.clientY - 19); // 19 = half titlebar
      win.style.left = newLeft + 'px';
      win.style.top = newTop + 'px';
      state.maximized = false;
    }

    dragWin = win;
    startX = e.clientX;
    startY = e.clientY;
    startLeft = parseInt(win.style.left, 10) || 0;
    startTop = parseInt(win.style.top, 10) || 0;

    // Kill any CSS animation so transforms don't interfere with positioning
    win.style.animation = 'none';

    document.body.style.userSelect = 'none';
    document.body.style.cursor = 'grabbing';

    focusWindow(win.id);
    e.preventDefault();
  });

  document.addEventListener('mousemove', (e) => {
    if (!dragWin) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    const newX = startLeft + dx;
    const newY = startTop + dy;

    dragWin.style.left = Math.max(-(dragWin.offsetWidth - 60), Math.min(newX, window.innerWidth - 60)) + 'px';
    dragWin.style.top = Math.max(0, Math.min(newY, window.innerHeight - 60)) + 'px';
  });

  document.addEventListener('mouseup', () => {
    if (dragWin) {
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
      dragWin = null;
    }
  });
}

// ==================== TOP BAR ====================
function updateTopBarAppName() {
  const names = {
    'window-about': 'About Me',
    'window-projects': 'Projects',
    'window-skills': 'Skills',
    'window-contact': 'Contact',
    'window-terminal': 'Terminal',
    'window-github': 'GitHub',
    'window-project-detail': 'Project Preview',
    'window-casestudies': 'Case Studies',
    'window-cs-detail': 'Case Study'
  };
  const el = document.getElementById('active-app-name');
  el.textContent = activeWindowId ? (names[activeWindowId] || 'Finder') : 'Finder';
}

function updateClock() {
  const now = new Date();
  const timeOpts = { hour: 'numeric', minute: '2-digit', hour12: true };
  const dateOpts = { weekday: 'short', month: 'short', day: 'numeric' };
  document.getElementById('top-bar-clock').textContent = now.toLocaleTimeString('en-US', timeOpts);
  document.getElementById('top-bar-date').textContent = now.toLocaleDateString('en-US', dateOpts);

  // Widget clock
  const wTime = document.getElementById('widget-time');
  const wDate = document.getElementById('widget-date');
  const wGreet = document.getElementById('widget-greeting');
  if (wTime) {
    wTime.textContent = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: false });
    wDate.textContent = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    const h = now.getHours();
    wGreet.textContent = h < 5 ? 'Late night coding' : h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : h < 21 ? 'Good evening' : 'Night owl mode';
  }
}

// ==================== DOCK ====================
function updateDock() {
  document.querySelectorAll('.dock-item[data-window]').forEach(item => {
    const id = 'window-' + item.dataset.window;
    const state = windowState[id];
    if (state && state.open) {
      item.classList.add('open');
    } else {
      item.classList.remove('open');
    }
  });
}

function initDockMagnification() {
  const dock = document.getElementById('dock');
  const items = dock.querySelectorAll('.dock-item');

  dock.addEventListener('mousemove', (e) => {
    items.forEach(item => {
      const rect = item.getBoundingClientRect();
      const center = rect.left + rect.width / 2;
      const dist = Math.abs(e.clientX - center);

      if (dist < 80 && dist > 0) {
        item.classList.add('dock-near');
      } else {
        item.classList.remove('dock-near');
      }
    });
  });

  dock.addEventListener('mouseleave', () => {
    items.forEach(item => item.classList.remove('dock-near'));
  });
}

// ==================== PROJECTS ====================
function getPreviewUrl(proj) {
  // Use GitHub OpenGraph image as a reliable thumbnail
  const repoName = proj.url.split('/').pop();
  return `https://opengraph.githubassets.com/1/RangerDevv/${repoName}`;
}

function renderProjects(category) {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = '';

  const filtered = PROJECTS.filter(p => p.categories.includes(category));

  filtered.forEach((proj, i) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.animationDelay = (i * 0.06) + 's';
    card.style.cursor = 'pointer';

    // Thumbnail
    const thumb = `<div class="project-card-thumb">
      <img src="${getPreviewUrl(proj)}" alt="${proj.name} preview" loading="lazy" onerror="this.style.display='none'" />
      ${proj.website ? '<span class="thumb-badge">LIVE SITE</span>' : ''}
    </div>`;

    let meta = `<div class="project-meta">
      <span class="project-lang"><span class="lang-dot" style="background:${proj.langColor}"></span>${proj.lang}</span>`;
    if (proj.stars > 0) meta += `<span>\u2b50 ${proj.stars}</span>`;
    if (proj.forks > 0) meta += `<span>\ud83c\udf74 ${proj.forks}</span>`;
    meta += '</div>';

    card.innerHTML = `${thumb}<h4>${proj.name}</h4><p>${proj.desc}</p>${meta}`;

    card.addEventListener('click', (e) => {
      e.preventDefault();
      openProjectDetail(proj);
    });

    grid.appendChild(card);
  });
}

// ==================== PROJECT DETAIL WINDOW ====================
function createProjectDetailWindow() {
  // Create the detail window if it doesn't exist
  let win = document.getElementById('window-project-detail');
  if (win) return win;

  win = document.createElement('div');
  win.className = 'window';
  win.id = 'window-project-detail';
  win.style.display = 'none';

  win.innerHTML = `
    <div class="window-titlebar">
      <div class="window-controls">
        <button class="win-btn close" title="Close"></button>
        <button class="win-btn minimize" title="Minimize"></button>
        <button class="win-btn maximize" title="Maximize"></button>
      </div>
      <div class="window-title" id="detail-window-title">Project Preview</div>
      <div class="window-controls-spacer"></div>
    </div>
    <div class="window-content detail-content" id="detail-window-content"></div>
  `;

  document.getElementById('windows-container').appendChild(win);

  // Wire up window controls
  const id = win.id;
  win.querySelector('.win-btn.close').addEventListener('click', () => closeWindow(id));
  win.querySelector('.win-btn.minimize').addEventListener('click', () => minimizeWindow(id));
  win.querySelector('.win-btn.maximize').addEventListener('click', () => toggleMaximize(id));
  win.addEventListener('mousedown', () => focusWindow(id));
  win.querySelector('.window-titlebar').addEventListener('dblclick', (e) => {
    if (e.target.closest('.window-controls')) return;
    toggleMaximize(id);
  });

  // Set initial position and state
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const w = Math.min(560, vw - 40);
  const h = Math.min(520, vh - 140);
  win.style.width = w + 'px';
  win.style.height = h + 'px';
  win.style.left = Math.max(10, (vw * 0.52) - w / 2) + 'px';
  win.style.top = Math.max(38, (vh * 0.4) - h / 2) + 'px';

  windowState[id] = { open: false, minimized: false, maximized: false, prevBounds: null };

  return win;
}

function openProjectDetail(proj) {
  const win = createProjectDetailWindow();
  const content = document.getElementById('detail-window-content');
  const title = document.getElementById('detail-window-title');

  title.textContent = proj.name;

  const previewImg = getPreviewUrl(proj);

  let previewHtml;
  if (proj.website) {
    previewHtml = `
      <div class="detail-preview" id="detail-preview-area">
        <img src="${previewImg}" alt="${proj.name}" id="detail-preview-img" />
        <button class="detail-preview-toggle" id="detail-toggle-btn" onclick="toggleDetailPreview('${proj.website}')">
          \u25b6 Live Preview
        </button>
      </div>`;
  } else {
    previewHtml = `
      <div class="detail-preview">
        <img src="${previewImg}" alt="${proj.name}" />
      </div>`;
  }

  let metaBadges = `<span class="detail-badge"><span class="lang-dot" style="background:${proj.langColor}"></span>${proj.lang}</span>`;
  if (proj.stars > 0) metaBadges += `<span class="detail-badge">\u2b50 ${proj.stars} stars</span>`;
  if (proj.forks > 0) metaBadges += `<span class="detail-badge">\ud83c\udf74 ${proj.forks} forks</span>`;

  let actions = `<a href="${proj.url}" target="_blank" rel="noopener noreferrer" class="detail-btn detail-btn-secondary">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.28-.01-1.04-.02-2.03-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0112 5.8c1.02.01 2.05.14 3.01.41 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.21.7.82.58C20.57 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z"/></svg>
    View Source
  </a>`;

  if (proj.website) {
    actions = `<a href="${proj.website}" target="_blank" rel="noopener noreferrer" class="detail-btn detail-btn-primary">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
      Visit Site
    </a>` + actions;
  }

  content.innerHTML = `
    ${previewHtml}
    <div class="detail-info">
      <h2>${proj.name}</h2>
      <p class="detail-desc">${proj.desc}</p>
      <div class="detail-meta-row">${metaBadges}</div>
      <div class="detail-actions">${actions}</div>
    </div>
  `;

  openWindow('window-project-detail');
}

function toggleDetailPreview(websiteUrl) {
  const area = document.getElementById('detail-preview-area');
  const img = document.getElementById('detail-preview-img');
  const btn = document.getElementById('detail-toggle-btn');

  if (img) {
    // Switch to iframe
    area.innerHTML = `
      <iframe src="${websiteUrl}" sandbox="allow-scripts allow-same-origin" loading="lazy"></iframe>
      <button class="detail-preview-toggle" id="detail-toggle-btn" onclick="toggleDetailPreview('${websiteUrl}')">
        \u25a0 Screenshot
      </button>
    `;
  } else {
    // Switch back to image
    const repoName = websiteUrl.split('//')[1].split('.')[0];
    area.innerHTML = `
      <img src="${getPreviewUrl({url:'https://github.com/RangerDevv/'+repoName})}" alt="Preview" id="detail-preview-img" />
      <button class="detail-preview-toggle" id="detail-toggle-btn" onclick="toggleDetailPreview('${websiteUrl}')">
        \u25b6 Live Preview
      </button>
    `;
  }
}

// ==================== TERMINAL ====================
const TERM_COMMANDS = {
  help: () => [
    '<span class="term-accent">Available commands:</span>',
    '  <span class="term-success">about</span>      - Who is RangerDevv?',
    '  <span class="term-success">skills</span>     - View tech stack',
    '  <span class="term-success">projects</span>   - List featured projects',
    '  <span class="term-success">contact</span>    - Get contact info',
    '  <span class="term-success">github</span>     - Open GitHub profile',
    '  <span class="term-success">neofetch</span>   - System info',
    '  <span class="term-success">open</span>       - Open a window (about/projects/skills/contact)',
    '  <span class="term-success">clear</span>      - Clear terminal',
    '  <span class="term-success">help</span>       - Show this help'
  ],
  about: () => [
    '',
    '<span class="term-accent">  ╭─────────────────────────╮</span>',
    '<span class="term-accent">  │</span>  <span class="term-warn">RangerDevv</span>              <span class="term-accent">│</span>',
    '<span class="term-accent">  ╰─────────────────────────╯</span>',
    '',
    "  Hi! The name's Ranger... RangerDevv.",
    '  Currently into <span class="term-warn">Rust</span> and building with',
    '  <span class="term-success">Svelte</span>, <span class="term-success">Astro</span>, and <span class="term-success">TailwindCSS</span>.',
    '  Also a <span class="term-accent">mountain biker</span>! 🚵',
    '',
    '  📍 Earth · 13 followers · 57 repos'
  ],
  skills: () => [
    '',
    '<span class="term-accent">Languages:</span>',
    '  JavaScript  ████████████████████ 90%',
    '  TypeScript  █████████████████░░░ 85%',
    '  Python      ████████████████░░░░ 80%',
    '  HTML/CSS    ████████████████████ 95%',
    '  Rust        ██████████░░░░░░░░░░ 50%',
    '',
    '<span class="term-accent">Frameworks:</span>',
    '  Svelte      ████████████████████ 90%',
    '  Astro       █████████████████░░░ 85%',
    '  Tailwind    ██████████████████░░ 88%'
  ],
  projects: () => {
    const pinned = PROJECTS.filter(p => p.categories.includes('pinned'));
    const lines = ['', `<span class="term-accent">Pinned Repositories (${pinned.length} of ${PROJECTS.length} total):</span>`, ''];
    pinned.forEach(p => {
      const stars = p.stars > 0 ? ` ⭐${p.stars}` : '';
      const site = p.website ? ` <span class="term-info">🌐</span>` : '';
      lines.push(`  <span class="term-success">${p.name}</span> <span class="term-info">[${p.lang}]</span>${stars}${site}`);
      lines.push(`    ${p.desc}`);
      lines.push('');
    });
    lines.push('Type <span class="term-success">open projects</span> to browse all projects.');
    return lines;
  },
  contact: () => [
    '',
    '<span class="term-accent">Contact:</span>',
    '',
    '  📧 meerabdul2008@gmail.com',
    '  🐙 github.com/RangerDevv',
    '  📸 @m33r.4bdul',
    '  🌐 rangerdevv.github.io'
  ],
  github: () => {
    window.open('https://github.com/RangerDevv', '_blank', 'noopener,noreferrer');
    return ['<span class="term-success">Opening GitHub...</span>'];
  },
  neofetch: () => [
    '',
    '<span class="term-success">     🌿</span>                <span class="term-warn">ranger</span>@<span class="term-warn">portfolio</span>',
    '<span class="term-success">    🌿🌿</span>              ─────────────────',
    '<span class="term-success">   🌿🌿🌿</span>             <span class="term-success">OS:</span>     RangerOS v2.0',
    '<span class="term-success">  🌿🌿🌿🌿</span>            <span class="term-success">Host:</span>   GitHub Pages',
    '<span class="term-success">   🌿🌿🌿</span>             <span class="term-success">Kernel:</span> HTML/CSS/JS',
    '<span class="term-success">    🌿🌿</span>              <span class="term-success">Shell:</span>  ranger-sh 2.0',
    '<span class="term-success">     🌿</span>               <span class="term-success">Theme:</span>  Creme + Forest',
    '     <span class="term-accent">│</span>                <span class="term-success">Repos:</span>  57',
    '     <span class="term-accent">│</span>                <span class="term-success">Lang:</span>   JS/TS/Python/Rust',
    '                      <span class="term-success">Uptime:</span> Since 2023'
  ],
  clear: () => null
};

function initTerminal() {
  const input = document.getElementById('terminal-input');
  const output = document.getElementById('terminal-output');

  input.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    const raw = input.value.trim();
    const cmd = raw.toLowerCase();
    input.value = '';

    addTermLine(`<span class="term-prompt">ranger ~$</span> ${escapeHtml(raw)}`);

    if (!cmd) return;

    if (cmd === 'clear') {
      output.innerHTML = '';
      return;
    }

    // Handle 'open <window>' command
    if (cmd.startsWith('open ')) {
      const target = cmd.slice(5).trim();
      const windowMap = { about: 'window-about', projects: 'window-projects', skills: 'window-skills', contact: 'window-contact', terminal: 'window-terminal', casestudies: 'window-casestudies' };
      if (windowMap[target]) {
        openWindow(windowMap[target]);
        addTermLine(`<span class="term-success">Opening ${target}...</span>`);
      } else {
        addTermLine(`<span class="term-warn">Unknown window: ${escapeHtml(target)}</span>`);
        addTermLine('Available: <span class="term-success">about, projects, skills, contact</span>');
      }
      addTermLine('');
      output.scrollTop = output.scrollHeight;
      return;
    }

    const handler = TERM_COMMANDS[cmd];
    if (handler) {
      const lines = handler();
      if (lines) lines.forEach(l => addTermLine(l));
    } else {
      addTermLine(`<span class="term-warn">ranger-sh: command not found: ${escapeHtml(cmd)}</span>`);
      addTermLine('Type <span class="term-success">help</span> for available commands.');
    }

    addTermLine('');
    output.scrollTop = output.scrollHeight;
  });
}

function addTermLine(html) {
  const line = document.createElement('div');
  line.className = 'term-line';
  line.innerHTML = html;
  document.getElementById('terminal-output').appendChild(line);
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ==================== EVENTS ====================
function initEvents() {
  // Desktop icon click
  document.querySelectorAll('.desktop-icon').forEach(icon => {
    icon.addEventListener('click', () => {
      const winId = 'window-' + icon.dataset.window;
      openWindow(winId);
    });
  });

  // Dock clicks
  document.querySelectorAll('.dock-item[data-window]').forEach(item => {
    item.addEventListener('click', () => {
      const winId = 'window-' + item.dataset.window;
      const state = windowState[winId];
      if (!state) return;

      if (!state.open) {
        openWindow(winId);
      } else if (state.minimized) {
        state.minimized = false;
        const win = document.getElementById(winId);
        win.style.display = 'flex';
        win.classList.remove('minimizing');
        // Re-trigger animation
        win.style.animation = 'none';
        win.offsetHeight;
        win.style.animation = '';
        focusWindow(winId);
        updateDock();
      } else if (activeWindowId === winId) {
        minimizeWindow(winId);
      } else {
        focusWindow(winId);
      }
    });
  });

  // Window controls
  document.querySelectorAll('.window').forEach(win => {
    const id = win.id;
    win.querySelector('.win-btn.close')?.addEventListener('click', () => closeWindow(id));
    win.querySelector('.win-btn.minimize')?.addEventListener('click', () => minimizeWindow(id));
    win.querySelector('.win-btn.maximize')?.addEventListener('click', () => toggleMaximize(id));
    win.addEventListener('mousedown', () => focusWindow(id));

    win.querySelector('.window-titlebar')?.addEventListener('dblclick', (e) => {
      if (e.target.closest('.window-controls')) return;
      toggleMaximize(id);
    });
  });

  // Project category filters
  document.querySelectorAll('.sidebar-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.sidebar-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.category);
    });
  });

  // Focus terminal input
  document.getElementById('window-terminal')?.addEventListener('click', () => {
    document.getElementById('terminal-input')?.focus();
  });

  // Click desktop to deselect
  document.getElementById('desktop')?.addEventListener('click', (e) => {
    if (e.target.id === 'desktop' || e.target.id === 'desktop-icons') {
      // do nothing fancy, desktop click
    }
  });
}

// ==================== BOOT ====================
function boot() {
  const bootScreen = document.getElementById('boot-screen');
  const desktop = document.getElementById('desktop');

  setTimeout(() => {
    bootScreen.style.transition = 'opacity 0.6s ease-out';
    bootScreen.style.opacity = '0';

    setTimeout(() => {
      bootScreen.style.display = 'none';
      desktop.classList.remove('hidden');

      initWindowPositions();
      initDragging();
      initDockMagnification();
      initEvents();
      initTerminal();

      renderProjects('pinned');
      loadWriteups().then(() => renderCaseStudies());
      updateClock();
      setInterval(updateClock, 30000);

      // Open About window after a little pause
      setTimeout(() => openWindow('window-about'), 500);
    }, 600);
  }, 2400);
}

// Expose functions to global scope for inline onclick handlers
window.openWindow = openWindow;
window.openProjectDetail = openProjectDetail;
window.toggleDetailPreview = toggleDetailPreview;
window.PROJECTS = PROJECTS;

document.addEventListener('DOMContentLoaded', boot);
