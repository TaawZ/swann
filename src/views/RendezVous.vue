<template>
	<main>
		<RdvHero />
		<RdvPic />
		<Form />
	</main>
</template>

<script>
import Form from "../components/Form";
import RdvHero from "../components/RdvHero";
import RdvPic from "../components/RdvPic";

export default {
	name: "App",
	components: {
		RdvHero,
		RdvPic,
		Form,
	},
};
</script>
