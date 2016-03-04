<template>
<div>
  <header class="bar bar-nav">
    <h1 class="title">收藏</h1>
  </header>
  <div data-distance="100" class="content pull-to-refresh-content page-home infinite-scroll" data-distance="100">
    <div class="pull-to-refresh-layer">
      <div class="preloader"></div>
      <div class="pull-to-refresh-arrow"></div>
    </div>
    <v-media-list :items="items"></v-media-list>
    <div class="pull-to-refresh-layer">
      <div class="preloader"></div>
      <div class="pull-to-refresh-arrow"></div>
    </div>
  </div>
</div>
</template>

<script>
import VMediaList from '../components/MediaList.vue'
export default {
  ready(){
    $(document).on('pageInit', '.infinite-scroll',function() {
      console.log(111);
    });
  },
  data () {
    return {
      items:[
        {
          link:'/detail',
          img:'//gdp.alicdn.com/bao/uploaded/i1/TB1kzlgHVXXXXbtXpXXXXXXXXXX_!!0-item_pic.jpg_240x240.jpg',
          title:'ROZENE家纺床品',
          price:120,
          sales:203,
          description:'ROZENE春纯棉四件套 床上春夏 床单被套四件套全棉天丝四件套春夏'
        },
        {
          link:'/detail',
          img:'//gdp.alicdn.com/bao/uploaded/i2/TB1mEnmHXXXXXXHapXXXXXXXXXX_!!0-item_pic.jpg_240x240.jpg',
          title:'美式床品套件',
          price:150,
          sales:145,
          description:'Roz居家美式高档床上用品纯棉4四件套全棉床单被套1.8m床上四件套'
        },
        {
          link:'/detail',
          img:'//gdp.alicdn.com/bao/uploaded/i4/TB13mgfHpXXXXcVXFXXXXXXXXXX_!!2-item_pic.png_240x240.jpg',
          title:'Rozene居家馆',
          price:120,
          sales:345,
          description:'Rozen 高档家纺品牌 床上用品夏100%天丝四件套 夏季贡缎欧美式'
        },
        {
          link:'/detail',
          img:'//gdp.alicdn.com/bao/uploaded/i1/TB1kzlgHVXXXXbtXpXXXXXXXXXX_!!0-item_pic.jpg_240x240.jpg',
          title:'美式床品套件',
          price:150,
          sales:145,
          description:'Roz居家美式高档床上用品纯棉4四件套全棉床单被套1.8m床上四件套'
        },
        {
          link:'/detail',
          img:'//gdp.alicdn.com/bao/uploaded/i4/TB13mgfHpXXXXcVXFXXXXXXXXXX_!!2-item_pic.png_240x240.jpg',
          title:'Rozene居家馆',
          price:120,
          sales:345,
          description:'Rozen 高档家纺品牌 床上用品夏100%天丝四件套 夏季贡缎欧美式'
        },
        {
          link:'/detail',
          img:'//gdp.alicdn.com/bao/uploaded/i4/TB13mgfHpXXXXcVXFXXXXXXXXXX_!!2-item_pic.png_240x240.jpg',
          title:'Rozene居家馆111',
          price:120,
          sales:345,
          description:'Rozen 高档家纺品牌 床上用品夏100%天丝四件套 夏季贡缎欧美式111'
        }
      ]
    }
  },
  components:{
    VMediaList
  }
}
</script>
