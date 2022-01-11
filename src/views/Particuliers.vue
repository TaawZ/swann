<template>
	<main>
		<ParVid />
		<GridPic />
		<Parousel />
		<Problems />
		<Cases />
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
		<Bio />
	</main>
</template>

<script>
import ParVid from "../components/ParVid";
import GridPic from "../components/GridPic";
import Parousel from "../components/Parousel";
import Problems from "../components/Problems";
import Cases from "../components/Cases";
import Form from "../components/Form";
import Bio from "../components/Bio";
import Leaflet from "../components/Leaflet";
export default {
	components: {
		ParVid,
		GridPic,
		Parousel,
		Problems,
		Cases,
		Form,
		Bio,
		Leaflet,
	},
};
</script>
