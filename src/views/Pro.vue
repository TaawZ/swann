<template>
	<v-main>
		<Provid />
		<Carousel />
		<RowPic />
		<Skills />
		<Pricing />
		<Form />
	</v-main>
</template>

<script>
import Provid from "../components/Provid";
import Carousel from "../components/Carousel";
import RowPic from "../components/RowPic";
import Skills from "../components/Skills";
import Pricing from "../components/Pricing";
import Form from "../components/Form";
export default {
	name: "App",
	components: {
		Provid,
		Carousel,
		RowPic,
		Skills,
		Pricing,
		Form,
	},
};
</script>
