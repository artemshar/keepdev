import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"
import { BASE_URL } from "./src/consts"

// https://astro.build/config
export default defineConfig({
  site: "https://artemshar.space",
	base: BASE_URL,
	output: 'static',
  outDir: './dist',
  integrations: [mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false })],
})