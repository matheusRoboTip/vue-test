<template>
  <header class="header">
    <h1>{{ msg }}</h1>
    <span v-if="isChecked">isChecked é true</span>
    <a href="https://robotip.com.br" target="_blank">
      <figure class="logo">
        <picture>
          <source src="@/assets/logo.png" type="image/png" />
          <img src="@/assets/logo.png" alt="logo-img" />
        </picture>
      </figure>
    </a>
  </header>
</template>

<script>
export default {
  props: {
    msg: String,
  },
  computed: {
    isChecked() {
      return this.$store.state.isChecked;
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 1rem;
  height: 10vh;
  width: 100%;
  align-items: center;
  box-shadow: 0 0 4px 0 #555;
  z-index: 999;
  position: relative;
  background-color: #262626;
  color: #f0f0f0;
  overflow: hidden;
}

.logo picture img {
  height: 9.5vh;
  width: 9.5vh;
}

a {
  text-decoration: none;
}
</style>
