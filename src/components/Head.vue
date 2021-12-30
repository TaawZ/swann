<template>
	<v-toolbar flat color="primary" height="150">
		<v-row justify="center" align="center">
			<v-toolbar-title> <v-img src="../assets/logo-blanc-transparent.png" max-height="130" max-width="130"></v-img> </v-toolbar-title>
			<v-toolbar-items>
				<v-btn v-for="link in links" :key="link" :to="{ name: link }" plain>
					<strong>{{ link }}</strong>
				</v-btn>
				<!--	<v-btn color="primary" elevation="0"> Acceuil</v-btn>
				<v-btn color="primary" elevation="0"> Vous êtes professionnels ?</v-btn>
				<v-btn color="primary" elevation="0"> Vous êtes particuliers ?</v-btn>
				<v-btn color="primary" elevation="0"> L'osthéopathie-consultation</v-btn>
				<v-btn color="primary" elevation="0"> Prendre rendez-vous</v-btn>
				<v-btn color="primary" elevation="0"> Les cas</v-btn>
				<v-btn color="primary" elevation="0"> Le blog</v-btn>-->
			</v-toolbar-items>
		</v-row>
	</v-toolbar>
</template>

<script>
export default {
	name: "Head",

	data() {
		return {
			links: ["Home", "Pro"],
		};
	},
};
</script>
