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
  },
  transition: {
    name: 'page-fade',
    mode: 'out-in'
  }
}
</script>

<style scoped>
.start-wrapper {
  display: flex;
  flex-flow: column;
  align-items: center;
}
</style>
