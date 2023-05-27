<template>
      <aside style="overflow: hidden;" class="sidenav navbar navbar-vertical navbar-expand-xs border-end fixed-start loopple-fixed-start" id="sidenav-main">
        <div class="sidenav-header">
            <i class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-xl-none" aria-hidden="true" id="iconSidenav"></i>
            <a class="navbar-brand m-0" href="javascript:;">
                <img src="../assets/logo-login.png">
            </a>
        </div>
        <hr class="horizontal dark mt-0">
        <div class="d-flex align-items-center justify-content-cente ms-4 ps-2">
            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80" class="avatar avatar-sm">
            <div class="ms-2">
                <p class="text-xs mb-0">{{ userName }}</p>
            </div>
        </div>
        <hr class="horizontal dark">
        <div class="collapse navbar-collapse  w-auto  max-height-vh-100 h-100" id="sidenav-collapse-main">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" href="javascript:;">
                        <div class="icon icon-shape icon-sm p-0 text-center me-2 d-flex align-items-center justify-content-center">
                              <svg width="23px" height="23px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#67748e"><path d="M11 19v2M11 12v4M16 12v4h-2M21 12H8M5 12H3M3 5l9-2 9 2" stroke="#67748e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21 8.6v11.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6V8.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6z" stroke="#67748e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </div>
                        <span class="nav-link-text ms-1">Inicio</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link  " href="javascript:;">
                        <div class="icon icon-shape icon-sm p-0 text-center me-2 d-flex align-items-center justify-content-center">
                              <svg width="23px" stroke-width="1.5" height="23px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#67748e"><path d="M5 19.5V5a2 2 0 012-2h11.4a.6.6 0 01.6.6V21M9 7h6M6.5 15H19M6.5 18H19M6.5 21H19" stroke="#67748e" stroke-width="1.5" stroke-linecap="round"></path><path d="M6.5 18c-1 0-1.5-.672-1.5-1.5S5.5 15 6.5 15M6.5 21c-1 0-1.5-.672-1.5-1.5S5.5 18 6.5 18" stroke="#67748e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </div>
                        <span class="nav-link-text ms-1">Gestión</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link  " href="javascript:;">
                        <div class="icon icon-shape icon-sm p-0 text-center me-2 d-flex align-items-center justify-content-center">
                              <svg width="23px" height="45px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#67748e"><path d="M8 19a2 2 0 100-4 2 2 0 000 4zM18 19a2 2 0 100-4 2 2 0 000 4z" stroke="#67748e" stroke-width="1.5" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.05 17H15V6.6a.6.6 0 00-.6-.6H1M5.65 17H3.6a.6.6 0 01-.6-.6v-4.9" stroke="#67748e" stroke-width="1.5" stroke-linecap="round"></path><path d="M2 9h4" stroke="#67748e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 9h5.61a.6.6 0 01.548.356l1.79 4.028a.6.6 0 01.052.243V16.4a.6.6 0 01-.6.6h-1.9M15 17h1" stroke="#67748e" stroke-width="1.5" stroke-linecap="round"></path></svg>
                        </div>
                        <span class="nav-link-text ms-1">Transporte</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link  " href="javascript:;">
                        <div class="icon icon-shape icon-sm p-0 text-center me-2 d-flex align-items-center justify-content-center">
                              <svg width="23px" height="23px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#67748e"><path d="M16 16V8M12 16v-5M8 16v-3" stroke="#67748e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 20.4V3.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6v16.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6z" stroke="#67748e" stroke-width="1.5"></path></svg>
                        </div>
                        <span class="nav-link-text ms-1">Estadísticas</span>
                    </a>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script>
export default {
      data() {
            return {
                  userName:localStorage.getItem('userName')
            }
      },
}
</script>