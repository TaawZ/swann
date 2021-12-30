<template>
	<v-container class="hero">
		<h1 class="white--text mt-16">Qu'est ce que l'ostéopathie ?</h1>
		<h2 class="white--text">
			Découvrez les bienfaits de l'ostéopathie pour animaux, les principes, les actualités,<br />
			les évolutions de la recherche...
		</h2>
		<v-btn rounded large class="mt-4 white--text" color="buttons"> En savoir plus </v-btn>
	</v-container>
</template>

<script>
export default {
	name: "What",
};
</script>

<style scoped>
.hero {
	background: url("../assets/all-picto.png");
	background-size: cover;
	width: 100%;
	height: 70vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	box-shadow: none !important;
}

h1 {
	font-size: 30px;
}

h2 {
	font-size: 20px;
}
</style>
