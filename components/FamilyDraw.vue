<template>
<div class='family-draw'>
  <h3>Draw Names:</h3>
  <hr>

  <ul>
    <li v-for="assignment in assignments">
      <strong>{{ assignment.giver.firstName }}</strong> will give a gift to <strong>{{  assignment.receiver.firstName }}</strong>
    </li>
  </ul>

  <button @click="submitDrawNames">Draw names</button>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      assignments: 'family/assignments',
    }),
  },
  methods: {
    submitDrawNames() {
      this.$store.dispatch('family/drawNames');
    },
  },
}
</script>

<style scoped>
.family-draw {
  display: flex;
  flex-flow: column;
  text-align: left;
}
</style>