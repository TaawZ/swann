<template>
	<v-card flat tile class="pa-16">
		<v-row justify="center" align="center">
			<v-col class="pa-16" md="6" v-if="$vuetify.breakpoint.mdAndUp">
				<h1 class="mb-6">Qui suis-je</h1>
				<p class="mb-6">Swann Rétière,</p>
				<p class="mb-6">Je suis ostéopathe pour animaux diplômé de l'école française d'ostéopathie pour animaux. Je suis à l'écoute de vous et votre animal.</p>
			</v-col>
			<v-col md="6">
				<iframe width="100%" height="400" src="https://www.youtube.com/embed/7F1jU07vqxw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</v-col>
		</v-row>
	</v-card>
</template>

<script>
export default {};
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
