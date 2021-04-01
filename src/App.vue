<template>
  <div id="app">
    <Overlay></Overlay>
    
    <router-view name="header" />
      <div>
        <router-view />
      </div>
    <router-view name="footer" />
  </div>
</template>

<script>
import Overlay from './components/base/overlay'
export default {
  name: 'App',
  components: {
    Overlay,
  },
}
</script>
<style>
</style>
