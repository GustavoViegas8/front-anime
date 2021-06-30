<template>
  <div id="app">
    <Menu/>
    <Destaque/>
  </div>
</template>
<script>
import Menu from './Menu.vue'
import Destaque from './Destaque.vue'

export default{
    name: 'app',
    components: {
      Menu,
      Destaque
    }
}
</script>

<style>
</style>
