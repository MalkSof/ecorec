<template>
    <div id="Nosotros">
        <NavComponent></NavComponent>
        <div id="producto">
          Nosotros
        </div>
        <SubNavComponent></SubNavComponent>
    </div>
</template>

<script>
import NavComponent from "../components/NavComponent";
import SubNavComponent from "../components/SubNavComponent.vue";
export default {
  name: "AboutUs",
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