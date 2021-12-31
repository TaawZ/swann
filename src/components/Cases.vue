<template>
	<v-container>
		<v-row align="center">
			<v-col class="Kali" md="4">Cas de Kali</v-col>
			<v-col class="Talvara" md="4">Cas de Talvara</v-col>
			<v-col class="Phoenix" md="4">Cas de Phoenix</v-col>
		</v-row>
	</v-container>
</template>

<style scoped>
.Kali {
	background: url("../assets/Kali.jpg");
	background-size: cover;
	height: 50vh;
	font-size: 45px;
	color: #a01037;
	display: flex;
	justify-content: center;
	align-items: end;
}
.Talvara {
	background: url("../assets/talvara.png");
	background-size: cover;
	height: 50vh;
	font-size: 45px;
	color: #a01037;
	display: flex;
	justify-content: center;
	align-items: end;
}
.Phoenix {
	background: url("../assets/IMG_1483.jpg");
	background-size: cover;
	height: 50vh;
	font-size: 45px;
	color: #a01037;
	display: flex;
	justify-content: center;
	align-items: end;
}
</style>
