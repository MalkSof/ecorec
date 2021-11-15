<template>
    <div id="Nosotros">
      <NavComponent></NavComponent>
      
      <div class="nosotrosFinal">
        <img src="nosotrosBold.jpg" alt="Nosotros" style="width: inherit; height: inherit; object-fit: cover">
      </div>
      <br>
      <br>
      <div class="container">
        <div class="row">
          <div class="col-md-2 col-1"></div>
          <div class="col-md-9 col-10">
            <div class="container">
              <div class="row">
                
                <div class="col-md-4 col-12">
                  <div class="imgMame" style="height: 25%;">
                    <img src="logochico.png" alt="imagen inst" style="width: inherit; object-fit: cover">
                  </div>
                  
                  <div class="imgMame">
                    <img src="Foto_mameInst.jpg" alt="imagen inst" style="width: inherit; height: 100%; object-fit: cover">
                  </div>
                  <br>
                  <br>
                  <img id="Group_44" class="imag" src="Group_44.png" style="padding-right: 15%;">
                  <img id="Group_42" class="imag" src="Group_42.png">
                </div>
                <div class="col-md-8 col-12" style="text-align: left;">
                  Ecorec es una empresa con 40 años de trayectoria ubicada en Buenos Aires, Argentina.<br>
                  Originalmente siendo proveedor de servicio de lavandería especial para las industrias automotrices y farmacéuticas entre otras, ampliamos nuestra oferta con la elaboración de prendas y productos de primer nivel para diferentes industrias y el público en general.<br>
                  Elaboramos equipos y vestuario laboral, destacando que somos especialistas en la provisión equipos de trabajo para áreas limpias, sean de la industria farmacéuticas o electrónica. A su vez ofrecemos una gama de productos para aquel cliente que cuente en sus instalaciones con entornos controlados o que necesite tener un entorno de trabajo con baja aportación de partículas y correctamente desinfectado.<br>
                  Nuestros productos fueron desarrollados en conjunto con empresas internacionales, quienes nos proveen de toda la información y el material necesario para elaborarlos, y el aporte invaluable de nuestros clientes.<br>
                  Ponemos a su disposición toda nuestra atención para ayudarlo en lo que necesite.<br>

                </div>
                
              </div>
            </div>
          </div>
          <div class="col-md-4 col-1"></div>
        </div>
      </div>

      <br>
      <br>
      <br>
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
          <div class="col-md-6 col-12">
            <img class="confiamos"  src="n_280px-Pfizersvg.png" srcset="n_280px-Pfizersvg.png 1x, n_280px-Pfizersvg@2x.png 2x">
          </div>
          <div class="col-md-6 col-12">
            <img class="confiamos"  style="width: 175px; margin-top: 50px;"  src="Laboratorios_Richmond.png" >
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
      <a href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." class="float" target="_blank">
      <i class="fa fa-whatsapp my-float"></i>
      </a>
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