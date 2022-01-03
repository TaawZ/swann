<template>
	<v-container class="mt-16" align="center" justify="center">
		<v-row>
			<v-col md="4" align="center" justify="center">
				<v-img height="100%" src="../assets/frontcat.jpg">
					<h2 class="mt-16 pt-16">L'ostéopathie juste pour les os et les muscles ?</h2>
					<h1>Faux</h1>
					<p>L'ostéopathie peut traiter toutes les systèmes du corps, c'est une médecine globale et holistique.</p>
					<v-btn rounded large class="white--text mt-6" color="buttons">Lire la suite</v-btn>
				</v-img>
			</v-col>
			<v-col md="4" align="center" justify="center">
				<v-img height="100%" src="../assets/video.png">
					<h2 class="mt-16 pt-16">L'histoire de l'ostéopathie</h2>
					<p>Pour comprendre une médecine, il faut connaître son histoire.</p>
					<v-btn rounded large class="white--text mt-6" color="buttons">Lire la suite</v-btn>
				</v-img>
			</v-col>
			<v-col md="4" align="center" justify="center">
				<v-img height="100%" src="../assets/lyme.png">
					<h2 class="mt-16 pt-16">La Maladie de Lyme chez les chevaux</h2>
					<p>J'ai effectué mon mémoire de fin d'étude sur le sujet. Les résultats sont plus qu'encourageant.</p>
					<v-btn rounded large class="white--text mt-6" color="buttons">Lire la suite</v-btn>
				</v-img>
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
	font-size: 36px;
}

h2 {
	font-size: 26px;
	color: #005262;
}

h3 {
	font-size: 32px;
}
</style>
