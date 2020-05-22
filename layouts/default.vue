<template>
  <div>
    <div v-show="isControlActive">
      <control-nav @clickControlNav="switchControlState" />
    </div>
    <div v-show="!isControlActive">
      <nav-bar />
      <nuxt />
    </div>
    <div class="fixed flex flex-col items-end btn">
      <source-code />
      <control @clickControlBtn="switchControlState" />
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue';
import SourceCode from '~/components/Button/SourceCode.vue';
import Control from '~/components/Button/Control.vue';
import ControlNav from '~/components/ControlNav.vue';

export default {
  components: {
    NavBar,
    SourceCode,
    Control,
    ControlNav
  },
  data() {
    return {
      isControlActive: false
    };
  },
  methods: {
    switchControlState() {
      this.isControlActive = !this.isControlActive;
    }
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
      ],
      // font-awesome
      script: [
        {
          src: 'https://kit.fontawesome.com/3a82c65957.js',
          crossorigin: 'anonymous'
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
  bottom: 1rem;
  right: 1rem;
}
</style>
