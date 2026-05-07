// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import starlightLinksValidator from "starlight-links-validator";
import starlightSidebarTopics from "starlight-sidebar-topics";

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
      plugins: [
        starlightLinksValidator({
          errorOnRelativeLinks: false,
        }),
        starlightSidebarTopics([
          {
            label: "Wiki",
            link: "/wiki/introduction",
            icon: "open-book",
            items: [
              {
                label: "Introduction",
                link: "/wiki/introduction",
              },
              {
                label: "World Primer",
                link: "/wiki/world-primer",
              },
              {
                label: "Hunter's Primer",
                link: "/wiki/hunters-primer",
              },
              {
                label: "Empire",
                autogenerate: { directory: "/wiki/empire" },
                collapsed: true,
              },
              {
                label: "Guilds",
                autogenerate: { directory: "/wiki/guilds" },
                collapsed: true,
              },
              {
                label: "The Kindled",
                items: [
                  {
                    label: "Overview",
                    link: "/wiki/the-kindled/overview",
                  },
                  {
                    label: "The Dawn Gods",
                    autogenerate: {
                      directory: "/wiki/the-kindled/the-dawn-gods",
                    },
                    collapsed: true,
                  },
                  {
                    label: "The Dusk Gods",
                    autogenerate: {
                      directory: "/wiki/the-kindled/the-dusk-gods",
                    },
                    collapsed: true,
                  },
                ],
                collapsed: true,
              },
              {
                label: "Regions",
                autogenerate: { directory: "/wiki/regions" },
                collapsed: true,
              },
            ],
          },
          {
            label: "D&D 4th Edition",
            link: "/dnd-4th-edition/introduction",
            icon: "information",
            items: [
              {
                label: "Introduction",
                link: "/dnd-4th-edition/introduction",
              },
              {
                label: "Rules",
                autogenerate: { directory: "/dnd-4th-edition/rules" },
              },
              {
                label: "Resources",
                autogenerate: { directory: "/dnd-4th-edition/resources" },
              },
            ],
          },
        ]),
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
