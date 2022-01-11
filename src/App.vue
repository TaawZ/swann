<template>
	<v-app>
		<Header />
		<Head v-if="$vuetify.breakpoint.lgAndUp" />
		<MobileNav v-if="$vuetify.breakpoint.mdAndDown" />
		<v-main>
			<v-container>
				<router-view></router-view>
			</v-container>
		</v-main>
		<Footer />
	</v-app>
</template>

<script>
import Header from "./components/Header";
import Head from "./components/Head";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";

export default {
	name: "App",

	components: {
		Head,
		Footer,
		MobileNav,
		Header,
	},

	data: () => ({
		//
	}),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Crimson+Pro&display=swap");
h1 {
	font-family: "Yeseva One", sans-serif;
	color: #a01037;
}

h2 {
	font-family: "Yeseva One", sans-serif;
}

span {
	font-family: "Crimson Pro", serif;
}

p {
	font-family: "Crimson Pro", serif;
	font-size: 18px;
	color: #80767a;
}

#app {
	background-color: #c4c4c4;
}
</style>
