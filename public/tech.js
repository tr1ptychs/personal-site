const tech = [
  {
    name: "Frontend",
    content: [
      "TypeScript",
      "JavaScript",
      "React",
      "Remix",
      "Vite",
      "Tailwind CSS",
    ],
  },
  {
    name: "Backend",
    content: ["Node.js", "JavaScript", "Express"],
  },
  { name: "Databases", content: ["SQLite", "MySQL", "PostgreSQL"] },
  {
    name: "DevOps & Cloud",
    content: ["Docker", "fly.io", "Vercel", "Github Actions"],
  },
  {
    name: "Testing & Quality",
    content: ["Vitest", "Stryker", "ESLint", "Prettier"],
  },
  { name: "Tools", content: ["Git", "GitHub", "npm"] },
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
    "rounded-xl border border-slate-700/50 bg-slate-800/30 p-4",
  );

  const title = el("h3", "text-sm font-semibold text-slate-200", [s.name]);
  card.append(title);

  const list = el("ul", "mt-2 flex flex-wrap gap-2");
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
  techSection.innerHTML = "";
  for (const s of tech) techSection.append(renderTechCard(s));
}

renderTechSection();
