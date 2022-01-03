<template>
	<v-container class="pa-16">
		<v-carousel>
			<v-carousel-item v-for="(titles, i) in titles" :key="i">
				<v-sheet color="primary" height="100%" tile>
					<v-row align="center" justify="center">
						<h1 color="buttons" class="mt-12">{{ titles }}</h1>
					</v-row>
					<v-row class="pa-16">
						<v-col md="3"></v-col>
						<v-col md="6">
							<p>{{ p[i] }}</p>
						</v-col>
						<v-col md="3"></v-col>
					</v-row>
				</v-sheet>
			</v-carousel-item>
		</v-carousel>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		titles: ["L'ostéopathie", "Ce que je peux vous apporter :", "Ma recherche"],
		p: ["C'est une médecine aussi bien préventive que curative. On travaille de manière globale sur le corps, avec une approche manuelle et une grande base de connaissance anatomique et physiologique du corps.", "L'ostéopathie peut apporter une solution dans les baisses de performance, les problèmes de fertilité, de douleurs inexpliquées/chroniques... Cela peut apporter du confort, une meilleurs rentabilité et un bien-être à votre cheptel. L'ostéopathe aussi bien vous accompagner en compétition/concours, que dans le suivit de cycle, fertilité, parturition.", "Lors de mes deux dernières années d'étude, j'ai effectué un mémoire sur la maladie de Lyme chez les chevaux. C'est une étude pilote, pour ouvrir de nouvelles possibilités de traitement et de vision sur cette maladie.En parallèle de mon activité, je continue ma recherche sur le sujet. Voici en lien mon mémoire de fin d'étude."],
	}),
};
</script>

<style scoped>
h1 {
	color: #a01037;
	font-size: 24px;
}

p {
	color: #80767a;
	font-size: 18px;
}
</style>
