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
import SourceCode from '~/components/Button/Sourcecode.vue';

export default {
  components: {
    NavBar,
    SourceCode
  }
};
</script>
<style>
body {
  background-color: #ecf8ff;
}
.btn {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
}
</style>
