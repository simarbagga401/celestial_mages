import { defineNuxtConfig } from "nuxt3"

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
	routes: {
		"/": { prerender: true },
	},
	head: {
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
	},
})
