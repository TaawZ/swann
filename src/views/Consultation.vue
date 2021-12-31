<template>
	<v-main>
		<HeroConsults />
		<ConsultPatterns />
		<Session />
		<BioHistory />
	</v-main>
</template>

<script>
import HeroConsults from "../components/HeroConsults";
import ConsultPatterns from "../components/ConsultPatterns";
import Session from "../components/Session";
import BioHistory from "../components/BioHistory";
export default {
	name: "Consultation",
	components: {
		HeroConsults,
		ConsultPatterns,
		Session,
		BioHistory,
	},
};
</script>
