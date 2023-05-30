<template>
  <div class="cs">
    <div class="cs-left">
      <h1>Have a Question ? Get in Touch with us 👋</h1>
      <p>Fill up the Form  and ou team will get back to within 24 hrs</p>
      <form>
        <label>Name: <input /></label><br/><br/>
        <label>Email: <input /></label><br/><br/>
        <label>Message: <input /></label>
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
  margin-top: 2rem;
  margin-bottom: 5rem;
  display: flex;
  h1 {
    color: #ffffff;
  }
  input {
    background: transparent;
  }
  .cs-left {
    width: 50%;
    form {
      margin: 3rem 0;
    }
    @themeColor: #FAB175;
    button {
      margin: 2rem 0;
      background-color: @themeColor;
      border: 1px solid @themeColor;
      border-radius: 5px;
      color: black;
      padding: 3px 5px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
  }
  .cs-right {
    width: 50%;
  }
}
</style>