<template>
      <nav class="navbar navbar-main navbar-expand-lg px-0 start-100 position-sticky blur shadow-none top-0 z-index-10" id="navbarTop" navbar-scroll="true">
            <div class="container-fluid py-2 px-5">
                  <div class="pe-md-3 d-flex align-items-center">
                        <h3>Mercado</h3>
                  </div>
                  <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                        <ul class="navbar-nav ms-auto justify-content-end">
                              <li class="nav-item d-flex me-sm-3 pe-2 align-items-center">
                              <router-link to="/app/cartDetail" class="nav-link text-body font-weight-bold px-0">
                                    <i class="fas fa-cart-plus text-lg" aria-hidden="true"></i>
                                    <span v-if="this.$store.state.cart.length > 0" class="position-absolute end-6 translate-middle p-1 bg-danger border border-white rounded-circle">
                                          <span class="visually-hidden">New alerts</span>
                                    </span>
                              </router-link>
                              </li>
                              <li class="nav-item position-relative d-xl-none ps-3 d-flex align-items-center">
                                    <a href="javascript:;" class="nav-link text-body p-0" id="iconNavbarSidenav">
                                          <div class="sidenav-toggler-inner">
                                                <i class="sidenav-toggler-line"></i>
                                                <i class="sidenav-toggler-line"></i>
                                                <i class="sidenav-toggler-line"></i>
                                          </div>
                                    </a>
                              </li>
                        </ul>
                  </div>
            </div>
      </nav>
</template>