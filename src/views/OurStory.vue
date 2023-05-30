<template>
  <div class="story">
    <div class="story-left">
      <span>Our Story</span>
      <p>Through True Rich Attended does 
        no end it his mother since favourable 
        real had half every him case in 
        packages enquire we up ecstatic.</p>
        <div class="img">
          <img style="margin: 5rem 0 0 1rem;" src="@/assets/story/img1.png"/>
          <img style="margin: 0 0 5rem 6rem;" src="@/assets/story/img2.png"/>
        </div>
    </div>
    <div class="story-right">
      <span>One of the best cafes in New York.</span>
      <p>
        Writing UX copies can be a little frustrating
         and confusing, and sometimes we are unsure 
         about how to get the right word. To crack 
         the code for the UX copies, we at Zeta Design 
         wanted to build a Figma plugin for the larger 
         design community. The plugin is called the 
         Ghost UXWriter and has a set of UX copies 
         cataloged and categorized with a voice and 
         tone variation ranging from plain, casual 
         to playful. The intention to build this 
         Figma plugin originated from our Medium 
         blog post, ‘Designing voice and tone for 
         error messages.
      </p>
      <p>
        Writing UX copies can be a little frustrating 
        and confusing, and sometimes we are unsure 
        about how to get the right word. To crack 
        the code for the UX copies, we at Zeta Design 
        wanted to build a Figma plugin for the larger 
        design community. The plugin is called the Ghost 
        UXWriter and has a set of UX copies cataloged 
        and categorized with a voice and tone variation 
        ranging from plain, casual to playful. The 
        intention to build this Figma plugin originated 
        from our Medium blog post, ‘Designing voice.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less">
.story {
  width: 80rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .story-left {
    padding: 3rem;
    span {
      font-size: 2rem;
    }
    p {
      font-size: 0.8rem;
      color: #9F9FA0;
    }
  }
  .story-right {
    width: 50%;
    padding: 0 8rem;
    span {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.8rem;
      color: #9F9FA0;
    }
  }
}
</style>