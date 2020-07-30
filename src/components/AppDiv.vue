<template>
  <div id="app-div">
    <MapDiv id="map-div" />
    <MenuDrawer />
  </div>
</template>

<script>
// import libraries
import MapDiv from "./Map/Div";
import MenuDrawer from "./Menu/Drawer";

export default {
  name: "AppDiv", // name of the component
  components: { // register components
    MapDiv,
    MenuDrawer
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app-div {
  /* make the component "AppDiv" full size/screen */
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
}

#map-div {
  /* make the component "MapDiv" full size/screen */
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;

  z-index: 0; /* content layer */
}
</style>