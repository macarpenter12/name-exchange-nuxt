<template>
  <b-container>
    <b-row>
      <h1>{{ this.$store.state.family.family.name }} family</h1>
    </b-row>

    <b-row>
      <b-col lg="5" md="10" sm="12" class="component-card">
        <FamilyMembers />
      </b-col>

      <b-col lg="5" md="10" sm="12" class="component-card">
        <FamilyRestrictions />
      </b-col>

      <b-col lg="5" md="10" sm="12" class="component-card">
        <FamilyDraw />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { BContainer, BRow, BCol } from "bootstrap-vue";
import FamilyMembers from "@/components/FamilyMembers";
import FamilyRestrictions from "@/components/FamilyRestrictions";
import FamilyDraw from "@/components/FamilyDraw";
export default {
  components: {
    BContainer,
    BRow,
    BCol,
    FamilyMembers,
    FamilyRestrictions,
    FamilyDraw,
  },
  created() {
    this.$store.dispatch("family/loadFamily", this.$route.params.familyId);
  },
  transition: {
    name: "page-fade",
    mode: "out-in",
  },
};
</script>

<style scoped>
.row {
  justify-content: center;
}
</style>
