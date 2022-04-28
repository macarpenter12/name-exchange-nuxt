<template>
  <div class='start'>
    <h2>Enter your family code.</h2>
    <input v-model='familyId'>
    <nuxt-link :to="'/' + familyId"><button>Start</button></nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      familyId: ''
    }
  }
}
</script>

<style scoped>
.start {
  display: flex;
  flex-flow: column;
  align-items: center;
}

h2 {
  margin-bottom: 18px;
}

button {
  margin-top: 12px;
}
</style>
