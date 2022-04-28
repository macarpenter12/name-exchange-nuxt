<template>
  <div class='family-exceptions'>
  <h3>Restrictions:</h3>
  <hr>

  <div class='exception-input'>
    <select v-model='restrictionGiver'>
      <option
        v-for='member in family.members'
        :key='member.name'>{{ member.name }}</option>
    </select> cannot draw

    <select v-model='restrictionRecipient'>
      <option
        v-for='member in family.members'
        :key='member.name'>{{ member.name }}</option>
    </select>
  </div>

  <button @click='addRestriction'>Add restriction</button>

  <ul>
      <li
        v-for='(restriction, index) in family.restrictions'
        :key='index'>{{ restriction.giver }} cannot draw {{ restriction.recipient }}</li>
  </ul>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      restrictionGiver: '',
      restrictionRecipient: ''
    };
  },
  methods: {
    addRestriction() {
      this.$store.dispatch('family/addRestriction', {
        restriction: {
          giver: this.restrictionGiver,
          recipient: this.restrictionRecipient
        }
      });
    },
  },
  computed: {
    family() {
      return this.$store.state.family;
    }
  },
}
</script>

<style scoped>
.family-exceptions {
  display: flex;
  flex-flow: column;
  text-align: left;
}

.exception-input {
  text-align: center;
}

p {
  flex-flow: row;
}
</style>