<template>

    <div id="nav">
      <div class="row">
        <div class="col ">
          <router-link to="/" > <img  class="float-start" src="logochico.png"/>
          </router-link>


        </div>
        <div class="col" >

          <div class="float-end" style="margin-top: 20px;">

          <router-link to="/producto/equipo-area-esteril-pharma" class="Productos">Productos</router-link>
          
          <router-link to="/nosotros" class="Productos">Nosotros</router-link>
          <router-link to="/contacto" class="Productos">Contacto</router-link>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "NavComponent"
}
</script>

<style scoped>

</style>