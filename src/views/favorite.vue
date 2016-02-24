<template>
<div>
  <v-media-list :items="items"></v-media-list>
  <div class="infinite-scroll-preloader">
    <div class="preloader"></div>
  </div>
</div>
</template>

<script>
import VMediaList from '../components/MediaList.vue'
export default {
  data () {
    return {
      items:[
        {
          link:'/examples/baichuan/detail',
          img:'//gdp.alicdn.com/bao/uploaded/i1/TB1kzlgHVXXXXbtXpXXXXXXXXXX_!!0-item_pic.jpg_240x240.jpg',
          title:'ROZENE家纺床品',
          price:120,
          sales:203,
          description:'ROZENE春纯棉四件套 床上春夏 床单被套四件套全棉天丝四件套春夏'
        },
        {
          link:'/examples/baichuan/detail',
          img:'//gdp.alicdn.com/bao/uploaded/i2/TB1mEnmHXXXXXXHapXXXXXXXXXX_!!0-item_pic.jpg_240x240.jpg',
          title:'美式床品套件',
          price:150,
          sales:145,
          description:'Roz居家美式高档床上用品纯棉4四件套全棉床单被套1.8m床上四件套'
        },
        {
          link:'/examples/baichuan/detail',
          img:'//gdp.alicdn.com/bao/uploaded/i4/TB13mgfHpXXXXcVXFXXXXXXXXXX_!!2-item_pic.png_240x240.jpg',
          title:'Rozene居家馆',
          price:120,
          sales:345,
          description:'Rozen 高档家纺品牌 床上用品夏100%天丝四件套 夏季贡缎欧美式'
        },
        {
          link:'/examples/baichuan/detail',
          img:'//gdp.alicdn.com/bao/uploaded/i1/TB1kzlgHVXXXXbtXpXXXXXXXXXX_!!0-item_pic.jpg_240x240.jpg',
          title:'美式床品套件',
          price:150,
          sales:145,
          description:'Roz居家美式高档床上用品纯棉4四件套全棉床单被套1.8m床上四件套'
        },
        {
          link:'/examples/baichuan/detail',
          img:'//gdp.alicdn.com/bao/uploaded/i4/TB13mgfHpXXXXcVXFXXXXXXXXXX_!!2-item_pic.png_240x240.jpg',
          title:'Rozene居家馆',
          price:120,
          sales:345,
          description:'Rozen 高档家纺品牌 床上用品夏100%天丝四件套 夏季贡缎欧美式'
        },
        {
          link:'/examples/baichuan/detail',
          img:'//gdp.alicdn.com/bao/uploaded/i4/TB13mgfHpXXXXcVXFXXXXXXXXXX_!!2-item_pic.png_240x240.jpg',
          title:'Rozene居家馆',
          price:120,
          sales:345,
          description:'Rozen 高档家纺品牌 床上用品夏100%天丝四件套 夏季贡缎欧美式'
        }
      ]
    }
  },
  components:{
    VMediaList
  }
}
</script>
