<template>
<div class="list-block media-list">
  <ul>
    <li v-for="item in items">
      <a :href="item.link" class="item-link item-content" data-transition='slide-in'>
        <div class="item-media"><img :src="item.img" width="80"></div>
        <div class="item-inner">
          <div class="item-title-row">
            <div class="item-title">{{item.title}}</div>
            <div class="item-after">${{item.price}}</div>
          </div>
          <div class="item-subtitle">月销{{item.sales}}笔</div>
          <div class="item-text">{{item.description}}</div>
        </div>
      </a>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  props: ['items']
}
</script>
