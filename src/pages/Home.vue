<template>
  <div>
      <NavComponent></NavComponent>
      <BienvenidoComponent></BienvenidoComponent>
  </div>

</template>

<script>


import NavComponent from "../components/NavComponent";
import BienvenidoComponent from "../components/BienvenidoComponent";
export default {
  name: "Home",
  components:{
  BienvenidoComponent,
    NavComponent
  }
}
</script>

<style scoped>

</style>