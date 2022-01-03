<template>
	<v-toolbar flat color="primary" height="150">
		<v-row justify="center" align="center">
			<v-toolbar-title> <v-img src="../assets/logo-blanc-transparent.png" max-height="130" max-width="130"></v-img> </v-toolbar-title>
			<v-toolbar-items>
				<v-btn color="primary" elevation="0" v-for="link in links" :key="link" :to="{ name: link }">
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
			links: ["Acceuil", "Vous êtes professionnels ?", "Vous êtes particuliers ?", "L'ostéopathie-consultation", "Prendre rendez-vous", "Les cas", "Le blog"],
		};
	},
};
</script>
