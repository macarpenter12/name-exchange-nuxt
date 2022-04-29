<template>
  <b-container>
    <b-row class="global-form-row">
      <h3>Members:</h3>
    </b-row>

    <div class="global-form-group">
      <b-row v-for="member in family.members" :key="member.id" class="global-form-row">
        <b-col cols="8">{{ member.firstName }} {{ member.lastName }}</b-col>
        <b-col cols="4" style="align-self: center">
          <b-row style="justify-content: flex-end">
            <button @click="removeFamilyMember(member.id)">Remove</button>
          </b-row>
        </b-col>
      </b-row>
    </div>
    
    <div class="global-form-group">
      <b-row class="global-form-row">
        <b-col>
          <label for="firstNameInput">First Name</label>
        </b-col>
        <b-col>
          <input id="firstNameInput" v-model="firstName">
        </b-col>
      </b-row>

      <b-row>
        <b-col>
            <label for="lastNameInput">Last Name (optional)</label>
        </b-col>
        <b-col>
          <input id="lastNameInput" v-model="lastName">
        </b-col>
      </b-row>
    </div>

    <b-row style="justify-content: center">
      <button @click="addFamilyMember">Add a family member</button>
    </b-row>
  </b-container>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue';
export default {
  components: { BRow, BCol, },
  data: function() {
    return {
      firstName: '',
      lastName: '',
    };
  },
  methods: {
    addFamilyMember() {
      this.$store.dispatch('family/addMember', {
        familyId: this.$store.state.family.family.id,
        firstName: this.firstName,
        lastName: this.lastName,
      });
    },
    removeFamilyMember(personId) {
      this.$store.dispatch('family/removeMember', personId);
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
label {
  white-space: nowrap;
}
</style>
