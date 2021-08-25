<template>
  <div>
    <NavComponent></NavComponent>
    <br>
    <div id="producto">
    <br>
      Productos
    <br>
    </div>
    <div class="container">

  <br>
    <div class="row">
      <div class="col-sm-3 col-12">
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
      <div class="col-sm-6 col-12">
        <img id="FOTOA2" style="width: 100%" :src="imagenDefault">
        <img width="70px" v-for="(img,key) in productoSeleccionado.imagenes" @click="establecerImagen(key)"   :src="img" :key="img" />
      </div>
      <div class="col-sm-3 col-12">
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
        <div class="subtitulo">
          Ventajas
        </div>
        <div class="textoNormal">
          <br>
          {{productoSeleccionado.ventaja}}
        </div>
        <a href="Home___2.html" target="_self" style="text-decoration: none;">
          <div class="botonConsl">
            <div id="Consultar">
                Consultar
            </div>
          </div>
        </a>
        <form action="">
          <div class="container" style="padding-right: 0; padding-left: 0;">
            <div class="row">
              <div class="col-md-6 col-12">
                <input type="text" class="input_nom_prod" name="nombre" placeholder="Nombre">
              </div>
              <div class="col-md-6 col-12">
                <input type="text" class="input_nom_prod" name="empresa" placeholder="Empresa">
              </div>
            </div>
          </div>
          <input type="text" class="input" name="mensaje" placeholder=" Tu mensaje...">
          <div style="padding: 10px; text-align: end;">
            <input type="submit" class="EnviarConsulta" value="Enviar">
          </div>
        </form>
      </div>
    </div>
      <div class="row">
        <div class="col-8">
          <div class="tituloRelacionado">
              Informacion relacionada
          </div>
        </div>
        <div class="textoNormal">
          <br>
          {{productoSeleccionado.masinfo}}
        </div>
        <div class="tituloRelacionado">
         Productos Relacionados
        </div>
      </div>
    <div class="row">
      <div class="col-md-2 col-6" v-for="(pro,key) in products " :key="key" >
        <a   target="_blank" :href="'#/producto/' + key" >
        <img  src="iStock-1128110883.png" />
          {{key}}
        </a>
      </div>
    </div>

    </div>
    <div class="internacionales">
      <div class="Envos_internacionales">
        Envíos internacionales
      </div>
    </div>
    <div class="mediosPago">
      <div class="Envos_internacionales">
        Múltiples medios de pago
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