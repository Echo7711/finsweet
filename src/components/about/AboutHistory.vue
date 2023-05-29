<template>
  <div class="about-history">
    <span class="about-history-title">Our History</span>
    <hr/>
    <div class="about-history-list">
      <div class="about-history-list-item" v-for="(item, index) in listData" :key="index">
      <span class="time">{{ item.time }}</span><br/>
      <span class="title">{{ item.title}}</span>
      <p>{{ item.txt }}</p>
      </div>
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
.about-history {
  width: 80rem;
  margin: 2rem;
  .about-history-title {
    font-size: 1.5rem;
    margin: 2rem 1rem;
  }
  .about-history-list {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-flow: row wrap;
    .about-history-list-item {
      width: 240px;
      // height: 222px;
      .time {
        font-size: 1.5rem;
      }
      .title {
        font-size: 1rem;
      }
      p {
        width: 70%;
        font-size: 0.8rem;
        color: #9F9FA0;
      }
    }
  }
}
</style>