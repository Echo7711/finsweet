<template>
  <div class="header">
    <div class="header-left">
      <span style="font-size: 3rem;">We serve high quality foods of all kinds</span>
      <p>Edit this text to make it your own. To edit, simply click directly on the text to start adding your own words. You can move the text.</p>
      <MenuButton/>
      <span>Opening Times</span>
      <p>Sunday to Saturday  l  09:00 AM to 11:00 PM</p>
      <span>Location</span>
      <p>Master canteen, BBSR , Odisha 752054</p>
      <span>Call us</span>
      <p>+9776462441</p>
    </div>
    <div class="header-right">
      <img src="@/assets/home/header_img.png" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import MenuButton from '@/components/home/MenuButton.vue'
</script>

<style lang="less">
@themeColor: #FAB175;

.header {
  margin-top: 2rem;
  height: 684px;
  display: flex;

  .header-left {
    width: 50%;
    margin-top: 3rem;
    padding: 2rem;

    span {
      font-size: 20px;
    }

    p {
      color: #919092;
    }
  }

  .header-right {
    width: 50%;
    text-align: center;
  }
}
</style>