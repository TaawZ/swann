<template>
	<v-toolbar class="z-index" flat color="transparent" height="150">
		<v-row justify="center" align="center">
			<v-toolbar-title> <v-img src="../assets/logo-blanc-transparent.png" max-height="130" max-width="130"></v-img> </v-toolbar-title>
			<v-toolbar-items>
				<v-btn class="button-text white--text" elevation="0" color="transparent" v-for="link in links" :key="link" :to="{ name: link }">
					{{ link }}
				</v-btn>
			</v-toolbar-items>
		</v-row>
	</v-toolbar>
</template>

<script>
export default {
	name: "Head",

	data() {
		return {
			links: ["Accueil", "Vous êtes professionnels ?", "Vous êtes particuliers ?", "L'ostéopathie-consultation", "Prendre rendez-vous", "Les cas", "Le blog"],
		};
	},
};
</script>

<style scoped>
.z-index {
	z-index: 1;
}
</style>
