<template>
	<v-container align="center" justify="center" class="hero">
		<h1>Swann Rétière</h1>
		<h2 class="white--text">Ostéopathe pour animaux</h2>
		<h3 class="white--text">Pour apporter un soin global à votre animal</h3>
		<v-btn rounded large class="white--text mt-6" color="buttons">Prendre rendez-vous</v-btn>
	</v-container>
</template>

<script>
export default {
	name: "HomeHero",
};
</script>

<style scoped>
.hero {
	background: url("../assets/IMG_1496.jpg");
	background-size: cover;
	height: 80vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
h1 {
	font-size: 64px;
}

h2 {
	font-size: 32px;
}

h3 {
	font-size: 32px;
}
</style>
