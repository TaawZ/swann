<template>
	<v-container>
		<v-row no-gutters>
			<v-col md="4"> <v-img position="40% 60%" height="100%" src="../assets/front_cat.jpg"></v-img></v-col>
			<v-col md="4"> <v-img src="../assets/horse_hand.jpg" height="100%"></v-img></v-col>
			<v-col md="4"> <v-img src="../assets/close.jpg" height="100%"></v-img></v-col>
		</v-row>
		<v-row no-gutters v-if="$vuetify.breakpoint.mdAndUp">
			<v-col md="6"> <v-img position="75% 25%" max-height="80%" src="../assets/leg.jpg"></v-img></v-col>
			<v-col md="6"> <v-img position="bottom" height="80%" src="../assets/IMG_1481.jpg"></v-img></v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {};
</script>
