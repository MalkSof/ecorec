<template>
  <div>
    <NavComponent></NavComponent>
    <br>
    <div id="producto">
    <br>

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
        <img id="FOTOA2" style="height: 550px; max-width: 100%"  :src="imagenDefault" />
        <div style="margin-top: 10px;    ">
        <img style="'width: 100px;  margin-right:10px; border-radius: 10px; height: 100px; background-image: url('+img+ ');  background-position:center; '" v-for="(img,key) in productoSeleccionado.imagenes" @click="establecerImagen(key)" :src="img"   :key="img" />
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
                <div class="mb-3">
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>
                <div class="mb-3">

                </div>
              </div>
              <div class="col-md-6 col-12">
                <input type="email" class="form-control" id="empresa" placeholder="empresa">
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
          <img width="160px" v-if="pro.imagenes" :src="pro.imagenes.i1" />
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

    <SubNavComponent></SubNavComponent>
  </div>
</template>

<style scoped>
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

