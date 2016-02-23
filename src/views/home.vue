<template>
<div>
  <header class="bar bar-nav">
    <a class="button button-link button-nav pull-right open-popup" data-popup=".popup-about">
      关于
      <span class="icon icon-menu"></span>
    </a>
    <h1 class="title">sui-mobile+vue的demo演示</h1>
  </header>
  <div class="content pull-to-refresh-content page-home infinite-scroll" id='home-page'>
    <style>
      .card-header {
        height: 10rem;
        overflow: hidden;
      }
    </style>
    <div class="pull-to-refresh-layer">
      <div class="preloader"></div>
      <div class="pull-to-refresh-arrow"></div>
    </div>
    <!-- 这里是页面内容区 -->
    <div class="list">
      <card v-for="card in cards"></card>
    </div>
    <div class="infinite-scroll-preloader">
      <div class="preloader"></div>
    </div>
  </div>
</div>
</template>

<script>
import Card from '../components/Card.vue'

export default {
  data () {
    return {
      cards: [
        {
          link: '/examples/baichuan/detail',
          img: '//gd1.alicdn.com/bao/uploaded/i1/TB1kzlgHVXXXXbtXpXXXXXXXXXX_!!0-item_pic.jpg_640x640.jpg',
          description:'ROZENE春纯棉四件套 床上春夏 床单被套四件套全棉天丝四件套春夏',
          agree:120,
          comment:20
        }
      ]
    }
  },
  components: {
    Card
  }
}
</script>
