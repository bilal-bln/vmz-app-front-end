<!-- 
  Leaflet marker cluster component
  containing custom leaflet markers component
-->

<template>
  <div>
    <v-marker-cluster>
      <LeafletMarkers />
    </v-marker-cluster>
  </div>
</template>

<script>
import Vue2LeafletMarkerCluster from "vue2-leaflet-markercluster";
import LeafletMarkers from "./LeafletMarkers";

export default {
  name: "LeafletMarkerCluster",
  components: {
    "v-marker-cluster": Vue2LeafletMarkerCluster,
    LeafletMarkers
  }
};
</script>

<style scoped>
/* import styling for leaflet marker cluster */
@import "~leaflet.markercluster/dist/MarkerCluster.css";
@import "~leaflet.markercluster/dist/MarkerCluster.Default.css";
</style>