<template>
  <div class="cs">
    <div class="cs-left">
      <h1>Have a Question ? Get in Touch with us 👋</h1>
      <p>Fill up the Form  and ou team will get back to within 24 hrs</p>
      <form>
        <p>Name: <input /></p>
        <p>Email: <input /></p>
        <p>Message: <input /></p>
      </form>
      <button>Send Message →</button>
    </div>
    <div class="cs-right">
      <img style="margin: 5rem 0 0 1rem;" src="@/assets/contact/contact1.png" />
      <img style="margin: 0 0 5rem 6rem;" src="@/assets/contact/contact2.png" />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less">
.cs {
  width: 80rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    color: #ffffff;
  }
  input {
    background: transparent;
  }
  .cs-left {
    width: 50%;
  }
  .cs-right {
    width: 50%;
  }
}
</style>