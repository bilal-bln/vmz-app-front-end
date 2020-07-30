<!-- 
  Custom leaflet markers component.
  "l-popup" will only be created 
  if the mouse hovered over the corresponding "l-marker" component
-->

<template>
  <div>
    <l-marker
      v-for="trafficDisorder in trafficDisorders"
      :key="trafficDisorder._id"
      :lat-lng="trafficDisorder.latLng"
      @mouseover="fetchPreloadedTrafficDisorderData(trafficDisorder._id)"
      v-on:popupopen="updateCurrentlyOpenPopupId(trafficDisorder._id)"
    >
      <l-icon
        :popup-anchor="[0, -16]"
        :icon-size="[32, 32]"
        :icon-url="require(`../../../assets/Icons/${trafficDisorder.iconUrl}`)"
      ></l-icon>
      <LeafletPopup
        v-if="(
        trafficDisorder._id === preloadedTrafficDisorderData._id) ||
        (trafficDisorder._id === currentlyOpenPopupId
        )"
      />
    </l-marker>
  </div>
</template>

<script>
import { LMarker, LIcon } from "vue2-leaflet";
import { mapActions, mapGetters } from "vuex";
import LeafletPopup from "./LeafletPopup";

export default {
  name: "LeafletMarkers",
  components: {
    LMarker,
    LIcon,
    LeafletPopup
  },
  methods: {
    ...mapActions([
      "fetchPreloadedTrafficDisorderData",
      "fetchTrafficDisorders",
      "processFilterQuery",
      "updateCurrentlyOpenPopupId"
    ])
  },
  computed: {
    ...mapGetters([
      "currentlyOpenPopupId",
      "preloadedTrafficDisorderData",
      "trafficDisorders"
    ])
  },
  created() {
    this.processFilterQuery();
    this.fetchTrafficDisorders();
  }
};
</script>

<style scoped></style>