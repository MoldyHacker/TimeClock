<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: "KeyButton",
  props: ['color'],
})
</script>

<template>
  <q-btn :color="color" size="30px 40px" padding="30px 40px" unelevated square>
    <slot/>
  </q-btn>
</template>

<style scoped>

</style>
