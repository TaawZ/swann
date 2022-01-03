<template>
	<v-container>
		<v-card class="my-16" color="#005262">
			<v-row>
				<v-col></v-col>
				<v-col>
					<h1>Disponible du lundi au samedi pour les consultations. Urgence : disponible 7/7 et 24/24h</h1>
					<p>Je me déplace dans la région de Normandie et dans le département des Yvelines</p>
				</v-col>
				<v-col></v-col>
			</v-row>
			<v-row color="white">
				<v-col md="4" v-if="$vuetify.breakpoint.mdAndUp"></v-col>
				<v-col md="4">
					<v-form class="pl-4 pr" ref="form" v-model="valid" lazy-validation>
						<v-text-field v-model="Nom" :rules="NomRules" label="Nom" required></v-text-field>

						<v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

						<v-text-field v-model="bjet" :rules="objetRules" label="Objet" required></v-text-field>

						<v-text-field v-model="message" :rules="messageRules" label="Message" required></v-text-field>
						<v-row class="pb-16" align="center" justify="center">
							<v-btn :disabled="!valid" color="success" class="mr-4" @click="validate"> Envoyer </v-btn>
						</v-row>
					</v-form>
				</v-col>
			</v-row>
		</v-card>
	</v-container>
</template>

<script>
export default {
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
}
h1 {
	color: white;
}
</style>
