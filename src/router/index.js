import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Pro from "@/views/Pro";
import Particuliers from "@/views/Particuliers";
import Consultation from "@/views/Consultation";
import RendezVous from "@/views/RendezVous";
import Case from "@/views/Case";
import Blog from "@/views/Blog";

Vue.use(Router);

const router = new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "Acceuil",
			component: Home,
		},
		{
			path: "/professionnels",
			name: "Vous êtes professionnels ?",
			component: Pro,
		},
		{
			path: "/particuliers",
			name: "Vous êtes particuliers ?",
			component: Particuliers,
		},
		{
			path: "/ostéopathie",
			name: "L'ostéopathie-consultation",
			component: Consultation,
		},
		{
			path: "/Rendezvous",
			name: "Prendre rendez-vous",
			component: RendezVous,
		},
		{
			path: "/cas",
			name: "Les cas",
			component: Case,
		},
		{
			path: "/Blog",
			name: "Le blog",
			component: Blog,
		},
	],
});

export default router;
