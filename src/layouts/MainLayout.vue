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
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
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
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  
  {
    title: 'Home',
    caption: 'home',
    icon: 'home',
    link: '/#/'
  },
  {
    title: 'Todolist',
    caption: 'todolist',
    icon: 'list',
    link: '/#/todolist/'
  },
  {
    title: 'Example',
    caption: 'example',
    icon: 'list',
    link: '/#/example/'
  },
  {
    title: 'Example List',
    caption: 'example',
    icon: 'list',
    link: '/#/list/'
  },
  {
    title: 'Example Button',
    caption: 'example',
    icon: 'list',
    link: '/#/button/'
  },
  {
    title: 'Example Button No Component',
    caption: 'example',
    icon: 'list',
    link: '/#/buttonnocomponent/'
  },
];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
