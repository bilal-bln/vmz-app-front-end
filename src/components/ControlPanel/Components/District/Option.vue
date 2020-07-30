<template>
  <div>
    <el-option :key="'Reset'" :label="''" :value="null">{{"Zurücksetzen"}}</el-option>
    <el-option
      v-for="district in districts"
      :key="district._id"
      :label="district.label"
      :value="district._id"
    >{{district.label}}</el-option>
  </div>
</template>

<script>
import { Option } from "element-ui";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "DistrictOption",
  components: {
    "el-option": Option
  },
  data() {
    return {
      value: null
    };
  },
  methods: {
    ...mapActions(["fetchDistricts", "processFilterQuery"])
  },
  computed: mapGetters(["districts"]),
  created() {
    this.processFilterQuery();
    this.fetchDistricts();
  }
};
</script>

<style scoped></style>