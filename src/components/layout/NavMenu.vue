<template>
  <a-menu
  mode="horizontal"
  theme="dark"
  :selectedKeys="[route.path.split('/')[1]]"
  @click="menuClick">
    <a-menu-item key="home">Home</a-menu-item>
    <a-menu-item key="menu">Menu</a-menu-item>
    <a-menu-item key="about">About us</a-menu-item>
    <a-menu-item key="story">Our story</a-menu-item>
    <a-menu-item key="blog">Blog</a-menu-item>
    <a-menu-item key="contact">Contact</a-menu-item>
  </a-menu>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const menuClick = (item: any) => {
  router.push(item.key)
}
</script>