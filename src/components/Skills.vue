<template>
	<v-card flat tile>
		<v-row>
			<v-col md="2" v-if="$vuetify.breakpoint.mdAndUp"></v-col>
			<v-col justify="center" align="center" md="4">
				<h1>1</h1>
				<h2>EFOA</h2>
				<p>Diplômée depuis 2021 de l'école française d'ostéopathie animale.</p>
				<p>Après un cursus de cinq ans d'étude.</p>
			</v-col>
			<v-col justify="center" align="center" md="4">
				<h1 class="rounded-circle">2</h1>
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
h1 {
	color: #a01037;
	font-size: 24px;
}

h2 {
	color: #a01037;
	font-size: 24px;
}

p {
	font-size: 18px;
}
</style>
