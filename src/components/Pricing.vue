<template>
	<v-container>
		<v-row>
			<v-col md="3"></v-col>
			<v-col>
				<h1>Tarifs et lots</h1>
				<v-row>
					<span>Séance simple pour grands animaux </span>
					<v-spacer></v-spacer>
					<span>80 €* </span>
				</v-row>
				<p>Une visite simple pour cheval et gros ruminant</p>
				<v-row>
					<span>Séance simple pour petits animaux </span>
					<v-spacer></v-spacer>
					<span>45 €* </span>
				</v-row>
				<p>Une visite simple pour un chien ou chat ou petit ruminant.</p>
				<v-row>
					<span>Pour un suivi régulier, ou pour un groupe d'animaux </span>
					<v-spacer></v-spacer>
					<span>Sur devis </span>
				</v-row>
				<p>
					Dans le cas d'une pathologie qui nécessite un suivi régulier, pour un groupe à partir de 5 animaux, <br />
					envoyez-moi un mail et je vous répondrai dans les plus bref délais.
				</p>
				<div>*Prix sans les frais de déplacement.</div>
			</v-col>
			<v-col md="3"></v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
	font-size: 24px;
}

span {
	font-size: 24px;
	color: white;
	margin-bottom: 10px;
}

p {
	font-size: 14px;
	color: white;
}

div {
	color: white;
	font-size: 10px;
}
</style>
