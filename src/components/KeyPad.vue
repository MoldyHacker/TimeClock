<script>
import {defineComponent} from 'vue';
import KeyButton from 'components/KeyButton.vue';
export default defineComponent({
  name: "KeyPad",
  components: {KeyButton},
  props: ['color'],
  emits: ['key-press'],
  data(){
    return {

    }
  },
})
</script>

<template>
  <div class="column">
    <div class="row">
      <KeyButton :color="color" @click="$emit('key-press', 1)">1</KeyButton>
      <KeyButton :color="color" @click="$emit('key-press', 2)">2</KeyButton>
      <KeyButton :color="color" @click="$emit('key-press', 3)">3</KeyButton>
    </div>
    <div class="row">
      <KeyButton :color="color" @click="$emit('key-press', 4)">4</KeyButton>
      <KeyButton :color="color" @click="$emit('key-press', 5)">5</KeyButton>
      <KeyButton :color="color" @click="$emit('key-press', 6)">6</KeyButton>
    </div>
    <div class="row">
      <KeyButton :color="color" @click="$emit('key-press', 7)">7</KeyButton>
      <KeyButton :color="color" @click="$emit('key-press', 8)">8</KeyButton>
      <KeyButton :color="color" @click="$emit('key-press', 9)">9</KeyButton>
    </div>
    <div class="row">
      <KeyButton :color="color" @click="$emit('key-press', 'clear')">X</KeyButton>
      <KeyButton :color="color" @click="$emit('key-press', 0)">0</KeyButton>
      <KeyButton :color="color" @click="$emit('key-press', 'back')">&lt;</KeyButton>
    </div>
  </div>
</template>

<style scoped>

</style>
