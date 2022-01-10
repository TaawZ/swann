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
				primary: "#C4C4C4", // grey
				buttons: "#a01037", // red
			},
		},
	},
});
