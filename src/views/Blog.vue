<template>
  <div class="blog">
    <h2>Featured Blogs</h2>
    <FeaturedBlog/>
    <h2>All Articles</h2>
    <AllArticle/>
  </div>
</template>

<script setup lang="ts">
import FeaturedBlog from '@/components/blog/FeaturedBlog.vue';
import AllArticle from '@/components/blog/AllArticle.vue';
</script>

<style lang="less">
.blog {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h2 {
    color: #ffffff;
  }
}

</style>