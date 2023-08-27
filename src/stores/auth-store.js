import { defineStore } from 'pinia';
import { auth, db } from "boot/firebase";
import AuthUser from 'src/models/AuthUser';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authUser: null,
  }),

  getters: {
    doubleCount (state) {
      return state.counter * 2
    }
  },

  actions: {
    setUser(user) {
      this.authUser = user;
    },

    async signInWithEmailAndPassword(email, password) {
      try {
        this.authUser = await auth.signInWithEmailAndPassword(email, password);
      } catch (error) {
        console.error('Error with signIn using email and password', error);
      }
    },

    async signOut() {
      try {
        await auth.signOut();
        this.authUser = null;
      } catch (error) {
        console.error('Error during signOut', error);
      }
    },

    async signInWithPopup() {
      let provider = new firebase.auth.GoogleAuthProvider();
      try {
        await auth.signInWithPopup(provider);
      } catch (error) {
        console.error('Error during signInWithPopup', error);
      }
    },

    onAuthStateChange() {
      auth
        .onAuthStateChanged(user => {
          this.setUser(user ? new AuthUser(user) : null);
        })
    },

    // initialize authState in the app.vue
    async init() {
      await auth
        .onAuthStateChanged(user => {
          this.setUser(user ? new AuthUser(user) : null);
          this.isLoaded = true;
        })
    },

    registerUser(credentials) {
      console.log('registerUser action', credentials)
      auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
        });
    },
  }
})
