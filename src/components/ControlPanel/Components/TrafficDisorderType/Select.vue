<template>
  <el-select
    v-model="value"
    placeholder="Verkehrsstörungsart wählen"
    @change="changeSelectedTrafficDisorderType(value)"
  >
    <TrafficDisorderTypeOption />
  </el-select>
</template>

<script>
import { Select } from "element-ui";
import { mapActions } from "vuex";
import TrafficDisorderTypeOption from "./Option";

export default {
  name: "TrafficDisorderTypeSelect",
  components: {
    "el-select": Select,
    TrafficDisorderTypeOption
  },
  data() {
    return {
      value: null
    };
  },
  methods: {
    ...mapActions([
      "fetchDistricts",
      "fetchTrafficDisorders",
      "fetchTrafficDisordersByTypeChartData",
      "processFilterQuery",
      "updateSelectedTrafficDisorderType"
    ]),
    changeSelectedTrafficDisorderType(selectedTrafficDisorderType) {
      this.updateSelectedTrafficDisorderType(selectedTrafficDisorderType);
      this.processFilterQuery();
      this.fetchDistricts();
      this.fetchTrafficDisordersByTypeChartData();
      this.fetchTrafficDisorders();
    }
  }
};
</script>

<style scoped></style>