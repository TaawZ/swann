<template>
	<l-map :center="center" :zoom="zoom" class="map" ref="map" @update:zoom="zoomUpdated" @update:center="centerUpdated">
		<l-tile-layer :url="url"> </l-tile-layer>
		<l-marker :lat-lng="markerLatLng"></l-marker>
	</l-map>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";

export default {
	components: {
		LMap,
		LTileLayer,
		LMarker,
	},
	data() {
		return {
			url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
			center: [49.44240403887612, 1.100630490001775],
			markerLatLng: [49.44240403887612, 1.100630490001775],
			zoom: 12,
		};
	},
	methods: {
		zoomUpdated(zoom) {
			this.zoom = zoom;
			console.log(this.markers);
		},
		centerUpdated(center) {
			this.center = center;
		},
	},
};
</script>

<style>
.mapContainer {
	position: absolute;
	overflow: hidden;
}
</style>
