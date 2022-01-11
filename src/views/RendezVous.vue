<template>
	<main>
		<RdvHero />
		<RdvPic />
		<BiggerForm />
	</main>
</template>

<script>
import BiggerForm from "../components/BiggerForm";
import RdvHero from "../components/RdvHero";
import RdvPic from "../components/RdvPic";

export default {
	name: "App",
	components: {
		RdvHero,
		RdvPic,
		BiggerForm,
	},
};
</script>
