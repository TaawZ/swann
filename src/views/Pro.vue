<template>
	<v-main>
		<Provid />
		<Carousel />
		<RowPic />
		<Skills />
		<Pricing />
		<v-row v-if="$vuetify.breakpoint.lgAndUp" no-gutters>
			<v-col>
				<Leaflet />
			</v-col>
			<v-col>
				<Form />
			</v-col>
		</v-row>
		<v-col v-if="$vuetify.breakpoint.mdAndDown">
			<Leaflet />
			<Form />
		</v-col>
	</v-main>
</template>

<script>
import Provid from "../components/Provid";
import Carousel from "../components/Carousel";
import RowPic from "../components/RowPic";
import Skills from "../components/Skills";
import Pricing from "../components/Pricing";
import Form from "../components/Form";
import Leaflet from "../components/Leaflet";
export default {
	name: "App",
	components: {
		Provid,
		Carousel,
		RowPic,
		Skills,
		Pricing,
		Form,
		Leaflet,
	},
};
</script>
