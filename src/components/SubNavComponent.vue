<template>
    <div>
      <div id="Group_54">

      <form action="">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-12"  id="Contctanos">
              Contáctanos
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-12">

              <label for="nombre" id="Nombre_es">Nombre</label>

              <input type="text" class="input_eq" name="nombre" placeholder=" Nombre"><br><br>
            </div>
            <div class="col-md-6 col-12">
              <label for="apellido" id="Apellido_ep">Apellido</label>

              <input type="text" class="input_en" name="apellido" placeholder=" Apellido"><br><br>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-12">
              <label for="email" id="Email">Email</label>

              <input type="email" class="input_ek" name="email" placeholder=" mail@ejemplo.com"><br><br>
            </div>
            <div class="col-md-6 col-12">
              <label for="telfono" id="Telfono">Telefono</label>

              <input type="text" class="input_eh" name="telfono" placeholder=" 1234567890"><br><br>
            </div>
          </div>
          <label for="mensaje" id="Mensaje">Mensaje</label>
          <input type="text" class="input" name="mensaje" placeholder=" Tu mensaje..."><br><br>
          <div style="text-align: end;">
            <input type="submit" id="Enviar" value="Enviar">
          </div>
        </div>


      </form>
    </div>
        <div class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-12" style="margin-top: 20px;">

                            <img src="logoFooter.png" style="padding: 20px;">

                        <img id="Group_44" class="imag" src="Group_44.png">
                        <img id="Group_42" class="imag" src="Group_42.png">
                    </div>
                    <div class="col-md-3 col-12" style="margin-top: 20px;"> 
                        <div class="textoTitulosFoot">
                            <img id="Group_45" src="Group_45.png">
                            Home
                        </div>
                        <div class="textoTitulosFoot">
                            <img id="Group_45" src="Group_45.png">
                            Nosotros
                        </div>
                        <div class="textoTitulosFoot">
                            <img id="Group_45" src="Group_45.png">
                            Productos
                        </div>
                        <div class="textoTitulosFoot">
                            <img id="Group_45" src="Group_45.png">
                            Contacto
                        </div>
                    </div>
                    <div class="col-md-3 col-12" style="margin-top: 20px;">
                        <div class="textoTitulosFoot">
                            <img id="Group_45" src="Group_45.png">
                            Direccion
                        </div>
                        <div class="textoDirec">
                            Roque Sáenz peña 4027 - B1751BMC
                        </div>
                        <div class="textoDirec">
                            Villa Insuperable 
                        </div>
                        <div class="textoDirec">
                            Prov. de Buenos Aires
                        </div>
                        <div class="textoDirec">
                            Argentina
                        </div><br>
                        <div class="textoDirec">
                            info@serviciosecorec.com.ar
                        </div>
                    </div>
                    <div class="col-md-3 col-12" style="text-align: left; margin-top: 20px;">
                        <div class="textoTitulosFoot">
                            <img id="Group_45" src="Group_45.png">
                            Llamenos
                        </div>
                        <div class="textoDirec">
                          +54 11 46524230
                        </div>
                        <div class="textoDirec">
                          +54 911 58909935
                        </div><br><br>
                       <a href="https://www.linkedin.com/company/servicio-eco-rec/"> <img id="Group_53" src="Group_53.png" style="aling"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "SubNavComponent"
}
</script>

<style scoped>

</style>