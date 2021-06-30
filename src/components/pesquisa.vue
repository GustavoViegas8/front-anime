<template>
  <div id="app">
    <Menu/>
    <Pesquisa/>
  </div>
</template>
<script>
import Menu from './Menu.vue'
import Pesquisa from './pesquisa.main.vue'

export default{
    name: 'app',
    components: {
      Menu,
      Pesquisa
    }
}
</script>

<style>
</style>
