<template>
  <div class="quote">
    <div class="quote-left">
      <div class="quote-txt">
        <span>“</span>
        <p>Edit this text to make it your own.
          To edit, simply click directlt on the 
          text to start addingyour own words. 
          You can move the text by dragging and 
          dropping the text.</p>
      </div>
      <div class="quote-person">
        <span>Joheny Andro<br/>Bhubaneswar, Odisha</span>
        <img src="@/assets/home/person.png"/>
      </div>
    </div>
    <div class="quote-img">
      <!-- 是video 此处未设置 -->
      <img src="@/assets/home/video.png" />
    </div>
   
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less">
.quote {
  margin-top: 2rem;
  padding: 0 2rem;
  .quote-left {
    float: left;
    width: 40%;
    padding: 2rem 5rem;
    .quote-txt {
      span {
        font-size: 3rem;
        font-family: 'Times New Roman', Times, serif;
      }
      p {
        font-size: 1.5rem;
      }
    }
    .quote-person {
      font-size: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        width: 48px;
        height: 48px;
      }
    }
  }
  .quote-img {
    float: left;
    width: 60%;
    img {
      width: 100%;
    }
  }
}
</style>