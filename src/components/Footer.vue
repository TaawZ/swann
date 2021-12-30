<template>
	<v-card flat height="60px">
		<v-footer padless>
			<v-card flat tile width="100%" color="primary" class="text-center">
				<v-card-text>
					<v-btn v-for="icon in icons" :key="icon.name" class="mx-4" icon>
						<a class="text-decoration-none" :href="icon.url" :target="icon.target">
							<v-icon color="white" size="24px">
								{{ icon.name }}
							</v-icon>
						</a>
					</v-btn>
					<v-spacer></v-spacer>
					<span class="white--text">swann.osteoanimaux@gmail.com | 06.16.08.19.41 | Rouen</span>
				</v-card-text>
			</v-card>
		</v-footer>
	</v-card>
</template>

<script>
export default {
	name: "Footer",
	data() {
		return {
			icons: [
				{
					name: "mdi-instagram",
					url: "https://www.instagram.com/swann_osteoanimaux/",
					target: "_blank",
				},
				{
					name: "mdi-facebook",
					url: "https://www.facebook.com/swannosteoanimaux/",
					target: "_blank",
				},
			],
		};
	},
};
</script>
