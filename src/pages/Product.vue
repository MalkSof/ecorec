<template>
  <div>
    <NavComponent></NavComponent>
    <div id="producto">Productos</div>
    <div class="container">


    <div class="row">
      <div class="col-sm-2 col-12">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-5 col-12">
        <img id="FOTOA2" style="width: 100%" :src="imagenDefault">
        <img width="70px" v-for="(img,key) in productoSeleccionado.imagenes" @click="establecerImagen(key)"   :src="img" :key="img" />
      </div>
      <div class="col-sm-5 col-12">
        <div id="tituloProducto">

          {{productoSeleccionado.titulo}}
        <br>
        </div>
        <br>
        <div class="subtitulo">
            Caracteristicas
        </div>
        <div class="textoNormal">
          <br>
          {{productoSeleccionado.descri}}
        </div>
      </div>
    </div>
      {{imagenDefault}}
    <div class="row">
        <a target="_blank" v-for="(pro,key) in products " :href="'#/producto/' + key" :key="key" >
          {{key}}
        </a>
    </div>
    </div>
  </div>
</template>

<script>

import json from '/src/data.json'
import NavComponent from "../components/NavComponent";
export default {
  name: "Product",
  components: {
    NavComponent
  },
    data(){
      return{

        myJson: json,
        productoSeleccionado: [],
        products : [],
        imagenDefault: ''
      }
    },
  methods: {
    establecerImagen(key)
    {
      this.imagenDefault = this.productoSeleccionado["imagenes"][key];
    }
  },
  created() {
    this.products =  this.myJson['productos'];
    this.productoSeleccionado = this.products[this.$route.params.slug];
    this.imagenDefault = this.productoSeleccionado["imagenes"][1];
    console.log( this.$route.params.slug);
  }

}
</script>

<style scoped>

</style>