<template>
  <q-page class="flex flex-center bg-purple-9">
    <div class="absolute-top-right q-mr-xl q-mt-xl">
      <div class="camera-frame">
        <video
          ref="video"
          class="full-height"
          autoplay
          playsinline
        />
      </div>
    </div>
    <div class="column">
      <h4 class="text-center text-white">Enter your PIN for: <br>
        <strong>{{ companyName }}</strong>
      </h4>
      <input-display class="text-center" :input="passcode" />
      <br>
      <div class="text-center q-mx-auto q-mt-xl">
        <key-pad color="white" text="black" @key-press="keyPress" />
      </div>
    </div>
    <div class="absolute-bottom-left text-white text-subtitle1 q-mb-xl q-ml-xl">
      <div class="text-subtitle1">
        {{formattedDate}}
      </div>
      <div class="text-h4">
        {{formattedTime}}
      </div>

    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import KeyPad from 'components/KeyPad.vue';
import {db} from 'boot/firebase'
import InputDisplay from 'components/InputDisplay.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {InputDisplay, KeyPad},
  mounted() {
    this.initCamera()
    console.log(this.formattedDate)
    // setInterval(this.formattedTime, 1000)
  },
  data(){
    return{
      passcode: [],
      companyName: 'Myshock Tool & Die Corporation'
    }
  },
  computed: {
    PasscodeLength(){return this.passcode.length},
    PasscodeEntered(){return this.passcode.length === 6},
    currentDate(){return new Date()},
    // formattedDate(){return this.currentDate.toDateString()},
    formattedDate(){return this.currentDate.toLocaleDateString("en-US", {weekday: 'long', month: 'short', day: 'numeric' })},
    formattedTime(){return this.currentDate.toLocaleTimeString("en-US", {hour: '2-digit', minute: '2-digit', hour12: true})},
  },
  methods: {
    keyPress(e){
      switch (e) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 8:
        case 9:
          if (this.passcode.length < 6)
            this.passcode.push(e);
          break;
        case 'clear':
          this.passcode = [];
          break;
        case 'back':
          this.passcode.pop();
          break;
        default:
          break;
      }
    },
    initCamera(){
      navigator.mediaDevices.getUserMedia({
        video: false
      }).then(stream => {this.$refs.video.srcObject = stream}).catch(err => {
        console.error("Error accessing the camera", err);
      })
    },
  }
})
</script>

<style scoped>
.camera-frame {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  border: white 2px solid;
}
video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
