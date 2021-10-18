<template>
    <div id="Nosotros">
      <NavComponent></NavComponent>
      <div id="producto">
        Nosotros
      </div>
      <div id="2"></div>
      <div id="2">

        <div class="container">
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
        </div>


      </div>
      <div id="Confiaron_en_nosotros">
      Confiaron en nosotros
      </div>
      <div id="Group_56">
      <div class="container">
        <div class="row" style="--bs-gutter-x: -4.5rem;">
          <div class="col-md-3 col-12">
            <img class="confiamos" src="n_024px-Ford_Motor_Company_Log.png" srcset="n_024px-Ford_Motor_Company_Log.png 1x, n_024px-Ford_Motor_Company_Log@2x.png 2x">
          </div>
          <div class="col-md-3 col-12">
            <img class="confiamos"  src="n_280px-Pfizersvg.png" srcset="n_280px-Pfizersvg.png 1x, n_280px-Pfizersvg@2x.png 2x">
          </div>
          <div class="col-md-3 col-12">
            <img class="confiamos"  style="width: 175px; margin-top: 50px;"  src="Laboratorios_Richmond.png" >
          </div>
          <div class="col-md-3 col-12">
            <img class="confiamos" src="Volkswagen_logo_2019svg.png" srcset="Volkswagen_logo_2019svg.png 1x, Volkswagen_logo_2019svg@2x.png 2x">
          </div>
        </div>
      </div>
      </div>
      <div>
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
      </div>
      <SubNavComponent></SubNavComponent>
    </div>
</template>

<script>
import NavComponent from "../components/NavComponent";
import SubNavComponent from "../components/SubNavComponent.vue";
import json from '/src/data.json';
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
//import VueSlickCarousel from 'vue-slick-carousel'
//import 'vue-slick-carousel/dist/vue-slick-carousel.css'
//// optional style for arrows & dots
//import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: "AboutUs",
  components:{
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
              "nextArrow":"<img class='a-right control-c next slick-next' src='logochico.png'>"
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

<style scoped>
.link{
text-decoration: none;
}
</style>