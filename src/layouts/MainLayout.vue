<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          {{ appName }}
        </q-toolbar-title>

        <div>TC v{{ appVersion }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      behavior="mobile"
    >
      <q-list>
        <q-img v-if="authUser" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent col">
            <q-avatar size="56px" class="q-mb-sm" @click="pushToProfileSettings">
              <q-tooltip>Profile</q-tooltip>
              <img class="cursor-pointer" :src="authUser.photoURL">
            </q-avatar>
            <div class="text-weight-bold">{{ authUser.displayName }}</div>
            <div>{{ authUser.email }}</div>
          </div>

          <div class="absolute-top-right transparent cursor-pointer">
            <q-icon name="settings" size="24px" @click="pushToSiteSettings">
              <q-tooltip>
                Site Settings
              </q-tooltip>
            </q-icon>
          </div>

          <div class="absolute-bottom-right transparent cursor-pointer">
            <q-icon v-if="authUser" name="logout" size="24px" @click="logout">
              <q-tooltip>
                Logout
              </q-tooltip>
            </q-icon>
          </div>
        </q-img>
        <div v-else class="q-mt-md q-px-lg justify-center cursor-pointer" @click="login">
          <q-icon class="" name="login" size="24px" >
            <q-tooltip>
              Login
            </q-tooltip>
          </q-icon>
          <span class="text-bold text-subtitle1">
            Login
          </span>
        </div>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { version, productName } from '../../package.json';

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',
  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      appVersion: version,
      appName: productName,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
