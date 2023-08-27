<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: "InputDisplay",
  props: ['input'],
})
</script>

<template>
  <div class="inline-block">
    <q-icon
      v-for="(icon, index) in 6"
      :key="index"
      :name="index < input.length ? 'radio_button_checked' : 'radio_button_unchecked'"
      class="q-mr-sm q-px-lg"
      color="white"
    />
  </div>
</template>

<style scoped>

</style>
