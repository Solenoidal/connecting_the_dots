<template lang="pug">
  div
    NavBar
    .btn
      Sourcecode
    nuxt
</template>
<script>
import NavBar from '~/components/NavBar.vue';
import Sourcecode from '~/components/Button/Sourcecode';

export default {
  components: {
    NavBar,
    Sourcecode
  }
};
</script>
<style>
.btn {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
}
</style>
