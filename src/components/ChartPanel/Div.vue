<template>
  <div id="chart-panel-div">
    <h3>Verkehrsstörungen nach Art</h3>
    <TrafficDisordersByTypeChart id="traffic-disorders-by-type-chart" />
  </div>
</template>

<script>
import TrafficDisordersByTypeChart from "./Components/TrafficDisordersByTypeChart";

export default {
  name: "ChartPanelDiv",
  components: {
    TrafficDisordersByTypeChart
  }
};
</script>

<style scoped>
#traffic-disorders-by-type-chart {
  margin: 24px;
}
</style>