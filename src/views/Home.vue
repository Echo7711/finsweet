<template>
  <div class="home">
    <HomeHeader/>
    <HomeMore/>
    <HomeServing/>
    <HomeMenu/>
    <HomeQuote/>
    <HomeBlog/>
  </div>
</template>

<script lang="ts" setup>
import HomeHeader from '@/components/home/HomeHeader.vue'
import HomeMore from '@/components/home/HomeMore.vue'
import HomeServing from '@/components/home/HomeServing.vue'
import HomeMenu from '@/components/home/HomeMenu.vue'
import HomeQuote from '@/components/home/HomeQuote.vue'
import HomeBlog from '@/components/home/HomeBlog.vue'
</script>

<style lang="less">
.home {
  width: 80rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>