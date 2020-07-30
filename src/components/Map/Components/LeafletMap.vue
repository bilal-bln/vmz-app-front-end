<!-- Leaflet map component containing the leaflet markers component -->

<template>
  <l-map
    v-if="leafletMapProperties.showMap"
    :zoom="leafletMapProperties.zoom"
    :center="leafletMapProperties.center"
    :options="leafletMapProperties.mapOptions"
    :maxBounds="leafletMapProperties.maxBounds"
    :style="leafletMapProperties.zIndex"
  >
    <l-tile-layer :url="leafletMapProperties.url" :attribution="leafletMapProperties.attribution" />
    <l-control-zoom position="bottomright" />
    <LeafletMarkerCluster />
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LControlZoom } from "vue2-leaflet";
import { mapGetters } from "vuex";
import LeafletMarkerCluster from "./LeafletMarkerCluster";

export default {
  name: "LeafletMap",
  components: {
    LMap,
    LTileLayer,
    LControlZoom,
    LeafletMarkerCluster
  },
  computed: mapGetters(["leafletMapProperties"])
};
</script>

<style scoped></style>