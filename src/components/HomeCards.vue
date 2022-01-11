<template>
	<v-row no-gutters align="center" justify="center">
		<v-col md="6">
			<v-card class="pa-16" flat tile align="center" justify="center">
				<v-img src="../assets/IMG_4719.jpg" width="650" height="600">
					<v-card-title font-size="24" justify="center" class="title mt-16 justify-center white--text"> Vous êtes éleveur, propriétaire d'haras..... </v-card-title>
					<v-card-title class="mt-16 justify-center white--text"> PROFESSIONNELS</v-card-title>
					<v-card-title></v-card-title>
					<v-btn rounded large class="white--text mt-13" href="professionnels" color="buttons"> En savoir plus </v-btn>
				</v-img>
			</v-card>
		</v-col>
		<v-col md="6">
			<v-card class="pa-16" align="center" justify="center" tile flat>
				<v-img src="../assets/IMG_1549.jpg" width="650" height="600">
					<v-card-title class="mt-16 justify-center white--text"> Vous avez un animal domestique </v-card-title>
					<v-card-subtitle class="white--text"> (chien, chat, cheval, nouveaux animaux de compagnie...)</v-card-subtitle>
					<v-card-title class="mt-16 justify-center white--text"> PARTICULIERS</v-card-title>
					<v-btn rounded large class="white--text mt-16" href="Particuliers" color="buttons"> En savoir plus </v-btn>
				</v-img>
			</v-card>
		</v-col>
	</v-row>
</template>

<script>
export default {
	name: "HomeCards",
};
</script>
