<template>
  <b-container>
    <b-row>
      <div class="component-card">
        <b-container>
          <b-row style="margin-bottom: 16px">
            <h2>Find an existing family</h2>
          </b-row>

          <b-row class="global-form-row">
            <input v-model="existingFamilyId" style="margin-right: 8px" placeholder="Family Code" />
          </b-row>
          <b-row>
            <nuxt-link :to="`/${existingFamilyId}`"><button>Start</button></nuxt-link>
          </b-row>
        </b-container>
      </div>

      <div class="component-card">
        <b-row style="margin-bottom: 16px">
          <h2>Create a new family</h2>
        </b-row>

        <b-row class="global-form-row">
          <input v-model="newFamilyId" style="margin-right: 8px" placeholder="Family Code" />
        </b-row>
        <b-row class="global-form-row">
          <input v-model="familyName" style="margin-right: 8px" placeholder="Family Name" />
        </b-row>
        <b-row>
          <button @click="createFamily">Create</button>
        </b-row>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue';
export default {
  components: { BRow, BCol },
  data() {
    return {
      existingFamilyId: '',
      newFamilyId: '',
      familyName: '',
    };
  },
  methods: {
    createFamily() {
      this.$axios.post(`/family/${this.newFamilyId}`, {
        familyName: this.familyName
      }).then(() => {
        this.$router.push(`/${this.newFamilyId}`);
      });
    },
  },
  transition: {
    name: 'page-fade',
    mode: 'out-in',
  },
};
</script>

<style scoped>
.row {
  justify-content: center;
}
</style>
