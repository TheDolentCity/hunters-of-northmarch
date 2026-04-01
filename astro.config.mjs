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
          label: "Rules",
          items: [
            {
              label: "Overview",
              link: "/rules/overview",
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
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
