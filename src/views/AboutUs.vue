<template>
  <div class="about">
    <AboutMore/>
    <AboutImage/>
    <AboutHistory/>
    <AboutText/>
  </div>
</template>

<script setup lang="ts">
import AboutMore from '@/components/about/AboutMore.vue';
import AboutImage from '@/components/about/AboutImage.vue';
import AboutHistory from '@/components/about/AboutHistory.vue';
import AboutText from '@/components/about/AboutText.vue';
</script>

<style lang="less">
.about {
  width: 80rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>