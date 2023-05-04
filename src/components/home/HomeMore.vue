<template>
  <div class="more">
    <div class="more-left">
      <span style="color: #FAB175;">KNOW MORE ABOUT US ——</span><br>
      <span style="font-size: 3rem;">We source sustainable & line caught Foods</span>
      <p>Edit this text to make it your own. To edit, 
        simply click directly on the text to start adding your own words.
         You can move the text by dragging and dropping the text anywhere on the page.</p>
      <div class="feature" v-for="(item, index) in data" :key="index">
          <span><bulb-filled style="color: #FAB175;" />{{ item.title }}</span>
          <p>{{ item.txt }}</p>
          <p>{{ item.text }}</p>
      </div>
      <MenuButton/>
    </div>
    <div class="more-right">
      <img style="margin: 5rem 0 0 1rem;" src="@/assets/more_img1.png" />
      <img style="margin: 0 0 5rem 6rem;" src="@/assets/more_img2.png" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import MenuButton from '@/components/home/MenuButton.vue'
import { BulbFilled } from '@ant-design/icons-vue'
import { ref } from 'vue'

const data = ref([
  { title: '10+ People', txt: 'We are Small Team', text: 'Through True Rich Attended does no end it his mother since favourable.' },
  { title: '2014', txt: 'We are From', text: 'Through True Rich Attended does no end it his mother since favourable.' },
  {title: '200k', txt: 'We Served', text: 'Through True Rich Attended does no end it his mother since favourable.'}
])
</script>

<style lang="less">
@themeColor: #FAB175;

.more {
  width: 80rem;
  margin-top: 5rem;
  height: 595px;
  padding: 0 2rem;
  display: flex;

  .more-left {
    width: 50%;
    padding-right: 2rem;

    p {
      color: #919092;
    }

    .feature {
      float: left;
      width: 10rem;
      margin: 1rem 1rem 1rem 0;
        span {
          font-size: 1.2rem;
          color: #C2E1E7;
          margin-bottom: 10px;
        }
    }
  }
}
</style>