<template>
    <AppDiv id="app-div"/>
</template>

<script>
import AppDiv from "./components/AppDiv";

export default {
  name: "App",
  components: {
    AppDiv
  }
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>