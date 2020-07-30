<!-- popup content div component -->

<template>
  <div id="popup-content-div">
    <h4>{{data.summary}}</h4>
    <h5>{{data.street}}</h5>
    <p>
      Beschreibung: {{data.description}}
      <br />
      <br />
      Bereich: {{data.section}}
      <br />
      <br />
      Von: {{data.timeFrom}}
      <br />
      Bis: {{data.timeTo}}
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PopupContentDiv",
  data() {
    return {
      data: {}
    };
  },
  computed: mapGetters(["preloadedTrafficDisorderData"]),
  created() {
    this.data = this.preloadedTrafficDisorderData;
  }
};
</script>

<style scoped></style>