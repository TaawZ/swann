<template>
	<v-container>
		<v-row align="center">
			<v-col class="Kali" md="4"> <v-btn color="#005262" href="cas"> Cas de Kali</v-btn></v-col>
			<v-col class="Talvara" md="4"><v-btn color="#005262" href="cas">Cas de Talvara</v-btn></v-col>
			<v-col class="Phoenix" md="4"><v-btn color="#005262" href="cas">Cas de Phoenix</v-btn></v-col>
		</v-row>
	</v-container>
</template>

<style scoped>
.Kali {
	background: url("../assets/Kali.jpg");
	background-size: cover;
	height: 50vh;
	font-size: 45px;
	color: #005262;
	display: flex;
	justify-content: center;
}
.Talvara {
	background: url("../assets/talvara.png");
	background-size: cover;
	height: 50vh;
	font-size: 45px;
	color: #005262;
	display: flex;
	justify-content: center;
}
.Phoenix {
	background: url("../assets/IMG_1483.jpg");
	background-size: cover;
	height: 50vh;
	font-size: 45px;
	color: #005262;
	display: flex;
	justify-content: center;
}
</style>
