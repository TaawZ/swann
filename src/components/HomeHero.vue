<template>
	<v-card flat color="transparent" align="center" justify="center">
		<v-img class="pt-16" max-width="100%" max-height="600" src="../assets/IMG_1496.jpg">
			<Head />
			<h1 class="mt-16">Swann Rétière</h1>
			<h2 class="white--text">Ostéopathe pour animaux</h2>
			<h3 class="white--text">Pour apporter un soin global à votre animal</h3>
			<v-btn rounded large class="white--text mt-6" color="buttons" href="Rendezvous">Prendre rendez-vous</v-btn>
		</v-img>
	</v-card>
</template>

<script>
import Head from "./Head";
export default {
	components: Head,
};
</script>

<style scoped>
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
