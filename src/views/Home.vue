<template>
	<v-main>
		<HomeHero />
		<HomeCards />
		<What />
	</v-main>
</template>

<script>
import HomeCards from "../components/HomeCards";
import HomeHero from "../components/HomeHero";
import What from "../components/What";
export default {
	name: "App",
	components: {
		HomeHero,
		HomeCards,
		What,
	},
};
</script>
