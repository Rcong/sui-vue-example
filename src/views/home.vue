<template>
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
      <a href='/examples/baichuan/detail' data-transition='slide-in'>
        <div class="card color-default">
          <div style="" valign="bottom" class="card-header color-white no-border no-padding">
            <img class='card-cover' src="//gd1.alicdn.com/bao/uploaded/i1/TB1kzlgHVXXXXbtXpXXXXXXXXXX_!!0-item_pic.jpg_640x640.jpg" alt="">
          </div>
          <div class="card-content">
            <div class="card-content-inner">
              <p>ROZENE春纯棉四件套 床上春夏 床单被套四件套全棉天丝四件套春夏</p>
              <p class="color-gray">发表于 2015/01/15</p>
            </div>
          </div>
          <div class="card-footer">
            <span class="link">赞(120)</span>
            <span class="link">评论(20)</span>
          </div>
        </div>
      </a>
      <a href='/examples/baichuan/detail' data-transition='slide-in'>
        <div class="card color-default">
          <div style="" valign="bottom" class="card-header color-white no-border no-padding">
            <img class='card-cover' src="//gd2.alicdn.com/bao/uploaded/i2/TB1mEnmHXXXXXXHapXXXXXXXXXX_!!0-item_pic.jpg_640x640.jpg" alt="">
          </div>
          <div class="card-content">
            <div class="card-content-inner">
              <p>Roz居家美式高档床上用品纯棉4四件套全棉床单被套1.8m床上四件套</p>
              <p class="color-gray">发表于 2015/01/15</p>
            </div>
          </div>
          <div class="card-footer">
            <span class="link">赞(120)</span>
            <span class="link">评论(20)</span>
          </div>
        </div>
      </a>
      <a href='/examples/baichuan/detail' data-transition='slide-in'>
        <div class="card color-default">
          <div style="" valign="bottom" class="card-header color-white no-border no-padding">
            <img class='card-cover' src="//gd2.alicdn.com/bao/uploaded/i2/TB1QtUmGVXXXXbgaXXXXXXXXXXX_!!0-item_pic.jpg_640x640.jpg" alt="">
          </div>
          <div class="card-content">
            <div class="card-content-inner">
              <p>美式床品套件 四件套 家纺全棉四件套 纯棉被套4件套床单</p>
              <p class="color-gray">发表于 2015/01/15</p>
            </div>
          </div>
          <div class="card-footer">
            <span class="link">赞(120)</span>
            <span class="link">评论(20)</span>
          </div>
        </div>
      </a>
    </div>
    <div class="infinite-scroll-preloader">
      <div class="preloader"></div>
    </div>
    <div style='display:none' id='index-tpl'>
      <a href='/examples/baichuan/detail' data-transition='slide-in'>
        <div class="card color-default">
          <div style="" valign="bottom" class="card-header color-white no-border no-padding">
            <img class='card-cover' src="//gd4.alicdn.com/bao/uploaded/i4/TB13mgfHpXXXXcVXFXXXXXXXXXX_!!2-item_pic.png_640x640.jpg" alt="">
          </div>
          <div class="card-content">
            <div class="card-content-inner">
              <p>R居家馆 高档床上用品4件套纯棉 床单式提花四件套 全棉贡缎 欧式</p>
              <p class="color-gray">发表于 2015/01/15</p>
            </div>
          </div>
          <div class="card-footer">
            <span class="link">赞(120)</span>
            <span class="link">评论(20)</span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
