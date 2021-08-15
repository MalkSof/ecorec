<template>
  <div id="app">
    <NavComponent></NavComponent>
    <product></product>
  </div>
</template>

<script>

import NavComponent from "./components/NavComponent";

import Product from "./components/Product";

export default {
  name: 'App',
  components: {
    Product,
    NavComponent
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
