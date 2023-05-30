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
  width: 80rem;
  // margin-top: 2rem;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h2 {
    color: #ffffff;
    margin: 2rem;
  }
}

</style>