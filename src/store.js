import { createStore } from 'vuex'

// Create a new store instance.
export const store = createStore({
      state:{
            cart: [],
            element:""
      },
      mutations: {
            addToCart (state) {
                  state.cart = [state.element, ...state.cart];
            },
            incrementQuantity(state, position){
                  state.cart[position].quantity+=1;
            },
            deleteProductOnCart(state,position){
                  state.cart.splice(position)
            },
            decrementQuantity(state, position){
                  if (state.cart[position].quantity<1) {//Si es menor a 1 eliminamos el producto del carrito
                        state.cart.splice(position)
                  }else{//Sino le decrementamos
                        state.cart[position].quantity-=1;
                  }
            },
            emptyCart(state){
                  state.cart = [];
            }
      },
      actions:{
            addToCartAction(context){
                  context.commit('addToCart');
            },
            incrementQuantityAction(context,position){
                  context.commit('incrementQuantity',position);
            },
            deleteProductOnCartAction(context,position){
                  context.commit('deleteProductOnCart',position);
            },
            decrementQuantityAction(context,position){
                  context.commit('decrementQuantity',position);
            },
            emptyCartAction(context){
                  context.commit('emptyCart');
            }
      }
})