<template>
  <div class="menu">
    <span style="color: #FAB175;">OUR MENU ——</span>
    <div class="menu-title">
      <div class="title-left">
        <span style="font-size: 3rem;">Discover our menu chart</span>
        <p>Most Popular Picks</p>
      </div>
      <div class="title-right">
        <p>Through True Rich Attended does no end it his mother since favourable real had half 
          every him case in packages enquire we up ecstatic.. Through True Rich Attended does no end it his mother.</p>
      </div>
    </div>
    <div class="menu-list" v-for="(item, index) in typeData" :key="index">
      <img :src="item.url"/>
      <span>{{ item.name }}</span>
      <sapn>${{ item.price }}</sapn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const typeData = ref([
  { url: '@/assets/menu.png', name: '1', price: '19.99' },
  { url: '@/assets/menu.png', name: '1', price: '19.99' },
  { url: '@/assets/menu.png', name: '1', price: '19.99' },
  { url: '@/assets/menu.png', name: '1', price: '19.99' },
  { url: '@/assets/menu.png', name: '1', price: '19.99' },
  { url: '@/assets/menu.png', name: '1', price: '19.99' }
])
</script>

<style lang="less">
.menu {
  width: 80rem;
  height: 815px;
  margin-top: 2rem;
  padding: 0 2rem;
  .menu-title {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    .title-left {
      width: 50%;
      padding-right: 2rem;
      p {
        color: #919092;
      }
    }
    .title-right {
      width: 50%;
      padding: 0 5rem;
      p {
        color: #919092;
      }
    }
  }
  .menu-list {
    float: left;
    margin: 2rem 8rem 2rem 2rem;
    width: 12rem;
    span {
      font-size: 1.2rem;
    }
    p {
      margin-top: 10px;
      color: #919092;
    }
  }
}
</style>