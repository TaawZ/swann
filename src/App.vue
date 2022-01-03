<template>
	<v-app>
		<Head v-if="$vuetify.breakpoint.mdAndUp" />
		<MobileNav v-if="$vuetify.breakpoint.smAndDown" />
		<v-main>
			<router-view></router-view>
		</v-main>
		<Footer />
	</v-app>
</template>

<script>
import Head from "./components/Head";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";

export default {
	name: "App",

	components: {
		Head,
		Footer,
		MobileNav,
	},

	data: () => ({
		//
	}),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap");

h1 {
	font-family: "Yeseva One", sans-serif;
	color: #a01037;
}

h2 {
	font-family: "Yeseva One", sans-serif;
}

p {
	font-size: 18px;
	color: white;
}

#app {
	background-color: rgba(45, 45, 45);
}
</style>
