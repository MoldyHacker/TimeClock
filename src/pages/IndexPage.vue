<template>
  <q-page class="flex flex-center bg-grey-5">
    <div class="">
      <input-display />
    </div>
    <div class="text-center">
      <key-pad color="primary" @key-press="keyPress" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import KeyPad from 'components/KeyPad.vue';
import InputIndicator from 'components/InputIndicator.vue';
import InputDisplay from 'components/InputDisplay.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {InputDisplay, KeyPad},
  data(){
    return{
      passcode: '',
    }
  },
  methods: {
    keyPress(v){
      switch (v) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 8:
        case 9:
          this.passcode += v.toString();
          break;
        case 'X':
          this.passcode = '';
          break;
        default:
          console.log(v)
          break;
      }
      console.log(this.passcode)
    },
  }
})
</script>
