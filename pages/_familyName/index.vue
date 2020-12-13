<template>
<div>
  <div class='family-home-row'>
    <div class='component-card'>
      <FamilyMembers 
        :family='family' />
    </div>

    <div class='component-card'>
      <FamilyRestrictions 
        :family='family' />
    </div>
  </div>

  <div class='family-home-row'>
    <div class='component-card'>
      <FamilyDraw
        :family='family' />
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
    FamilyDraw
  },
  computed: {
    family() {
      return this.$store.state.family;
    }
  },
  transition: {
    name: 'page-fade',
    mode: 'out-in'
  }
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
