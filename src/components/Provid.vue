<template>
	<v-card flat tile class="pa-4">
		<v-row justify="center" align="center">
			<v-col md="6" v-if="$vuetify.breakpoint.mdAndUp">
				<iframe width="100%" height="400" src="https://www.youtube.com/embed/4_W2s9kLF6A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</v-col>
			<v-col md="6">
				<h1 class="mb-6">Qui suis-je</h1>
				<p class="mb-6">Swann Rétière,</p>
				<p class="mb-6">Diplômée de L'École Française d'Ostéopathie Animale.</p>
			</v-col>
		</v-row>
	</v-card>
</template>

<script>
export default {
	name: "HomeHero",
};
</script>

<style scoped>
h1 {
	color: #a01037;
	font-size: 24px;
	font-family: "Crimson Pro", serif;
}

p {
	font-size: 18px;
}
</style>
