<template>
  <q-page class="content-center bg-purple-9">

<!-- Login Page -->
    <div v-show="showDiv" class="absolute-top-right q-mr-xl q-mt-xl">
      <div class="camera-frame">
        <video
          ref="video"
          class="full-height"
          autoplay
          playsinline
        />
      </div>
    </div>
    <div v-show="showDiv" class="column">
      <h4 class="text-center text-white">Enter your PIN for: <br>
        <strong>{{ companyName }}</strong>
      </h4>
      <input-display class="text-center" :input="passcode" />
      <br>
      <div class="text-center q-mx-auto q-mt-xl">
        <key-pad color="white" text="black" @key-press="keyPress" />
      </div>
    </div>

<!--    Clock in / out page-->
    <div v-show="!showDiv" class="row justify-evenly items-center">
      <div class="col-2">
        <div class="camera-frame">
          <video
            ref="video"
            class="full-height"
            autoplay
            playsinline
          />
        </div>
      </div>
      <div class="col-6">
        <div class="text-h4 text-white">Good morning, Chris</div>
        <div class="text-h5 text-white">Please clock in to start your shift</div>
        <q-btn size="xl" class="punchBtn btn-fixed-width q-my-sm" align="left" label="Clock In" icon="mdi-clock-outline" icon-right="mdi-arrow-right">
        </q-btn>
        <br>
        <q-btn size="md" class="cancelBtn q-my-sm" icon="mdi-arrow-left" label="Cancel">
        </q-btn>
      </div>
    </div>


<!-- Date and Time -->
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
    // console.log(this.formattedDate)
    // setInterval(this.formattedTime, 1000)
  },
  data(){
    return{
      passcode: [],
      companyName: 'Myshock Tool & Die Corporation',
      showDiv: true,
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
      console.log(this.passcode)
      if (this.passcode.length === 6) {
        // this.checkPasscode(this.passcode)
        alert(this.passcode)
        this.passcode = []
      }
    },
    checkPasscode(passcode){
      db.collection('passcodes').doc(passcode.join('')).get()
        .then(doc => {
          if (doc.exists) {
            alert('Access Granted')
          } else {
            alert('Access Denied')
          }
        })
    },
    initCamera(){
      navigator.mediaDevices.getUserMedia({
        video: false   // set to true to enable video
      })
        .then(stream => {this.$refs.video.srcObject = stream})
        .catch(err => {console.error("Error accessing the camera", err);
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
.punchBtn {
  background-color: #6200ea;
  color: white;
  border-radius: 5px;
  border: grey 1px solid;
  width: 250px;
}
.cancelBtn {
  background-color: #6200ea;
  color: white;
  border-radius: 5px;
}
</style>
