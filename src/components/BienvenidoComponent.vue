<template>
  <div>
    <img style="width: 100%" src="/bannerProductos.jpg"/>
    <div style="padding: 30px;">
      <div id="Lorem_ipsum">
        Bienvenidos a Ecorec Productos
      </div>
      <br>
      <br>
      <div class="container-sm" id="Lorem_ipsum_dolor_sit_amet_con">
        Somos una empresa con 40 años de trayectoria. Ofrecemos indumentaria de trabajo, incluidas aquellas prendas destinadas a salas limpias de diferentes industrias. A su vez ofrecemos diferentes productos para salas blancas, para la higiene en general y la protección personal de diferentes sectores.  
      </div>
    </div>
    <div id="rect_1">
      <div class="container">
          <div class="row">
            <div class="col-md-4 col-12">
                <div class="margen">
                  <div style="margin-top: 40px; height: 80px">
                      <div>
                          <img src="envios.png">
                      </div>
                  </div>
                  <div id="Envos">
                      Envíos
                  </div>
                  <div id="Lorem_ipsum_dolor_sit_amet_con_">
                    Envíos internacionales
                  </div>
                </div>
            </div>
            <div class="col-md-4 col-12">
                <div style="margin-top: 40px;  height: 80px">
                    <img src="pagos.png">
                </div>
                <div id="Pagos">
                    Pagos
                </div>
                <div id="Lorem_ipsum_dolor_sit_amet_con_ba">
                    Múltiples medios de pago seguros
                </div>
            </div>
            <div class="col-md-4 col-12">
                <div style="margin-top: 40px;  height: 80px">
                  <img src="atencion.png">
                </div>
                <div id="Pagos">
                    Atención
                </div>
                <div id="Lorem_ipsum_dolor_sit_amet_con_bh">
                  Atención personalizada
                </div>
            </div>

        </div>
        <br>
      </div>
    </div>
    <div>
      <br>
      <br>
      <div id="Nuestros_prod">
        Nuestros productos
      </div>
      <div id="Seleccione">
        Seleccione su industria de interés
      </div>
      <br>
    </div>
    <div id="ContIMG">
      <div class="row">
          <div class="col-md-3 col-12">
	          <div id="Foto1_MameAuto">
	            <div class="sombra">
                INDUSTRIA AUTOMOTRIZ
              </div>
            </div>
          </div>
          <div class="col-md-3 col-12">
            <div id="Foto1_MameFarma">
	              <div class="sombra">
                INDUSTRIA FARMA
                </div>
            </div>
          </div>
          <div class="col-md-3 col-12">
            <div id="Foto4_MameAuto">
	            <div class="sombra">  
                INDUSTRIA ELECTRÓNICA
              </div>
            </div>
          </div>
          <div class="col-md-3 col-12">
            <div id="Foto3_TrajeMedico">
	            <div class="sombra">
               INDUSTRIA SALUD
              </div>
            </div>
          </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="Backgound">
          <router-link to="/producto/equipo-area-esteril-pharma" style="text-decoration: none">
            <div id="Ver_productos">
              Ver productos
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div id="Confiaron_en_nosotros">
        Confiaron en nosotros
    </div>
    <div id="Group_56">
      <div class="container">
        <div class="row" style="--bs-gutter-x: -4.5rem;">

            <div class="col-md-3 col-12">
                <img class="confiamos"  src="n_280px-Pfizersvg.png" srcset="n_280px-Pfizersvg.png 1x, n_280px-Pfizersvg@2x.png 2x">
            </div>
            <div class="col-md-3 col-12">
              <img class="confiamos"  style="width: 175px;
                  margin-top: 50px;"  src="Laboratorios_Richmond.png" >
            </div>
          </div>
        </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "BienvenidoComponent"
}
</script>

<style scoped>

</style>