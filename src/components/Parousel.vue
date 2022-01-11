<template>
	<v-card tile flat>
		<v-carousel hide-delimiters>
			<v-carousel-item v-for="(titles, i) in titles" :key="i">
				<v-sheet color="#615e5a" class="pa-16" align="center" height="100%" tile>
					<v-card class="mwhite">
						<h1 class="pt-16 mt-6" color="buttons">{{ titles }}</h1>
						<v-col md="3"></v-col>
						<v-col md="6">
							<p>{{ p[i] }}</p>
						</v-col>
						<v-col md="3"></v-col>
					</v-card>
				</v-sheet>
			</v-carousel-item>
		</v-carousel>
	</v-card>
</template>

<script>
export default {
	data: () => ({
		titles: ["Ma recherche", "L'ostéopathie :", "Pour qui ?"],
		p: ["Lors de mes deux dernières années d'étude, j'ai effectué un mémoire sur la maladie de Lyme chez les chevaux. C'est une étude pilote, pour ouvrir de nouvelles possibilités de traitement et de vision sur cette maladie. En parallèle de mon activité, je continue ma recherche sur le sujet.Voici en lien mon mémoire de fin d'étude.", "C'est une médecine manuelle, douce , non intrusive, avec une vision globale du corps et une écoute du corps du patient.Elle est aussi bien curative, que préventive de nombreuses douleurs et pathologies. Elle est en écoute du patient et de son corps, elle lie connaissance, sensation et écoute de celui-ci", "Connu pour l'homme, elle est aussi importante pour les animaux de compagnie : cheval, chien, chat, NAC (nouveaux animaux de compagnie), poules, chèvre... Elle peut intervenir dans n'importe quel cas, aussi bien pour une perte de forme, un contrôle annuel, que pour des pathologies chroniques."],
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
