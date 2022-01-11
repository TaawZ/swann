<template>
	<v-card color="#f5f7f9" class="pa-16" align="center" justify="center" tile flat>
		<v-row class="pa-16">
			<v-col text-align="center" justify="center">
				<h1 class="mb-6">Je me déplace dans la région de Normandie et dans le département des <br />Yvelines</h1>
				<h1>06 16 08 19 41</h1>

				<v-form class="pl-4" ref="form" v-model="valid" lazy-validation>
					<v-text-field v-model="Nom" :rules="NomRules" outlined label="Nom" required></v-text-field>

					<v-text-field v-model="email" :rules="emailRules" outlined label="E-mail" required></v-text-field>

					<v-text-field v-model="bjet" :rules="objetRules" outlined label="Objet" required></v-text-field>

					<v-text-field v-model="message" :rules="messageRules" outlined label="Message" required></v-text-field>

					<v-btn :disabled="!valid" color="buttons" class="rounded white--text mr-4" @click="validate"> Envoyer </v-btn>
				</v-form>
			</v-col>
		</v-row>
	</v-card>
</template>

<script>
import Leaflet from "./Leaflet";
export default {
	components: Leaflet,
	data: () => ({
		valid: true,
		Nom: "",
		NomRules: [(v) => !!v || "Le Nom est obligatoire"],
		email: "",
		emailRules: [(v) => !!v || "L'email est obligatoire", (v) => /.+@.+\..+/.test(v) || "Merci de renseigner un e-mail valide."],
		objet: "",
		objetRules: [(v) => !!v || "L'objet est obligatoire", (v) => (v && v.length <= 20) || "L'objet ne doit pas faire plus de 20 caractères"],
		message: "",
		messageRules: [(v) => !!v || "Le message est obligatoire", (v) => (v && v.length >= 10) || "Le message doit comporter au moins 10 caractères"],
		checkbox: false,
	}),
};
</script>

<style scoped>
p {
	font-family: "Crimson Pro", serif;
	font-size: 18px;
}
h1 {
	font-family: "Crimson Pro", serif;
	font-size: 24px;
}
</style>
