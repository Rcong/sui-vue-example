<template>
  <a :href="card.link" data-transition='slide-in'>
    <div class="card color-default">
      <div style="" valign="bottom" class="card-header color-white no-border no-padding">
        <img class='card-cover' :src="card.img" alt="">
      </div>
      <div class="card-content">
        <div class="card-content-inner">
          <p>{{card.description}}</p>
        </div>
      </div>
      <div class="card-footer">
        <span class="link">赞({{card.agree}})</span>
        <span class="link">评论({{card.comment}})</span>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: ['card']
}
</script>
