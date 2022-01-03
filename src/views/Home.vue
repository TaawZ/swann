<template>
	<v-main>
		<HomeHero />
		<HomeCards />
		<What v-if="$vuetify.breakpoint.mdAndUp" />
		<MobileWhat v-if="$vuetify.breakpoint.smAndDown" />
	</v-main>
</template>

<script>
import HomeCards from "../components/HomeCards";
import HomeHero from "../components/HomeHero";
import What from "../components/What";
import MobileWhat from "../components/MobileWhat";
export default {
	name: "App",
	components: {
		HomeHero,
		HomeCards,
		What,
		MobileWhat,
	},
};
</script>
