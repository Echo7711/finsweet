<template>
  <a-menu mode="horizontal" theme="dark" :defaultSelectedKeys="'1'">
    <a-menu-item key="1" @click="$router.replace('/home')">Home</a-menu-item>
    <a-menu-item key="2" @click="$router.replace('/Menu')">Menu</a-menu-item>
    <a-menu-item key="3" @click="$router.replace('/about')">About us</a-menu-item>
    <a-menu-item key="4" @click="$router.replace('/story')">Our story</a-menu-item>
    <a-menu-item key="5" @click="$router.replace('/blog')">Blog</a-menu-item>
    <a-menu-item key="6" @click="$router.replace('/contact')">Contact</a-menu-item>
  </a-menu>
</template>

<script lang="ts" setup>

</script>