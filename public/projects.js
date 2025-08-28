const projects = [
  {
    title: "ReactSweeper",
    description:
      "Deterministic Minesweeper with chording, keyboard play, and mutation-tested core logic.",
    highlights: [
      "100% mutation score on core board logic; 100% branch/stmt/func/line coverage",
      "Q/W keyboard controls for desktop and long-press flag for mobile users",
      "CI/CD with GitHub Actions: Automated testing and deployment",
    ],
    subdescription:
      "I have spent too many hours of my life playing minesweeper.",
    tech: ["Vite", "React", "Tailwind", "TypeScript", "Vitest", "Stryker"],
    links: [
      {
        label: "Live",
        href: "https://react-sweeper-snowy.vercel.app",
      },
      {
        label: "GitHub",
        href: "https://github.com/tr1ptychs/react-sweeper",
      },
    ],
    image: "reactsweeper.webp",
  },
  {
    title: "eggrecords.ink",
    description:
      "Salmon Run high score tracker. Enables teambuilding through shareable, human-readable profile URLs.",
    highlights: [
      "Submit, update, delete, display your best Salmon Run scores on a per-map basis",
      "Discord-based OAuth for easy signup",
      "CI/CD with GitHub Actions and Fly.io. Tests on PRs, auto-deploy on main",
    ],
    subdescription:
      "It's hosted on fly.io free, so allow a few seconds for the machine to spin up. Fun!",
    tech: ["Remix", "React", "TypeScript", "SQLite", "Fly.io"],
    links: [
      { label: "Live", href: "https://eggrecords.ink" },
      {
        label: "GitHub",
        href: "https://github.com/tr1ptychs/Egg-Records",
      },
    ],
    image: "eggrecords.webp",
  },
  {
    title: "Utföra",
    description:
      "Task-tracker focused on simplicity through tagging, filtering, and deadlines.",
    subdescription:
      "Built as a final project for a course at the University of Minnesota, Twin Cities.",
    tech: ["Express.js", "JavaScript", "Pug", "MySQL"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/tr1ptychs/Utfora",
      },
    ],
    image: "utfora.webp",
  },
  {
    title: "This Website",
    description: "A simple site to showcase who I am and some stuff I've made.",
    subdescription:
      "Hover the project cards for a subtle Balatro-esque tilt animation.",
    tech: ["HTML", "Tailwind", "JavaScript", "Vercel"],
    links: [
      { label: "You're already here", href: "#" },
      {
        label: "GitHub",
        href: "https://github.com/tr1ptychs/wyatt",
      },
    ],
    image: "here.webp",
  },
];

const projectsGrid = document.getElementById("projects-grid");

function el(tag, className, children = []) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  for (const child of children) node.append(child);
  return node;
}

function renderProjectCard(p) {
  const article = el(
    "article",
    "group rounded-2xl bg-white/5 border border-white/10 p-5 shadow-lg transition-transform will-change-transform tilt",
  );

  const header = el("header", "flex items-start justify-between gap-4");
  const h3 = el("h3", "text-lg font-semibold tracking-tight");
  h3.textContent = p.title;
  header.append(h3);

  article.append(header);

  if (p.image) {
    const box = el(
      "div",
      "mt-4 overflow-hidden rounded-xl border border-white/10 bg-slate-800",
    );
    const img = document.createElement("img");
    img.src = p.image;
    img.alt = "Screenshot";
    img.loading = "lazy";
    img.className = "h-full w-full";
    box.append(img);
    article.append(box);
  }

  const desc = el("p", "mt-4 text-slate-300 text-sm leading-relaxed");
  desc.textContent = p.description;
  article.append(desc);

  if (p.highlights) {
    const highlights = el(
      "ul",
      "mt-4 flex flex-wrap gap-2 text-xs text-slate-300",
    );
    for (const h of p.highlights) {
      const li = el("li", "px-3 py-1");
      li.textContent = "— " + h;
      highlights.append(li);
    }
    article.append(highlights);
  }

  const subdesc = el("p", "mt-2 text-slate-400 text-sm leading-relaxed");
  subdesc.textContent = p.subdescription;
  article.append(subdesc);

  const tech = el("ul", "mt-3 flex flex-wrap gap-2 text-xs text-slate-300");
  for (const t of p.tech) {
    const li = el(
      "li",
      "rounded-full bg-white/5 px-3 py-1 border border-white/10",
    );
    li.textContent = t;
    tech.append(li);
  }
  article.append(tech);

  const links = el("div", "mt-4 flex items-center gap-4 text-sm");
  for (const l of p.links) {
    const a = document.createElement("a");
    a.href = l.href;
    a.textContent = l.label;
    a.rel = "noopener";
    a.className = "underline underline-offset-2 hover:opacity-80";
    links.append(a);
  }

  article.append(links);

  return article;
}

function renderProjects() {
  projectsGrid.innerHTML = "";
  for (const p of projects) projectsGrid.append(renderProjectCard(p));
}

renderProjects();
