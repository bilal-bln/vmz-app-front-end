<template>
  <div>
    <div class="control-element-heading-div">
      Wählen Sie einen Datumsbereich
    </div>
    <div class="control-element-div">
      <DatePicker />
    </div>
    <div class="control-element-heading-div">
      Wählen Sie einen Bezirk
    </div>
    <div class="control-element-div">
      <DistrictSelect />
    </div>
    <div class="control-element-heading-div">
      Wählen Sie eine Verkehrstörungsart
    </div>
    <div class="control-element-div">
      <TrafficDisorderTypeSelect />
    </div>
  </div>
</template>

<script>
// import libraries
import DatePicker from "./Components/DatePicker";
import DistrictSelect from "./Components/District/Select";
import TrafficDisorderTypeSelect from "./Components/TrafficDisorderType/Select";

export default {
  name: "ControlPanelDiv", // name of the component
  components: {
    DatePicker,
    DistrictSelect,
    TrafficDisorderTypeSelect
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.control-element-heading-div {
  margin-bottom: 8px;
}
.control-element-div {
  margin-bottom: 32px;
}
</style>