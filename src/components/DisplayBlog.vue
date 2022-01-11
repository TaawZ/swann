<template>
	<v-container class="mt-16" align="center" justify="center">
		<v-row no-gutters>
			<v-col md="4" align="center" justify="center">
				<v-img height="100%" src="../assets/frontcat.jpg">
					<div class="blog-display">
						<h2 class="mt-16 pt-16">L'ostéopathie juste pour les os et les muscles ?</h2>
						<h1>Faux</h1>
						<p>L'ostéopathie peut traiter toutes les systèmes du corps, c'est une médecine globale et holistique.</p>
						<v-btn rounded large class="white--text mt-6" color="buttons">Lire la suite</v-btn>
					</div>
				</v-img>
			</v-col>
			<v-col md="4" align="center" justify="center">
				<v-img height="100%" src="../assets/video.png">
					<div class="blog-display">
						<h2 class="mt-16 pt-16">L'histoire de l'ostéopathie</h2>
						<p class="mt-4">Pour comprendre une médecine, il faut connaître son histoire.</p>
						<v-btn rounded large class="white--text mb-16 mt-8" color="buttons">Lire la suite</v-btn>
					</div>
				</v-img>
			</v-col>
			<v-col md="4" align="center" justify="center">
				<v-img height="100%" src="../assets/lyme.png">
					<div class="blog-display">
						<h2 class="mt-16 pt-16">La Maladie de Lyme chez les chevaux</h2>
						<p>J'ai effectué mon mémoire de fin d'étude sur le sujet. Les résultats sont plus qu'encourageant.</p>
						<v-btn rounded large class="white--text mb-8 mt-10" color="buttons">Lire la suite</v-btn>
					</div>
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
.blog-display {
	padding: 6px;
	background: rgba(0, 0, 0, 0.3);
	height: 100%;
}

h1 {
	font-size: 36px;
	color: white;
}

h2 {
	font-size: 26px;
	color: white;
}

h3 {
	font-size: 32px;
	color: white;
}

p {
	color: white;
}
</style>
