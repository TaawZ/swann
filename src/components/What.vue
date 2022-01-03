<template>
	<v-col color="primary" flat justify="center" align="center">
		<h1 class="white--text mt-16">Qu'est ce que l'ostéopathie ?</h1>
		<h2 class="white--text">
			Découvrez les bienfaits de l'ostéopathie pour animaux, les principes, les actualités,<br />
			les évolutions de la recherche...
		</h2>
		<v-btn rounded large class="mt-4 white--text" color="buttons"> En savoir plus </v-btn>
		<v-container class="pa-16">
			<v-img src="../assets/all-picto.png"></v-img>
		</v-container>
	</v-col>
</template>

<script>
export default {
	name: "What",
};
</script>

<style scoped>
h1 {
	font-size: 30px;
}

h2 {
	font-size: 20px;
}
</style>
