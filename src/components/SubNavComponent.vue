<template>
    <div>
      <div id="Group_54">


        <div class="container">
          <div class="row">
            <div class="col-md-12 col-12"  id="Contctanos">
              Contáctanos
            </div>
          </div>
          <form ref="form" @submit.prevent="enviarEmail" >
            <div class="row">
              <div class="col-md-6 col-12">

                <label for="nombre" id="Nombre_es">Nombre</label>

                <input type="text" class="input_eq" name="from_name" placeholder=" Nombre"><br><br>
              </div>
              <div class="col-md-6 col-12">
                <label for="apellido" id="Apellido_ep">Apellido</label>

                <input type="text" class="input_en" name="last_name" placeholder=" Apellido"><br><br>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 col-12">
                <label for="email" id="Email">Email</label>

                <input type="email" class="input_ek" name="email" placeholder=" mail@ejemplo.com"><br><br>
              </div>
              <div class="col-md-6 col-12">
                <label for="telfono" name="telefono" id="Telfono">Telefono</label>

                <input type="text" class="input_eh" name="telfono" placeholder=" 1234567890"><br><br>
              </div>
            </div>
            <label for="mensaje" name="message" id="Mensaje">Mensaje</label>
            <input type="text" class="input" name="mensaje" placeholder=" Tu mensaje..."><br><br>
            <div style="text-align: end;">
              <input type="submit" id="Enviar" value="Enviar">
            </div>
          </form>
        </div>


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

import emailjs from 'emailjs-com';


export default {
  name: "SubNavComponent",
  data()
  {
    return{
      form:{
        nombre : '',
        apellido: '',
        email: '',
        telefono: '',
        mensaje: ''

      }
    }
  },
  methods:
  {
    enviarEmail(){
      emailjs.sendForm('service_wvruf4v', 'template_teb0old', this.$refs.form, 'user_L4fJED2s7LGEhb1888iWW')
          .then((result) => {
            console.log('SUCCESS!', result.text);
          }, (error) => {
            console.log('FAILED...', error.text);
          });



    /*
      var data = JSON.stringify(  {"personalizations": [{"to": [{"email": "nicolasuzalcman@gmail.com"}]}],"from":
            {"email": "nicozalc@gmail.com"},"subject": "Sending with SendGrid is Fun","content":
            [{"type": "text/plain", "value": "and easy to do anywhere, even with cURL"}]});

      var url = {
        method: 'post',
        url: 'https://api.sendgrid.com/v3/mail/send',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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'
        },
        data : data
      };

      //let myvalue =JSON.stringify({"Step2":[{"selected":!1,"produto":"A70-5","ncm":"9506.62.00","aliqII":.2,"aliqIpi":0,"aliqPis":.021,"aliqCofins":.0965,"descricao":"BOLA DE BASQUETE","pesoUnitario":.43,"unitario":.78,"dumping":0,"cubagemUnitario":0,"quantidade":150,"icmEstadoDestino":0,"mvaAjustado":0,"markup":.12},{"selected":!1,"produto":"PINK-7-103","ncm":"7117.90.00","aliqII":.18,"aliqIpi":.12,"aliqPis":.021,"aliqCofins":.0965,"descricao":"BIJOUTERIAS EM METAL/ VIDRO ","pesoUnitario":.975,"unitario":1.52,"dumping":0,"cubagemUnitario":0,"quantidade":200,"icmEstadoDestino":0,"mvaAjustado":0,"markup":.11},{"selected":!1,"produto":"PINK-7-103","ncm":"7117.90.00","aliqII":.18,"aliqIpi":.12,"aliqPis":.021,"aliqCofins":.0965,"descricao":"BIJOUTERIAS EM METAL/ VIDRO ","pesoUnitario":.975,"unitario":1.52,"dumping":0,"cubagemUnitario":0,"quantidade":300,"icmEstadoDestino":0,"mvaAjustado":0,"markup":.19}],});

      fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'post',
        headers: {
          'Accept':'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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'
        },
        body: data
      }).then(function(response){
        return response.json(data);
      }).then(function(text){
        console.log(text);
      }).catch(function (error){
        console.error(error);
      })
        axios(url).then(function (response) {
            console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
            console.log(error);
          });
      /*
      axios.post('https://api.sendgrid.com/v3/mail/send', data, config)
          .then(() => (alert('Mensaje enviado Con exito')))
          .catch(function (error) {
            if (error.response) {
              // Request made and server responded
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
            }

          });

       */

    }
  }
}
</script>

<style scoped>

</style>