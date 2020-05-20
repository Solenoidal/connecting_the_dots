<template>
  <div>
    <NavBar />
    <div class="btn">
      <SourceCode />
      <Control />
    </div>
    <nuxt />
  </div>
</template>
<script>
import NavBar from '~/components/NavBar.vue';
import SourceCode from '~/components/Button/SourceCode.vue';
import Control from '~/components/Button/Control.vue';

export default {
  components: {
    NavBar,
    SourceCode,
    Control
  },
  head() {
    return {
      titleTemplate: '%s - CONNECTING THE DOTS',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: ''
        }
      ]
    };
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
