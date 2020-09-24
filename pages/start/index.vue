<template>
<div class='start-wrapper'>
  <div class='component-card'>
    <Start />
  </div>
</div>
</template>

<script>
import Start from '@/components/Start';
export default {
  components: {
    Start
  }
}
</script>

<style scoped>
.start-wrapper {
  display: flex;
  flex-flow: column;
  align-items: center;
}

.component-card {
  display: inline-block;
  align-items: center;
  border: 1px solid black;
  border-radius: 8px;
  padding: 20px;
  margin: 16px;
  box-shadow: 5px 5px 5px gray;
}
</style>
