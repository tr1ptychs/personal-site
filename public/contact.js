window.addEventListener("DOMContentLoaded", () => {
  const contact = {
    email: "wyatt@furois.dev",
    discord: {
      label: "tr1ptychs",
      profile: "https://discordapp.com/users/438912712794177558",
    },
    linkedin: "https://www.linkedin.com/in/wyattfurois/",
  };

  const mailto = `mailto:${contact.email}`;
  document.getElementById("emailTop").href = mailto;
  document.getElementById("emailCta").href = mailto;
  document.getElementById("emailFooter").href = mailto;

  const discord = document.getElementById("discordCta");
  discord.href = contact.discord.profile;
  discord.textContent = `Discord: ${contact.discord.label}`;

  document.getElementById("year").textContent = new Date().getFullYear();
});
