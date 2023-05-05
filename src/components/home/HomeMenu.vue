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
      <img :src="item.url"/><br>
      <span class="menu-name">{{ item.name }}</span>
      <span class="menu-price">${{ item.price }}</span>
    </div>
  </div>
  <div class="button">
    <MenuButton/>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MenuButton from '@/components/home/MenuButton.vue'

const typeData = ref([
  { url: require('@/assets/menu_cofee.png'), name: 'Drp Cofee', price: '08.85' },
  { url: require('@/assets/menu_cake.png'), name: 'Choco Cup Cake', price: '4.85' },
  { url: require('@/assets/menu_burger.png'), name: 'Chicken Burger', price: '8.85' },
  { url: require('@/assets/menu_fires.png'), name: 'French Fries', price: '7.85' },
  { url: require('@/assets/menu_sandwitch.png'), name: 'Sandwitch', price: '3.97' },
  { url: require('@/assets/menu_soup.png'), name: 'Chinese Soup', price: '8.85' }
])
</script>

<style lang="less">
.menu {
  width: 80rem;
  height: 800px;
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
    font-size: 1.2rem;
    img {
      width: 20rem;
      height: 12rem;
    }
    .menu-name {
      float: left;
      width: 10rem;
      color: #D2D2D3;
      // margin-left: 1rem;
    }
    .menu-price {
      // float: right;
      width: 57px;
      // margin-right: 1rem;
    }
  }
}
.button {
  text-align: center;
}
</style>