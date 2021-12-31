<template>
	<v-container class="mt-16" align="center" justify="center">
		<v-row>
			<v-col md="4" align="center" justify="center" class="one">
				<h2>L'ostéopathie juste pour les os et les muscles ?</h2>
				<h1>Faux</h1>
				<p>L'ostéopathie peut traiter toutes les systèmes du corps, c'est une médecine globale et holistique.</p>
				<v-btn rounded large class="white--text mt-6" color="buttons">Lire la suite</v-btn>
			</v-col>
			<v-col md="4" align="center" justify="center" class="two">
				<h2>L'histoire de l'ostéopathie</h2>
				<p>Pour comprendre une médecine, il faut connaître son histoire.</p>
				<v-btn rounded large class="white--text mt-6" color="buttons">Lire la suite</v-btn>
			</v-col>
			<v-col md="4" align="center" justify="center" class="three">
				<h2>La Maladie de Lyme chez les chevaux</h2>
				<p>J'ai effectué mon mémoire de fin d'étude sur le sujet. Les résultats sont plus qu'encourageant.</p>
				<v-btn rounded large class="white--text mt-6" color="buttons">Lire la suite</v-btn>
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
.one {
	max-width: 100%;
	max-height: 100%;
	background: url("../assets/frontcat.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	position: center;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.two {
	max-width: 100%;
	max-height: 100%;
	background: url("../assets/video.png");
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.three {
	max-width: 100%;
	max-height: 100%;
	background: url("../assets/lyme.png");
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
h1 {
	font-size: 36px;
}

h2 {
	font-size: 26px;
}

h3 {
	font-size: 32px;
}
</style>
