import { defineNuxtConfig } from "nuxt3"

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
	head: {
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
	},
})