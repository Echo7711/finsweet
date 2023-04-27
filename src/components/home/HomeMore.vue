<template>
  <div class="more">
    <div class="more-left">
      <span style="color: #FAB175;">KNOW MORE ABOUT US ——</span><br>
      <span style="font-size: 3rem;">We source sustainable & line caught Foods</span>
      <p>Edit this text to make it your own. To edit, 
        simply click directly on the text to start adding your own words.
         You can move the text by dragging and dropping the text anywhere on the page.</p>
      <div class="feature">
        <div>
          <span><bulb-filled style="color: #FAB175;" />10+ People</span>
          <p>We are Small Team</p>
          <p>Through True Rich Attended does no end it his mother since favourable.</p>
        </div>
        <div>
          <span><bulb-filled style="color: #FAB175;" />2014</span>
          <p>We are From</p>
          <p>Through True Rich Attended does no end it his mother since favourable.</p>
        </div>
        <div>
          <span><bulb-filled style="color: #FAB175;" />200k</span>
          <p>We Served</p>
          <p>Through True Rich Attended does no end it his mother since favourable.</p>
        </div>
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
</script>

<style lang="less">
@themeColor: #FAB175;

.more {
  width: 80rem;
  margin-top: 5rem;
  height: 595px;
  padding: 0 2rem;
  display: flex;
  border-bottom: 1px solid #fff;

  .more-left {
    width: 50%;
    padding-right: 2rem;

    p {
      color: #919092;
    }

    .feature {
      display: flex;
      flex-direction: row;

      div {
        padding: 10px 15px 10px 0;

        span {
          font-size: 1.2rem;
          color: #C2E1E7;
        }
      }
    }
  }
}
</style>