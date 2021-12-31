<template>
	<v-container align="center" justify="center" class="hero">
		<h1>Prenez un rendez-vous en ligne</h1>
		<h2 class="white--text">Vous avez déjà fait appel à mes services ?</h2>
		<h3 class="white--text">Accédez directement à mes disponibilités sur mon agenda en ligne.</h3>
		<v-btn rounded large class="white--text mt-6" color="buttons">Cliquez-ici</v-btn>
	</v-container>
</template>

<script>
export default {
	name: "HomeHero",
};
</script>

<style scoped>
.hero {
	background: url("../assets/catrdv.jpg");
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
