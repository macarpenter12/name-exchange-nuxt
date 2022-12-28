<template>
  <div class='family-exceptions'>
  <h3>Restrictions:</h3>
  <hr>

  <div class='exception-input'>
    <select v-model='giverId'>
      <option
        v-for='member in familyMembers'
        :value="member.id"
        :key='member.id'>{{ member.firstName }}</option>
    </select> cannot draw

    <select v-model='receiverId' :disabled="availableReceivers.length === 0">
      <option
        v-for='member in availableReceivers'
        :value="member.id"
        :key='member.id'>{{ member.firstName }}</option>
    </select>
  </div>

  <button @click='addRestriction'>Add restriction</button>

  <ul>
      <li
        v-for='(restriction, index) in restrictions'
        :key='index'>
      {{ restriction.giver.firstName }} cannot draw {{ restriction.receiver.firstName }}
      <a @click="deleteRestriction(restriction.giver.id, restriction.receiver.id)">X</a>
      </li>
  </ul>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: function() {
    return {
      giverId: null,
      receiverId: null,
    };
  },
  methods: {
    addRestriction() {
      this.$store.dispatch('family/addRestriction', {
        restriction: {
          giverId: this.giverId,
          receiverId: this.receiverId
        }
      });
    },
    deleteRestriction(giverId, receiverId) {
      this.$store.dispatch('family/deleteRestriction', {
        restriction: {
          giverId,
          receiverId,
        }
      });
    }
  },
  computed: {
    ...mapGetters({
      family: 'family/family',
      familyMembers: 'family/familyMembers',
      restrictions: 'family/restrictions',
    }),
    availableReceivers() {
      let existingRestrictions = this.restrictions.filter(r => r.giver.id === this.giverId).map(r => r.receiver.id);
      return this.familyMembers.filter(e => e.id !== this.giverId && !existingRestrictions.includes(e.id));
    },
  },
  watch: {
    giverId() {
      this.receiverId = null;
    }
  }
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