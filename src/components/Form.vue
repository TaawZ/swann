<template>
	<v-container>
		<v-row color="white">
			<v-col md="4"></v-col>
			<v-col md="4">
				<v-form ref="form" v-model="valid" lazy-validation>
					<v-text-field v-model="name" :rules="nameRules" label="Name" required></v-text-field>

					<v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

					<v-text-field v-model="object" :rules="objectRules" label="object" required></v-text-field>

					<v-text-field v-model="message" :rules="messageRules" label="message" required></v-text-field>

					<v-btn :disabled="!valid" color="success" class="mr-4" @click="validate"> Validate </v-btn>
				</v-form>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	data: () => ({
		valid: true,
		name: "",
		nameRules: [(v) => !!v || "Le nom est obligatoire"],
		email: "",
		emailRules: [(v) => !!v || "L'email est obligatoire", (v) => /.+@.+\..+/.test(v) || "Merci de renseigner un e-mail valide."],
		object: "",
		objectRules: [(v) => !!v || "L'objet est obligatoire", (v) => (v && v.length <= 20) || "L'objet ne doit pas faire plus de 20 caractères"],
		message: "",
		messageRules: [(v) => !!v || "Le message est obligatoire", (v) => (v && v.length >= 10) || "Le message doit comporter au moins 10 caractères"],
		checkbox: false,
	}),
};
</script>
