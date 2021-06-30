<template>
  <div id="app">
    <Menu/>
    <Grafico/>
  </div>
</template>
<script>
import Menu from './Menu.vue'
import Grafico from './grafico.vue'

export default{
    name: 'app',
    components: {
      Menu,
      Grafico
    }
}
</script>

<style>
</style>
