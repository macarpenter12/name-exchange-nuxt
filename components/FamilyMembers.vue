<template>
    <div class='family-members'>
      <h3>Members:</h3>
      <hr>
      
      <input v-model='memberName'>
      <button @click='addFamilyMember'>Add a family member</button>

      <ul>
        <li
          v-for='member in family.members'
          :key='member.name'>
            {{ member.name }}
          </li>
      </ul>
    </div>
</template>

<script>
export default {
  props: ['family'],
  data: function() {
    return {
      memberName: ''
    };
  },
  methods: {
    addFamilyMember() {
      this.$store.dispatch('family/addMember', {
        member: {
          name: this.memberName
        }
      });
    }
  }
}
</script>

<style scoped>
.family-members {
  display: flex;
  flex-flow: column;
  text-align: left;
}
</style>
