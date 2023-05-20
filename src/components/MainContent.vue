<template>
      <div class="container-fluid pt-3">
            <div class="row">
                  <Cart/>
                  <div class="col-md-4" v-for="product in products">
                        <br>
                        <div class="card" style="width: 18rem; border-radius: 22px;">
                              <img :src=product.imgUri :alt="product.name" style="border-top-right-radius: 22px;border-top-left-radius: 22px;">
                              <div class="card-body">
                                    <h5 class="card-title">{{ product.name }}</h5>
                                    <p>De la finca a tu mesa</p>
                                    <div class="row">
                                          <div class="col-md-6">
                                                <input type="number" class="form-control" placeholder="Cantidad" min="0" v-model="generalQuantityField">
                                          </div>
                                          <div class="col-md-6">
                                                <button class="btn btn-primary" v-on:click="addToCart(product)">Agregar</button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      </div>
</template>

<script>

import Cart from "./Cart.vue"

export default {
      components:{Cart},
      data() {
            return {
                  products:[
                        {
                              "name":"Zanahorias 1LB",
                              "imgUri":"https://images.pexels.com/photos/65174/pexels-photo-65174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                              "price": 7000,
                        },
                        {
                              "name":"Cebollas x 1KG",
                              "imgUri":"https://images.pexels.com/photos/533342/pexels-photo-533342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                              "price": 4500,
                        },
                        {
                              "name":"Papas x 1KG",
                              "imgUri":"https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                              "price": 6800,
                        }
                  ],
                  generalQuantityField:0
            }
      },
      methods: {
            addToCart(element){

                  let calc = (this.generalQuantityField*element.price)
                  

                  const schema = {
                        "productName":element.name,
                        "quantity":this.generalQuantityField,
                        "price":element.price
                  }

                  const search = this.$store.state.cart.find( product => product.productName === element.name );
                  let indice = this.$store.state.cart.findIndex(product => product.productName === element.name);

                  if(search===undefined){//No existe
                        this.$store.state.element = schema
                        this.$store.dispatch('addToCartAction')
                  }else{//Si existe
                        this.$store.dispatch('incrementQuantityAction',indice);
                  }

                  // Reinciamos la cantidad
                  this.generalQuantityField = 0

            }
      },
}
</script>