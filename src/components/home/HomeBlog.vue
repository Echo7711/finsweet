<template>
  <div class="blog">
    <span class="blog-title">
      Read Our Lastest Blog
    </span>
    <div class="blog-list">
      <div class="blog-list-item" v-for="(item, index) in blogData" :key="index">
        <span style="font-size: 0.8rem;color: #919092;">{{ item.time }}</span><br/>
        <span style="font-size: 1.2rem;">{{ item.title }}</span><br/>
        <p style="font-size: 0.8rem;color: #919092;">{{ item.txt }}</p>
        <img :src="item.url"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const blogData = ref([
  {
    time: '21 Jun 2021',
    title: 'Extra Thick Homemad Pizza Sauce',
    txt: 'It is a long established fact that a reader will be distracted by the readable content of a page.',
    url: require('@/assets/home/blog1.png')
  },
  {
    time: '21 Jun 2021',
    title: 'The Best Way to Store Fresh Herbs',
    txt: 'It is a long established fact that a reader will be distracted by the readable content of a page.',
    url: require('@/assets/home/blog2.png')
  },
  {
    time: '21 Jun 2021',
    title: '5 ways to prepare porridge',
    txt: 'It is a long established fact that a reader will be distracted by the readable content of a page.',
    url: require('@/assets/home/blog3.png')
  }
])
</script>

<style lang="less">
.blog {
  width: 80rem;
  margin-top: 2rem;
  .blog-title {
    font-size: 2rem;
  }
  .blog-list {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .blog-list-item {
      width: 405px;
      height: 526px;
      padding-right: 2rem;
      padding-top: 2rem;
    }
  }
}
</style>