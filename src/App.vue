<template>
	<v-app>
		<Head />
		<v-main>
			<router-view></router-view>
		</v-main>
		<Footer />
	</v-app>
</template>

<script>
import Head from "./components/Head";
import Footer from "./components/Footer";

export default {
	name: "App",

	components: {
		Head,
		Footer,
	},

	data: () => ({
		//
	}),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Yeseva+One&display=swap");

#app {
	font-family: "Yeseva One", sans-serif;
	background-color: rgba(45, 45, 45);
}
</style>
