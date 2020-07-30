<!-- Custom leaflet popup component -->

<template>
  <l-popup>
    <PopupContentDiv />
  </l-popup>
</template>

<script>
import { LPopup } from "vue2-leaflet";
import PopupContentDiv from "./PopupContentDiv";

export default {
  name: "LeafletPopup",
  components: {
    LPopup,
    PopupContentDiv
  }
};
</script>

<style scoped></style>