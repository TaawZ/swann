import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Pro from "@/views/Pro";

Vue.use(Router);

const router = new Router({
	mode: "history",
	base: process.env.BASE_URL,
	routes: [
		{
			path: "/",
			name: "Home",
			component: Home,
		},
		{
			path: "/professionnels",
			name: "Pro",
			component: Pro,
		},
	],
});

export default router;
