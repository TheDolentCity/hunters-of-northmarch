// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Hunters of Northmarch",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/TheDolentCity/hunters-of-northmarch",
        },
      ],
      components: {
        ThemeProvider: "./src/components/overrides/ForceDarkTheme.astro",
        ThemeSelect: "./src/components/overrides/EmptyComponent.astro",
      },
      customCss: [
        "./src/styles/global.css",
        "@fontsource-variable/crimson-pro/index.css",
        "@fontsource/im-fell-english-sc/400.css",
      ],
      sidebar: [
        {
          label: "Introduction",
          link: "/introduction",
        },
        {
          label: "World Primer",
          link: "/world-primer",
        },
        {
          label: "Hunter's Primer",
          link: "/hunters-primer",
        },
        {
          label: "Rules",
          items: [
            {
              label: "Overview",
              link: "/rules/overview",
            },
            {
              label: "Character Creation",
              link: "/rules/character-creation",
            },
            {
              label: "Armor",
              link: "/rules/armor",
            },
            {
              label: "Weapons",
              link: "/rules/weapons",
            },
          ],
        },
        {
          label: "The Kindled",
          items: [
            {
              label: "Overview",
              link: "/the-kindled/overview",
            },
            {
              label: "The Dawn Gods",
              autogenerate: { directory: "/the-kindled/the-dawn-gods" },
              collapsed: true,
            },
            {
              label: "The Dusk Gods",
              autogenerate: { directory: "/the-kindled/the-dusk-gods" },
              collapsed: true,
            },
          ],
        },
        {
          label: "Empire",
          autogenerate: { directory: "empire" },
        },
        {
          label: "Regions",
          autogenerate: { directory: "regions" },
        },
        {
          label: "Guilds",
          autogenerate: { directory: "guilds" },
        },
        {
          label: "Resources",
          autogenerate: { directory: "resources" },
        },
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
