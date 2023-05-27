<template>
      <div>
            <Sidebar/>
            <div class="main-content" id="panel">
                  <TopNav/>
                  <CartDetail/>
            </div>
      </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import TopNav from '../components/TopNav.vue';
import CartDetail from '../components/CartDetail.vue';

import "../assets/css/theme.css"
export default {
      components:{Sidebar, TopNav, CartDetail}
}
</script>