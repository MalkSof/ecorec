<template>
    <div id="contacto">
        <NavComponent></NavComponent>
      <div class="nosotrosFinal">
      <img src="contactoBanner.jpg" alt="productos" style="width: inherit; height: inherit; object-fit: cover">
      </div>
        <a href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." class="float" target="_blank">
        <i class="fa fa-whatsapp my-float"></i>
        </a>
        <SubNavComponent></SubNavComponent>
    </div>
</template>

<script>
import NavComponent from "../components/NavComponent";
import SubNavComponent from "../components/SubNavComponent.vue";
export default {
  name: "Contact",
  components:{
  NavComponent,
  SubNavComponent
  }
}
</script>

<style scoped>
.link{
text-decoration: none;
}
</style>