<template>
	<main>
		<Provid />
		<GridPic />
		<Carousel />
		<Problems />
		<Cases />
		<Form />
		<Bio />
	</main>
</template>

<script>
import Provid from "../components/Provid";
import GridPic from "../components/GridPic";
import Carousel from "../components/Carousel";
import Problems from "../components/Problems";
import Cases from "../components/Cases";
import Form from "../components/Form";
import Bio from "../components/Bio";
export default {
	components: {
		Provid,
		GridPic,
		Carousel,
		Problems,
		Cases,
		Form,
		Bio,
	},
};
</script>
