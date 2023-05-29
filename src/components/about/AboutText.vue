<template>
  <div class="about-text">
    <div class="text-left">
      Things our company stands for
    </div>
    <div class="text-right">
      <span>Edit this text to make it your own. To edit, simply click directly</span>
      <p>
        Writing UX copies can be a little frustrating and confusing, 
        and sometimes we are unsure about how to get the right word. 
        To crack the code for the UX copies, we at Zeta Design wanted 
        to build a Figma plugin for the larger design community. 
        The plugin is called the Ghost UXWriter and has a set of 
        UX copies cataloged and categorized with a voice and tone 
        variation ranging from plain, casual to playful. The intention 
        to build this Figma plugin originated from our Medium blog post, 
        ‘Designing voice and tone for error messages.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less">
.about-text {
  width: 80rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .text-left {
    width: 50%;
    font-size: 2rem;
    text-align: center;
  }
  .text-right {
    width: 50%;
    padding: 8rem;
    span {
      font-size: 1.2rem;
      margin-bottom: 2rem;
    }
    p {
      font-size: 0.8rem;
      color: #9F9FA0;
    }
  }
}
</style>