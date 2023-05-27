<template>
  <div class="about-history">
    <span class="about-history-top">Our History</span>
    <div class="about-history-list" v-for="(item, index) in listData" :key="index">
      <span>{{ item.time }}</span>
      <span>{{ item.title}}</span>
      <p>{{ item.txt }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const listData = ref([
  {
    time: '1998',
    title: 'Milestone One',
    txt: 'Through True Rich Attended does no end it his mother since favourable.'
  },
  {
    time: '2005',
    title: 'Milestone Two',
    txt: 'Through True Rich Attended does no end it his mother since favourable.'
  },
  {
    time: '2012',
    title: 'Milestone Three',
    txt: 'Through True Rich Attended does no end it his mother since favourable.'
  },
  {
    time: '2021',
    title: 'Milestone Four',
    txt: 'Through True Rich Attended does no end it his mother since favourable.'
  },
])
</script>

<style lang="less">
</style>