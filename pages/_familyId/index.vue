<template>
<div>
  <div class='family-home-row'>
    <div class='component-card'>
      <FamilyMembers />
    </div>

    <div class='component-card'>
      <FamilyRestrictions />
    </div>
  </div>

  <div class='family-home-row'>
    <div class='component-card'>
      <FamilyDraw />
    </div>
  </div>
</div>
</template>

<script>
import FamilyMembers from '@/components/FamilyMembers';
import FamilyRestrictions from '@/components/FamilyRestrictions';
import FamilyDraw from '@/components/FamilyDraw'
export default {
  components: {
    FamilyMembers,
    FamilyRestrictions,
    FamilyDraw,
  },
  created() {
    this.$store.dispatch('family/loadFamily', this.$route.params.familyId);
  },
  transition: {
    name: 'page-fade',
    mode: 'out-in'
  },
}
</script>

<style scoped>
.family-home-row {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
}
</style>
