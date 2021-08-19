<template>
  <div>
      <NavComponent></NavComponent>
      <BienvenidoComponent></BienvenidoComponent>
      <SubNavComponent></SubNavComponent>
  </div>

</template>

<script>


import NavComponent from "../components/NavComponent";
import BienvenidoComponent from "../components/BienvenidoComponent";
import SubNavComponent from "../components/SubNavComponent.vue";
export default {
  name: "Home",
  components:{
  BienvenidoComponent,
  NavComponent,
  SubNavComponent
  }
}
</script>

<style scoped>

</style>