<template>
	<v-container color="primary">
		<v-row justify="center" align="center">
			<v-col md="6" v-if="$vuetify.breakpoint.mdAndUp">
				<iframe width="600" height="400" src="https://www.youtube.com/embed/4_W2s9kLF6A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</v-col>
			<v-col md="4">
				<h1>Qui suis-je</h1>
				<p class="white--text">
					Swann Rétière <br />
					Je suis ostéopathe pour animaux diplômé de l'école française d'ostéopathie pour animaux. Je suis à l'écoute de vous et votre animal.
				</p>
			</v-col>
		</v-row>
	</v-container>
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
}

p {
	font-size: 18px;
}
</style>
