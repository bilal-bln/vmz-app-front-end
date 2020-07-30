<template>
  <el-select v-model="value" placeholder="Bezirk wählen" @change="changeSelectedDistrict(value)">
    <DistrictOption />
  </el-select>
</template>

<script>
import { Select } from "element-ui";
import { mapActions } from "vuex";
import DistrictOption from "./Option";

export default {
  name: "DistrictSelect",
  components: {
    "el-select": Select,
    DistrictOption
  },
  data() {
    return {
      value: null
    };
  },
  methods: {
    ...mapActions([
      "fetchTrafficDisorders",
      "fetchTrafficDisordersByTypeChartData",
      "fetchTrafficDisorderTypes",
      "processFilterQuery",
      "updateSelectedDistrict"
    ]),
    changeSelectedDistrict(selectedDistrict) {
      this.updateSelectedDistrict(selectedDistrict);
      this.processFilterQuery();
      this.fetchTrafficDisordersByTypeChartData();
      this.fetchTrafficDisorderTypes();
      this.fetchTrafficDisorders();
    }
  }
};
</script>

<style scoped></style>