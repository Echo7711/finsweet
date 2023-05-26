<template>
  <a-menu mode="horizontal" theme="dark" :selectedKeys="selectedKeys">
    <a-menu-item key="home" @click="$router.replace('/home')">Home</a-menu-item>
    <a-menu-item key="menu" @click="$router.replace('/menu')">Menu</a-menu-item>
    <a-menu-item key="about" @click="$router.replace('/about')">About us</a-menu-item>
    <a-menu-item key="story" @click="$router.replace('/story')">Our story</a-menu-item>
    <a-menu-item key="blog" @click="$router.replace('/blog')">Blog</a-menu-item>
    <a-menu-item key="contact" @click="$router.replace('/contact')">Contact</a-menu-item>
  </a-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const selectedKeys = ref([route.path.split('/')[1]])

</script>