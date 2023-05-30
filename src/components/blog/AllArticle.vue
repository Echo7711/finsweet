<template>
  <div class="article-list">
    <div class="article-list-item" v-for="(item, index) in articleList" :key="index">
      <img :src="item.imgUrl" />
      <div>
        <div>
          <img src="@/assets/blog/person1.png"/>
          <span>Andrew Jonson<br/>27th January 2021</span>
        </div>
        <p>{{ item.txt }}</p>
        <span>Read More →</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const articleList = ref([
  {
    imgUrl: require('../../assets/blog/a1.png'),
    txt: 'A guide to Thai Curry'
  },
  {
    imgUrl: require('../../assets/blog/a1.png'),
    txt: 'The best guacamole recipe with only 4 ingredients'
  },
  {
    imgUrl: require('../../assets/blog/a1.png'),
    txt: 'How to store Tomatoes (and Whether to Refrigerate Them)'
  },
  {
    imgUrl: require('../../assets/blog/a1.png'),
    txt: 'The Absolute Best Way to Cook French Fries'
  }
])
</script>

<style lang="less">
.article-list {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>