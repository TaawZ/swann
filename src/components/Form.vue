<template>
	<v-card color="#f5f7f9" class="pa-12" align="center" justify="center" tile flat>
		<v-row>
			<v-col text-align="center" justify="center">
				<p>Je me déplace dans la région de Normandie et dans le département des Yvelines</p>
				<h1>Disponible du lundi au samedi pour les consultations.</h1>
				<h1>Urgence : disponible 7/7 et 24/24h</h1>

				<v-form class="pl-4 pr" ref="form" v-model="valid" lazy-validation>
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
	color: #80767a;
	font-family: "Crimson Pro", serif;
	font-size: 18px;
}
h1 {
	color: #80767a;
	font-family: "Crimson Pro", serif;
	font-size: 24px;
}
</style>
