const tech = [
  { name: "Languages", content: ["TypeScript", "JavaScript", "Python"] },
  { name: "Frontend", content: ["React", "Remix", "Tailwind CSS", "HTML/CSS"] },
  { name: "Build & Tooling", content: ["Vite", "ESLint", "Prettier", "npm"] },
  { name: "Backend", content: ["Node.js", "Express"] },
  { name: "Data", content: ["SQLite", "MySQL", "PostgreSQL"] },
  { name: "Testing", content: ["Vitest", "Stryker", "React Testing Library"] },
  {
    name: "DevOps & Deploy",
    content: ["GitHub Actions", "Fly.io", "Vercel"],
  },
  {
    name: "Tools",
    content: ["Git", "GitHub", "Zed"],
  },
];

const techSection = document.getElementById("tech");
function el(tag, className, children = []) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  for (const child of children) node.append(child);
  return node;
}

function renderTechCard(s) {
  const card = el(
    "div",
    "rounded-xl border flex-grow border-slate-700/50 bg-slate-800/30 p-4",
  );

  const title = el(
    "h3",
    "pb-2 border-b border-slate-700/50 text-center font-semibold text-slate-200",
    [s.name],
  );
  card.append(title);

  const list = el("ul", "mt-2 flex flex-wrap justify-center gap-2");
  for (const tool of s.content) {
    const item = el(
      "li",
      "rounded-full bg-slate-800/60 px-2.5 py-1 text-xs text-slate-300 ring-1 ring-slate-700/60",
      [tool],
    );
    list.append(item);
  }
  card.append(list);

  return card;
}

function renderTechSection() {
  techSection;
  for (const s of tech) techSection.append(renderTechCard(s));
}

renderTechSection();
