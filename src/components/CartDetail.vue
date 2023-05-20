<template>
      <div class="container-fluid pt-3">
            <Cart/>
            <br>
            <h4>Finalizar Pedido</h4>
            <div class="row">
                  <div class="col-md-8">
                        <div class="card" style="border-radius: 22px;">
                              <div class="card-body">
                                    <table class="table">
                                          <thead>
                                                <tr>
                                                      <th>Producto</th>
                                                      <th>Cantidad</th>
                                                      <th>Subtotal</th>
                                                      <th></th>
                                                </tr>
                                          </thead>
                                          <tbody>
                                                <tr v-for="(item, index) in $store.state.cart">
                                                      <th>{{ item.productName }}</th>
                                                      <th>
                                                            <span class="badge" style="cursor: pointer;background-color: #CEE741;" v-on:click="increment(index)">+</span>
                                                            {{ item.quantity }}
                                                            <span class="badge" style="cursor: pointer;background-color: #CEE741;"  v-on:click="decrement(index)">-</span>
                                                      </th>
                                                      <th>subtotal</th>
                                                      <th><button class="btn btn-primary" v-on:click="deleteItem(index)">Eliminar</button></th>
                                                </tr>
                                          </tbody>
                                    </table>
                              </div>
                        </div>
                  </div>
                  <div class="col-md-4">
                        <h4>Métodos de Pago</h4>
                        <a href="#" v-on:click="pay">
                              <div class="card" style="border-radius: 22px;">
                                    <div class="card-body">
                                          <center>
                                                <img src="https://emcandelaria.gov.co/wp-content/uploads/2022/11/pse.png" alt="pse" style="max-width: 70%;">
                                          </center>
                                    </div>
                              </div>
                        </a>
                        <br>
                        <a href="#" v-on:click="pay">
                              <div class="card" style="border-radius: 22px;">
                                    <div class="card-body">
                                          <center>
                                                <img src="https://www.idrd.gov.co/sites/default/files/2022-08/Logo-Efecty.png" alt="efecty" style="max-width: 70%;">
                                          </center>
                                    </div>
                              </div>
                        </a>
                  </div>
            </div>
      </div>
</template>

<script>

import Cart from "./Cart.vue"
import Swal from "sweetalert2"


export default {
      components:{Cart},
      data() {
            return {
                  
            }
      },
      methods: {
            increment(index){
                  this.$store.dispatch('incrementQuantityAction',index);
            },
            deleteItem(index){
                  this.$store.dispatch('deleteProductOnCartAction',index);
            },
            decrement(index){
                  this.$store.dispatch('decrementQuantityAction',index);
            },
            pay(){
                  Swal.fire({
                        title: 'Genial!',
                        text: 'Tus compra se ha realizado con éxito, te redijiremos al inicio',
                        icon: 'success',
                        confirmButtonText: 'Vale'
                  })

                  setTimeout(() => {
                        this.$router.push("/app")
                        this.$store.state.cart = []
                  }, 2000);
            }
      },
}
</script>