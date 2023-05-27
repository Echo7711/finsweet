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
    <div  class="menu-list">
      <div class="menu-list-item" v-for="(item, index) in typeData" :key="index">
        <img :src="item.url"/><br>
        <span class="menu-name">{{ item.name }}</span>
        <span class="menu-price">${{ item.price }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const typeData = ref([
  { url: require('@/assets/home/menu_cofee.png'), name: 'Drp Cofee', price: '8.85' },
  { url: require('@/assets/home/menu_cake.png'), name: 'Choco Cup Cake', price: '4.85' },
  { url: require('@/assets/home/menu_burger.png'), name: 'Chicken Burger', price: '8.85' },
  { url: require('@/assets/home/menu_fires.png'), name: 'French Fries', price: '7.85' },
  { url: require('@/assets/home/menu_sandwitch.png'), name: 'Sandwitch', price: '3.97' },
  { url: require('@/assets/home/menu_soup.png'), name: 'Chinese Soup', price: '8.85' },
  { url: require('@/assets/menu/menu_brade.png'), name: 'Quafe Brade', price: '7.85' },
  { url: require('@/assets/menu/menu_cofee.png'), name: 'Dalgona Cofee', price: '4.97' },
  { url: require('@/assets/menu/menu_noodle.png'), name: 'Chowmin Noodle', price: '8.85' },
  { url: require('@/assets/menu/menu_cola.png'), name: 'Coka Cola', price: '7.85' },
  { url: require('@/assets/menu/menu_salad.png'), name: 'Fruit Salad', price: '3.97' },
  { url: require('@/assets/menu/menu_cocktail.png'), name: 'Cocktail', price: '8.85' }
])
</script>

<style lang="less">
.menu {
  width: 80rem;
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
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-flow: row wrap;
    .menu-list-item {
      font-size: 1.2rem;
      width: 405px;
      height: 351px;
      img {
        width: 20rem;
        height: 12rem;
      }
    .menu-name {
      float: left;
      width: 15rem;
      color: #D2D2D3;
    }
    .menu-price {
      width: 57px;
    }
    }
  }
}
</style>