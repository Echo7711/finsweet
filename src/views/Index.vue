<template>
  <div class="layout">
    <div class="navbar">
      <div class="logo">
        <img src="../assets/logo.png" />
      </div>
     <NavMenu/>
    </div>
    <div class="content">
        <router-view />
    </div>
    <ComFooter/>
  </div>  
</template>

<script setup lang="ts">
import ComFooter from '@/components/layout/ComFooter.vue'
import NavMenu from '@/components/layout/NavMenu.vue'
</script>

<style lang="less">
@import url('../styles/index.less');
</style>
