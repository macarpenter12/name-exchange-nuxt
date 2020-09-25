<template>
  <div class='start'>
    <h2>Enter your family name.</h2>
    <input v-model='familyName'>
    <nuxt-link :to="'/' + familyName"><button>Nuxt button family</button></nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      familyName: ''
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
