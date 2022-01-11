<template>
	<v-card class="pa-16" color="#615E5A" flat tile>
		<v-row>
			<v-col md="2" v-if="$vuetify.breakpoint.lgAndUp"></v-col>
			<v-col>
				<h1 class="mb-8">Tarifs et lots</h1>
				<v-row>
					<v-col md="10">
						<span>Séance simple pour grands animaux </span>
						<p>Une visite simple pour cheval et gros ruminant</p>
					</v-col>
					<v-col>
						<span>80 €* </span>
					</v-col>
				</v-row>

				<v-row>
					<v-col md="10">
						<span>Séance simple pour petits animaux </span>
						<p>Une visite simple pour un chien ou chat ou petit ruminant.</p>
					</v-col>
					<v-col>
						<span>45 €* </span>
					</v-col>
				</v-row>

				<v-row>
					<v-col md="10">
						<span>Pour un suivi régulier, ou pour un groupe d'animaux </span>
						<p>
							Dans le cas d'une pathologie qui nécessite un suivi régulier, pour un groupe à partir de 5 animaux, <br />
							envoyez-moi un mail et je vous répondrai dans les plus bref délais.
						</p>
					</v-col>
					<v-col>
						<span>Sur devis </span>
					</v-col>
				</v-row>
				<v-col md="2" v-if="$vuetify.breakpoint.lgAndUp"></v-col>
				<div>*Prix sans les frais de déplacement.</div>
			</v-col>
		</v-row>
	</v-card>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
	font-size: 24px;
	color: white;
}

span {
	font-size: 24px;
	color: white;
	margin-bottom: 10px;
	font-family: "Crimson Pro", serif;
}

p {
	font-size: 14px;
	color: #a3b4c4;
	font-family: "Crimson Pro", serif;
}

div {
	font-size: 10px;
	color: #a3b4c4;
	font-family: "Crimson Pro", serif;
}
</style>
