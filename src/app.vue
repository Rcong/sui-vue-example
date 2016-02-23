<template>
  <div class="page page-current">
      <nav class="bar bar-tab">
        <a class="tab-item" v-link = "{ path: '/home' }" >
          <span class="icon icon-home"></span>
          <span class="tab-label">首页</span>
        </a>
        <a class="tab-item" v-link = "{ path: '/favorite' }" data-transition='slide-in'>
          <span class="icon icon-star"></span>
          <span class="tab-label">收藏</span>
        </a>
        <a class="tab-item" v-link = "{ path: '/me' }" data-transition='slide-in'>
          <span class="icon icon-me"></span>
          <span class="tab-label">我</span>
        </a>
      </nav>
      <router-view transition="fade" transition-mode="out-in" keep-alive></router-view>
  </div>
</template>

<style>
.fade-transition {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
}
</style>
