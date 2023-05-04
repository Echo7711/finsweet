<template>
  <div class="serving">
    <span style="color: #FAB175;">WHAT WE ARE SERVING ——</span>
    <div class="serving-title">
      <div class="title-left">
        <span style="font-size: 3rem;">We all have to eat, so why not do it beautifully?</span>
      </div>
      <div class="title-right">
        <p>Through True Rich Attended does no end it his mother since favourable real had half 
          every him case in packages enquire we up ecstatic.. Through True Rich Attended does no end it his mother.</p>
      </div>
    </div>
    <div class="serving-list" v-for="(item, index) in typeData" :key="index">
      <bulb-filled style="color: #FAB175;margin-bottom: 1rem;" /><br>
      <span>{{ item.title }}</span>
      <p>{{ item.text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BulbFilled } from '@ant-design/icons-vue'
import { ref } from 'vue'

const typeData = ref([
  { title: 'Quafe Cake', text: 'Through True Rich Attended no end it his mother since favourable real had half every him.' },
  { title: 'Cofee', text: 'Through True Rich Attended no end it his mother since favourable real had half every him.' },
  { title: 'Fast Food', text: 'Through True Rich Attended no end it his mother since favourable real had half every him.' },
  { title: 'Cocktails', text: 'Through True Rich Attended no end it his mother since favourable real had half every him.' },
  { title: 'Grill', text: 'Through True Rich Attended no end it his mother since favourable real had half every him.' },
  { title: 'Snacks', text: 'Through True Rich Attended no end it his mother since favourable real had half every him.' }
])
</script>

<style lang="less">
.serving {
  width: 80rem;
  height: 700px;
  margin-top: 2rem;
  padding: 0 2rem;
  .serving-title {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    .title-left {
      width: 50%;
      padding-right: 2rem;
    }
    .title-right {
      width: 50%;
      padding: 0 5rem;
      p {
      color: #919092;
    }
    }
  }
  .serving-list {
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