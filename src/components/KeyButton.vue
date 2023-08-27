<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: "KeyButton",
  props: ['color', 'text'],
})
</script>

<template>
  <q-btn :color="color" :text-color="text" size="30px 40px" padding="30px 60px" unelevated square>
    <slot/>
  </q-btn>
</template>

<style scoped>

</style>
