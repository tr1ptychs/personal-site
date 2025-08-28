window.addEventListener("DOMContentLoaded", () => {
  const contact = {
    email: "wyatt@furois.dev",
    discord: {
      label: "tr1ptychs",
      profile: "https://discordapp.com/users/438912712794177558",
    },
    linkedin: "https://www.linkedin.com/in/wyattcharlesfurois/",
  };

  const mailto = `mailto:${contact.email}?subject=Hey%20Wyatt%20—%20re:%20[topic]&body=Who%20I%20am:%0AWhat%20I%20need:%0ATiming:%0ALinks:%0A`;
  document.getElementById("emailTop").href = mailto;
  document.getElementById("emailCta").href = mailto;
  document.getElementById("emailFooter").href = mailto;

  const discord = document.getElementById("discordCta");
  discord.href = contact.discord.profile;
  discord.textContent = `Discord: ${contact.discord.label}`;

  document.getElementById("year").textContent = new Date().getFullYear();
});
