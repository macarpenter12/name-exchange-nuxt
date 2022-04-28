<template>
    <b-container>
      <b-row style="margin-bottom: 16px">
        <h3>Members:</h3>
      </b-row>

      <div class="members-form-group">
        <b-row v-for="member in family.members" :key="member.id" class="members-form-row">
          <b-col>{{ member.firstName }} {{ member.lastName }}</b-col>
          <b-col><button @click="removeFamilyMember(member.id)">Remove</button></b-col>
        </b-row>
      </div>
      
      <div class="members-form-group">
        <b-row class="members-form-row">
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
  components: {
    BRow,
    BCol,
  },
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
.members-form-group {
  margin-bottom: 32px;
}

.members-form-row {
  margin-bottom: 8px;
}
</style>
