<script>
import {defineComponent} from 'vue';
import InputIndicator from 'components/InputIndicator.vue';

export default defineComponent({
  name: "InputDisplay",
  components: {InputIndicator},
  props: ['count'],
})
</script>

<template>
  <div class="inline-block q-px-lg" v-for="indicator in 6" :key="indicator">
    <input-indicator />
  </div>
</template>

<style scoped>

</style>
