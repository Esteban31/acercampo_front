<template>
      <div>
            <Sidebar/>
            <div class="main-content" id="panel">
                  <TopNav/>
                  <MainContent/>
            </div>
      </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import TopNav from '../components/TopNav.vue';
import MainContent from '../components/MainContent.vue';

import "../assets/css/theme.css"
export default {
      components:{Sidebar, TopNav, MainContent}
}
</script>