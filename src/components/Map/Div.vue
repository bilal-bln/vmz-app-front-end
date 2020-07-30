<!-- Div container for leaflet map components -->

<template>
  <div>
    <LeafletMap id="leaflet-map" />
  </div>
</template>

<script>
import LeafletMap from "./Components/LeafletMap";

export default {
  name: "MapDiv",
  components: {
    LeafletMap
  }
};
</script>

<style scoped>
#leaflet-map {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>