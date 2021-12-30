<template>
	<v-app>
		<v-row>
			<v-col md="1"></v-col>
			<v-col class="mt-4" md="5" justify="center" align="center">
				<v-card flat width="800" height="800">
					<v-img src="../assets/IMG_4719.jpg" class="pt-16" width="800" height="800">
						<v-card-title font-size="24" justify="center" class="title mt-16 justify-center white--text"> Vous êtes éleveur, propriétaire d'haras..... </v-card-title>
						<v-card-title class="mt-16 justify-center white--text"> PROFESSIONNELS</v-card-title>
						<v-card-title></v-card-title>
						<v-btn rounded large class="white--text mt-13" color="buttons"> En savoir plus </v-btn></v-img
					>
				</v-card>
			</v-col>
			<v-col class="mt-4" md="5" justify="center" align="center">
				<v-card flat width="800" height="800">
					<v-img src="../assets/IMG_1549.jpg" class="pt-16" width="800" height="800">
						<v-card-title class="mt-16 justify-center white--text"> Vous avez un animal domestique </v-card-title>
						<v-card-subtitle class="white--text"> (chien, chat, cheval, nouveaux animaux de compagnie...)</v-card-subtitle>
						<v-card-title class="mt-16 justify-center white--text"> PARTICULIERS</v-card-title>
						<v-btn rounded large class="white--text mt-16" color="buttons"> En savoir plus </v-btn>
					</v-img>
				</v-card>
			</v-col>
			<v-col md="1"></v-col>
		</v-row>
	</v-app>
</template>

<script>
export default {
	name: "HomeCards",
};
</script>
