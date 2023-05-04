<template>
  <div class="footer">
    <img src="@/assets/logo.png" />
    <NavMenu/>
    <div class="other-link">
      <span class="first-link">©2023 Finsweet | All rights reserved</span>
      <a-space>
        <facebook-outlined />
        <twitter-outlined />
        <instagram-outlined />
        <linkedin-outlined />
      </a-space>
      <span class="contact-link">Contact Us →</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import NavMenu from './NavMenu.vue';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons-vue';
</script>
