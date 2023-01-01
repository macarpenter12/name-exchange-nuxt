<template>
<div class='family-draw'>
  <h3>Draw Names:</h3>
  <hr>

  <ul v-if="drawSuccess">
    <li v-for="assignment in assignments">
      <strong>{{ assignment.giver.firstName }}</strong> will give a gift to <strong>{{  assignment.receiver.firstName }}</strong>
    </li>
  </ul>
  <p v-else>Unable to successfully assign all members. Try removing some restrictions and try again.</p>

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
    async submitDrawNames() {
      const { data } = await this.$axios.post(`/draw/${context.state.family.id}`);
      this.drawSuccess = data.success;
      this.$store.dispatch('family/drawNames', data.assignments);
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