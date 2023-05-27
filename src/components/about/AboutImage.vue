<template>
  <div class="about-img">
    <div class="about-img-bg">
       <div>
      <span>One of the best Cafes in New York</span>
      <p>Through True Rich Attended does no end 
      it his mother since favourable real had 
      half every him case in packages enquire 
      we up ecstatic.. Through True Rich 
      Attended does no end it his mother</p>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less">
.about-img {
  width: 100%;
  height: 500px;
  margin: 2rem;
  background: url('../../assets/about/bg.png');
  background-size: 100% 100%;
  .about-img-bg {
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background-image: linear-gradient(to right, black, white);
    div {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      span {
        font-size: 3rem;
        font-family: PlayfairDisplay-Bold;
      }
      p {
        font-size: 0.8rem;
      }
    }
  }
}
</style>