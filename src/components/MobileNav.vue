<template>
	<div class="text--center">
		<v-row justify="center" align="center">
			<v-col xs="4"><v-img width="150" src="../assets/logo-blanc-transparent.png"></v-img></v-col>
			<v-col xs="4"></v-col>
			<v-col>
				<v-menu fixed offset-y>
					<template v-slot:activator="{ on, attrs }">
						<v-icon color="white" v-bind="attrs" v-on="on">mdi-dots-horizontal</v-icon>
					</template>
					<v-list>
						<v-list-item v-for="link in links" :key="link" :to="{ name: link }">
							<v-list-item-title>{{ link }}</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>
			</v-col>
		</v-row>
	</div>
</template>

<script>
export default {
	data() {
		return {
			links: ["Accueil", "Vous êtes professionnels ?", "Vous êtes particuliers ?", "L'ostéopathie-consultation", "Prendre rendez-vous", "Les cas", "Le blog"],
		};
	},
};
</script>
