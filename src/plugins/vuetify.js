import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
	icons: {
		iconfont: "mdi",
	},
	theme: {
		options: { customProperties: true },
		themes: {
			light: {
				primary: "#2d2d2d", // grey
				buttons: "#a01037", // red
			},
		},
	},
});
