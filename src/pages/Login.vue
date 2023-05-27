<template>
      <div>
            <div class="container" style="margin-top: 30px;">
                  <div class="row">
                        <div class="col-md-6">
                              <center>
                                    <img src="../assets/logo-login.png" alt="logo acercampo" style="max-width: 40%;">
                                    <br><br>
                                    <h2>Hola, es un gusto <br>tenerte de nuevo</h2>
                              </center>
                              <br><br>

                              <form v-on:submit.prevent="login">
                                    <label>Email</label>
                                    <input type="email" class="form-control" placeholder="somebody@u.com" v-model="dataLogin.email">
                                    <label>Password</label>
                                    <input type="password" class="form-control" placeholder="******" v-model="dataLogin.password"><br>
                                    <center><a href="#">Olvidaste la contraseña</a></center><br>

                                    <center>
                                          <button class="btn btn-primary btn-login" disabledBtn>{{ textButton }}</button><br>
                                          <p>Iniciar sesión con:</p>
                                          <div class="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" class="btn btn-danger"><i class="fa-brands fa-google"></i></button>
                                                <button type="button" class="btn btn-primary"><i class="fa-brands fa-facebook"></i></button>
                                          </div>
                                    </center>
                              </form>
                              <center>
                                    <a href="#">Crea una cuenta ahora mismo</a>
                              </center>
                        </div>
                        <div class="col-md-6" id="bg-login">
                              
                        </div>
                  </div>
            </div>
      </div>
</template>


<script>

import axios from "axios"
import Swal from "sweetalert2"

export default {
      data() {
            return {
                  dataLogin:{
                        email:"",
                        password:""
                  },
                  disabledBtn:"",
                  textButton:"Ingresar"
            }
      },
      methods: {
            async login(){


                  this.textButton = "Procesando..."
                  this.disabledBtn = "disabled"


                  const req = await axios.post(import.meta.env.VITE_API_URL+"/login",this.dataLogin)


                  if (req.data.process == true) {
                        localStorage.setItem("issetSession",true)
                        localStorage.setItem("userName",this.dataLogin.email)
                        this.$router.push("/app")
                  }else{
                        Swal.fire({
                              title: 'Upps!',
                              text: 'Tus credenciales son incorrectas, por favor revísalas',
                              icon: 'error',
                              confirmButtonText: 'Vale'
                        })

                        this.textButton = "Ingresar"
                        this.disabledBtn = ""
                  }

            }
      },
}
</script>

<style>

.btn-login{
      background-color: #CEE741;
      border-color: #CEE741;
}

a{
      text-decoration: none;
      color:black
}

#bg-login{
      background-image: url("../assets/bg-login.png");
      background-repeat: no-repeat;
      background-size: cover;
      height: 100hv;
      max-width: 1000px;
      border-radius: 22px;
      border:7px solid #CEE741;
      border-color: #CEE741;
}

</style>