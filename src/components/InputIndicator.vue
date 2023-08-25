<script>
import {defineComponent} from 'vue';

export default defineComponent({
  name: "InputIndicator",
  props: ['state'],
})
</script>

<template>
  <div class="">
    <q-icon v-if="state" name="radio_button_checked" color="white"/>
    <q-icon v-else name="radio_button_unchecked" color="white" />
  </div>
</template>

<style scoped>

</style>
