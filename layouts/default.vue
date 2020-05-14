<template>
  <div>
    <NavBar />
    <div class="btn">
      <SourceCode />
    </div>
    <nuxt />
  </div>
</template>
<script>
import NavBar from '~/components/NavBar.vue';
import SourceCode from '~/components/Button/SourceCode.vue';

export default {
  components: {
    NavBar,
    SourceCode
  }
};
</script>
<style>
html {
  font-size: 16px;
}
body {
  background-color: #e7f6ff;
  padding: 0 1.25rem;
}
.btn {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
}
</style>
