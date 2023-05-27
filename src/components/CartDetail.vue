<template>
      <div class="container-fluid pt-3">
            <Cart/>
            <router-link to="/app" class="btn btn-primary"><i class="fa fa-angle-left"></i> Volver</router-link>
            <br>
            <div class="row">
                  <div class="col-md-8">
                        <div class="card" style="border-radius: 22px;">
                              <div class="card-body">
                                    <center>
                                          <table class="table">
                                                <thead>
                                                      <tr>
                                                            <th><center>Producto</center></th>
                                                            <th><center>Cantidad</center></th>
                                                            <th><center>Subtotal</center></th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      <tr v-for="(item, index) in $store.state.cart">
                                                            <th><center>{{ item.productName }}</center></th>
                                                            <th>
                                                                  <center>
                                                                        <span class="badge" style="cursor: pointer;background-color: #CEE741;" v-on:click="increment(index)">+</span>
                                                                        {{ item.quantity }}
                                                                        <span class="badge" style="cursor: pointer;background-color: #CEE741;"  v-on:click="decrement(index)">-</span>
                                                                  </center>
                                                            </th>
                                                            <th><center>${{ formatValue(item.quantity*item.price) }}</center></th>
                                                            <td><center><span class="badge" style="cursor: pointer;background-color: #CEE741;"  v-on:click="deleteItem(index)">Eliminar</span></center></td>
                                                      </tr>
                                                </tbody>
                                                <tfoot>
                                                      <tr>
                                                            <td colspan="2"><center><strong>TOTAL</strong></center></td>
                                                            <td><center><strong>${{ formatValue(this.$store.getters["getTotal"]) }}</strong></center></td>
                                                      </tr>
                                                </tfoot>
                                          </table>
                                    </center>
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
                  alert(index)
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
            },
            formatValue(n){
                  let val = (n/1).toFixed(2).replace('.', ',')
                  return val.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            },
      },
}
</script>