<template>
  <div>
    <NavComponent></NavComponent>
    <br>
    <div class="nosotrosFinal">
        <img src="prodcutos.jpg" alt="productos" style="width: inherit; height: inherit; object-fit: cover">
    </div>
    <br>
    <div class="container">

  <br>
    <div class="row">
      <div class="col-sm-3 col-12">
        <div class="accordion" id="accordionExample">
          
          
            <div class="accordion-item">
              <h2 class="accordion-header accordion-header2" style="font-size: x-large">
                  Productos
              </h2>
            </div>
            <div>


          <!--1-->
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                FARMACÉUTICO
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <a href="/#/producto/equipo-area-esteril-pharma">Equipo área estéril</a> <br>
                <a href="/#/producto/cofia-capuchas">Cofia / Capuchas </a><br>
                <a href="/#/producto/barbijos">Cubrebotas</a><br>
                <a href="/#/producto/mameluco-antiestatico"> Mameluco </a><br>
              </div>
            </div>
          </div>
          <!--2-->
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                AUTOMOTRIZ
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <a href="/#/producto/mameluco-antiestatico">Ambo antiestático</a>
                </div>
            </div>
          </div>
          <!--3-->
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                MEDICINA
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <a href="/#/producto/ambos-para-atencion-medica">Ambo atención médica</a>
               </div>
            </div>
          </div>
          <!--4-->
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                ELECTRÓNICA
              </button>
            </h2>
            <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <a href="/#/producto/mameluco-antiestatico"> Mameluco Antiestático</a>
              </div>
            </div>
          </div>
        </div>
        <!--5-->
        <div class="accordion-item">
            <h2 class="accordion-header" id="headingFive">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                SEGURIDAD Y PROTECCIÓN
              </button>
            </h2>
            <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <a href="/#/producto/fogmaster">Fogmaster</a> <br>
                <a href="/#/producto/barbijos">Cubrebocas carbón 50</a><br>
               <a href="/#/producto/film-antibacterial"> Film antimicrobial de cobre</a>
              </div>
            </div>
          </div>


      </div>
      </div>
      


      <div class="col-sm-6 col-12">
        <img id="FOTOA2" style="height: 550px; max-width: 100%;   border: 1px solid rgb(209, 209, 209);" :src="imagenDefault" />
        <div style="margin-top: 10px;">
        <img style="'width: 100px;  margin-right:10px; border-radius: 10px; height: 100px; background-image: url('+img+ ');  background-position:center;  border: 1px solid #9f9f9f;'" v-for="(img,key) in productoSeleccionado.imagenes" @click="establecerImagen(key)" :src="img"   :key="img" />
        </div>
      </div>

      <div class="col-sm-3 col-12">
        <br>
        <div id="tituloProducto">

          {{productoSeleccionado.titulo}}
        <br>
        </div>
        <br>
        <div class="subtitulo">
            Caracteristicas
        </div>
        <div class="textoNormal">

          {{productoSeleccionado.descri}}
        </div>
        <div class="subtitulo">
          Ventajas
        </div>
        <div class="textoNormal">

          <ul>
            <li>
              {{productoSeleccionado.ventaja}}
            </li>
          </ul>
        </div>
        <a href="Home___2.html" target="_self" style="text-decoration: none;">
          <div class="botonConsl">
            <div id="Consultar">
                Consultar
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
              </svg>
            </div>
          </div>
        </a>
        <form action="">
          <div class="container" style="padding-right: 0; padding-left: 0;">
            <div class="row">
              <div class="col-md-6 col-12">
                <div class="mb-3">
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>
                <div class="mb-3">

                </div>
              </div>
              <div class="col-md-6 col-12">
                <input  class="form-control" id="empresa" placeholder="empresa">
              </div>
            </div>
          </div>
          <textarea class="form-control" placeholder="Tu mensaje..." id="exampleFormControlTextarea1" rows="3"></textarea>
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
        <br>
        <br>
        <div class="tituloRelacionado">
         Productos Relacionados
        </div>
      </div>
      <VueSlickCarousel v-bind="settings">

        <div  v-for="(pro,key) in products " :key="key" >
        <a class="link" style="text-decoration:none" target="_blank" :href="'#/producto/' + key"  >
          <div id="conentedorRela"   >
            <img width="160px" v-if="pro.imagenes" :src="pro.imagenes.i1" />
          </div>
          <p class="subittuloProducto">   {{pro.titulo}}</p>
        </a>
        </div>
        <template class="prev" #prevArrow>
          <img style="width: 33px;height: 33px;" src="buttons/after.png">
        </template>
        <template #nextArrow>
          <img style="width: 33px;height: 33px;" src="buttons/next.png">
        </template>
      </VueSlickCarousel>
    <div class="row">




    </div>

    </div>
    <div class="internacionales">
      <div class="Envos_internacionales">
        Envíos internacionales <img src="Icon metro-airplane.png">
      </div>
    </div>
    <div class="mediosPago">
      <div class="Envos_internacionales">
        Múltiples medios de pago <img src="card.png">
      </div>
    </div>
    <a href="https://api.whatsapp.com/send?phone=5491158909935&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n." class="float" target="_blank">
      <i class="fa fa-whatsapp my-float"></i>
    </a>

    <SubNavComponent></SubNavComponent>
  </div>

</template>

<style scoped>

.accordion-body{
  text-align: left;
}

.link{


text-decoration: none;


}
</style>

<script>

import json from '/src/data.json'
import NavComponent from "../components/NavComponent";
import SubNavComponent from "../components/SubNavComponent.vue";
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: "Product",
  components: {
    NavComponent,
    SubNavComponent,
    VueSlickCarousel
  },
    data(){
      return{
        settings:
            {
              "dots": false,
              "arrows": true,
              "edgeFriction": 0.35,
              "dotsClass": "slick-dots custom-dot-class",
              "infinite": false,
              "speed": 500,
              "slidesToShow": 5,
              "slidesToScroll": 1,
              "prevArrow":" <img class='a-left control-c prev slick-prev' src='logochico.png'>",
              "nextArrow":"<img class='a-right control-c next slick-next' src='logochico.png'>",

            },
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
    console.log(this.productoSeleccionado["imagenes"]);
    this.imagenDefault = this.productoSeleccionado["imagenes"]['i1'];
    console.log( this.$route.params.slug);
  }

}
</script>


