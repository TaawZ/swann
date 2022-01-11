<template>
	<v-main>
		<HeroConsults />
		<ConsultPatterns />
		<Session />
		<Quote />
		<BioHistory />
	</v-main>
</template>

<script>
import HeroConsults from "../components/HeroConsults";
import ConsultPatterns from "../components/ConsultPatterns";
import Session from "../components/Session";
import BioHistory from "../components/BioHistory";
import Quote from "../components/Quote";
export default {
	name: "Consultation",
	components: {
		HeroConsults,
		ConsultPatterns,
		Session,
		BioHistory,
		Quote,
	},
};
</script>
