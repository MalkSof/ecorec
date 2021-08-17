<template>
  <div id="app">
    <NavComponent></NavComponent>
    <BienvenidoComponent></BienvenidoComponent>
    <SubNavComponent></SubNavComponent>
  </div>
</template>

<script>

import NavComponent from "./components/NavComponent";
import BienvenidoComponent from "./components/BienvenidoComponent";
import SubNavComponent from './components/SubNavComponent';

export default {
  name: 'App',
  components: {
    BienvenidoComponent,
    NavComponent,
    SubNavComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
