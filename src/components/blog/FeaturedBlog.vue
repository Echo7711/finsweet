<template>
  <div class="feature">
    <div class="blog-img">
      <img src="@/assets/blog/bg.png"/>
    </div>
    <div class="blog-list">
      <div class="blog-list-item" v-for="(item, index) in firstList" :key="index">
        <img :src="item.imgUrl"/>
        <div>
          <span>{{ item.title }}</span>
          <p>{{ item.txt }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const firstList = ref([
  {
    imgUrl: require('../../assets/blog/f1.png'),
    title: 'You can move the text by dragging and dropping the text',
    txt: 'Writing UX copies can be a little frustrating and confusing, and sometimes'
  },
  {
    imgUrl: require('../../assets/blog/f2.png'),
    title: 'Edit this text to make it your own. To edit, simply',
    txt: 'Writing UX copies can be a little frustrating and confusing, and sometimes'
  },
  {
    imgUrl: require('../../assets/blog/f3.png'),
    title: 'You can move the text by dragging and dropping the text',
    txt: 'Writing UX copies can be a little frustrating and confusing, and sometimes'
  }
])
</script>

<style lang="less">
.feature {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>