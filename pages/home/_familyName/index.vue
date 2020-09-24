<template>
<div>
  <div class='family-home'>
    <div class='component-card'>
      <FamilyMembers 
        :family='family'/>
    </div>

    <div class='component-card'>
      <FamilyRestrictions 
        :family='family'/>
    </div>

      <!-- drawNames
        
      <div class='miniDisplay' id='drawNames'>
        TODO: Display drawn names and offer to draw new names 
      </div>
    </div>
    -->
  </div>
</div>
</template>

<script>
import FamilyMembers from '@/components/FamilyMembers';
import FamilyRestrictions from '@/components/FamilyRestrictions';
export default {
  components: {
    FamilyMembers,
    FamilyRestrictions
  },
  computed: {
    family() {
      return this.$store.state.family;
    }
  },
  // asyncData(context) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({
  //         family: {
  //           name: 'test',
  //           members: [{ name: 'johnny' }, { name: 'susan' }, { name: 'mary'}]
  //         }
  //       });
  //     }, 1500);
  //   });
  // }
}
</script>

<style scoped>
.family-home {
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
}

.component-card {
  display: flex;
  flex-flow: column;
  min-width: 30%;
  border: 1px solid black;
  border-radius: 8px;
  padding: 20px;
  margin: 16px;
  box-shadow: 5px 5px 5px gray;
}
</style>

<style>
input, select {
  align-self: center;
  max-width: 80%;
  border: 1px solid black;
  border-radius: 4px;
}

button {
  align-self: center;
  width: fit-content;
  margin-top: 16px;
  margin-bottom: 12px;
  border-radius: 4px;
}

ul {
  margin: 0px;
  padding: 8px 0px;
  list-style-type: none;
}

li {
  text-align: center;
}

hr {
  margin-top: 8px;
}
</style>
