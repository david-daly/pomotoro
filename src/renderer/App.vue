<template>
  <div id="app">
    <app-titlebar/>
    <router-view></router-view>
  </div>
</template>

<script>
  import appTitlebar from '@/components/Title.vue'

export default {
    name: 'PomoToro',
    components: {
      appTitlebar
    }
  }
</script>

<style>
/* CSS */
</style>
