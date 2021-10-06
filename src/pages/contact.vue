<template>
    <div id="contacto">
        <NavComponent></NavComponent>
        <div class="Contacto">
          Contacto
        </div>
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