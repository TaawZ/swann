<template>
	<v-card class="pt-16 pb-16" flat tile>
		<v-row>
			<v-col md="2" v-if="$vuetify.breakpoint.mdAndUp"></v-col>
			<v-col justify="center" align="center" md="4">
				<span class="myNumber">1</span>
				<h2>EFOA</h2>
				<p>Diplômée depuis 2021 de l'école française d'ostéopathie animale.</p>
				<p>Après un cursus de cinq ans d'étude.</p>
			</v-col>
			<v-col justify="center" align="center" md="4">
				<span class="myNumber">2</span>
				<h2>Formations</h2>
				<p>L'ostéopathie est une vaste médecine, avec de nombreuses approches et techniques.</p>
				<p>C'est pour cela que je continue de me former en continue à la recherche de nouveaux outils</p>
			</v-col>
		</v-row>
	</v-card>
</template>

<script>
export default {};
</script>

<style scoped>
.myNumber {
	display: block;
	width: 52px;
	height: 52px;
	color: #a01037;
	font-size: 24px;
	font-family: "Crimson Pro", serif;
	border: 2px solid;
	border-radius: 100%;
	text-align: center;
	justify-content: center;
	padding-top: 5px;
	margin-bottom: 24px;
}

h2 {
	font-size: 24px;
	font-family: "Crimson Pro", serif;
}

p {
	font-size: 18px;
	font-family: "Crimson Pro", serif;
}
</style>
