<template>
  <div>
      <NavComponent></NavComponent>
      <BienvenidoComponent></BienvenidoComponent>
      <a href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." class="float" target="_blank">
      <i class="fa fa-whatsapp my-float"></i>
      </a>
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