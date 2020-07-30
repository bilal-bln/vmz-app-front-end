<!-- Life cycle error has to be fixed -->

<template>
  <l-icon
    :popup-anchor="[0, -16]"
    :icon-size="[32, 32]"
    :icon-url="require(`../../../assets/Icons/${iconUrl}`)"
  ></l-icon>
</template>

<script>
import { LIcon } from "vue2-leaflet";

export default {
  name: "LeafletIcon",
  components: {
    LIcon
  },
  props: ["iconUrl"],
  created() {
    console.log(this.iconUrl);
  }
};
</script>

<style scoped></style>