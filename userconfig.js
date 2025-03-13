// latte / frappe / macchiato / mocha
const palette = mocha;

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "London",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: palette.maroon,
  },
  disabled: [],
  fastlink: "https://mylesbolton.com/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "Main",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "Personal",
          links: [
            {
              name: "NextCloud",
              url: "https://cloud.mylesbolton.com/",
              icon: "droplet-bolt",
              icon_color: palette.green,
            },
            {
              name: "Mail",
              url: "https://cloud.mylesbolton.com/mail/",
              icon: "binary-tree",
              icon_color: palette.peach,
            },
            {
              name: "Calendar",
              url: "https://cloud.mylesbolton.com/cal/",
              icon: "binary-tree",
              icon_color: palette.peach,
            },
          ],
        },
        {
          name: "Phion",
          links: [
            {
              name: "Cloud",
              url: "https://cloud.phionsecurity.com/",
              icon: "brand-gmail",
              icon_color: palette.green,
            },
            {
              name: "Mail",
              url: "https://cloud.phionsecurity.com/mail/",
              icon: "calendar-filled",
              icon_color: palette.peach,
            },
            {
              name: "Cal",
              url: "https://cloud.phionsecurity.com/cal/",
              icon: "table",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "Genesis",
          links: [
            {
              name: "Admin",
              url: "https://panel.genesis-servers.com/",
              icon: "news",
              icon_color: palette.green,
            },
            {
              name: "Node-01",
              url: "https://node-01.genesis-servers.com/",
              icon: "badge-filled",
              icon_color: palette.peach,
            },
            {
              name: "Node-02",
              url: "https://node-02.genesis-servers.com/",
              icon: "border-radius",
              icon_color: palette.red,
            },
          ],
        },
      ],
    },
    {
      name: "Bookmarks",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [
        {
          name: "DEV",
          links: [
            {
              name: "github",
              url: "https://github.com/login",
              icon: "brand-github",
              icon_color: palette.green,
            },
            {
              name: "GitLab",
              url: "https://gitlab.com/users/sign_in",
              icon: "brand-gitlab",
              icon_color: palette.peach,
            },
            {
              name: "wakatime",
              url: "https://wakatime.com",
              icon: "24-hours",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "Cyber",
          links: [
            {
              name: "HTB",
              url: "https://account.hackthebox.com/login",
              icon: "brain",
              icon_color: palette.green,
            },
            {
              name: "THM",
              url: "https://tryhackme.com/login",
              icon: "code-plus",
              icon_color: palette.peach,
            },
            {
              name: "VulnHub",
              url: "https://www.vulnhub.com/",
              icon: "code-minus",
              icon_color: palette.red,
            },
            {
              name: "HackerOne",
              url: "https://hackerone.com/users/sign_in",
              icon: "brand-stackoverflow",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "NixOs",
          links: [
            {
              name: "NixOS",
              url: "https://search.nixos.org/options",
              icon: "brand-prisma",
              icon_color: palette.green,
            },
            {
              name: "Form",
              url: "https://discourse.nixos.org/",
              icon: "brand-redhat",
              icon_color: palette.peach,
            },
            {
              name: "uber research",
              url: "https://eng.uber.com/category/articles",
              icon: "brand-uber",
              icon_color: palette.red,
            },
            {
              name: "google research",
              url: "https://blog.research.google",
              icon: "hexagon-letter-g",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "Rot",
      background_url: "src/img/banners/cbg-10.gif",
      categories: [
        {
          name: "social medias",
          links: [
            {
              name: "facebook",
              url: "https://www.facebook.com/login",
              icon: "brand-facebook",
              icon_color: palette.peach,
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/",
              icon: "brand-reddit",
              icon_color: palette.red,
            },
          ],
        },
        {
          name: "games",
          links: [
            {
              name: "Steam",
              url: "https://store.steampowered.com",
              icon: "brand-steam",
              icon_color: palette.peach,
            },
            {
              name: "Epic",
              url: "https://store.epicgames.com",
              icon: "brand-fortnite",
              icon_color: palette.red,
            },

            {
              name: "Maps",
              url: "https://mapgenie.io/",
              icon: "device-nintendo",
              icon_color: palette.blue,
            },
          ],
        },
        {
          name: "Media",
          links: [
            {
              name: "JellyFin",
              url: "https://jellyfin.genesis-servers.com/",
              icon: "brand-funimation",
              icon_color: palette.green,
            },
            {
              name: "ARM",
              url: "https://arm.genesis-servers.com/",
              icon: "brand-funimation",
              icon_color: palette.green,
            },
            {
              name: "YouTube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: palette.peach,
            },
            {
              name: "Amazon",
              url: "https://www.amazon.co.uk/gp/video/storefront",
              icon: "brand-patreon",
              icon_color: palette.red,
            },
            {
              name: "Netflix",
              url: "https://www.netflix.com/gb/login",
              icon: "star-filled",
              icon_color: palette.blue,
            },
          ],
        },
      ],
    },
    {
      name: "Tarkov",
      background_url: "src/img/banners/cbg-10.gif",
      categories: [
        {
          name: "Main",
          links: [
            {
              name: "Maps",
              url: "https://mapgenie.io/tarkov",
              icon: "brand-funimation",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "Tools",
          links: [
            {
              name: "DEV",
              url: "https://tarkov.dev/",
              icon: "brand-funimation",
              icon_color: palette.green,
            },
            {
              name: "Ammo",
              url: "https://www.eft-ammo.com/",
              icon: "brand-funimation",
              icon_color: palette.green,
            },
          ],
        },
        {
          name: "EFT",
          links: [
            {
              name: "News",
              url: "https://www.escapefromtarkov.com/#news",
              icon: "brand-funimation",
              icon_color: palette.green,
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config, palette);

const root = document.querySelector(":root");
root.style.setProperty("--bg", palette.mantle);
root.style.setProperty("--accent", palette.green);
