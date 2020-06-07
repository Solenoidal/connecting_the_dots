<template>
  <div>
    <div class="relative main">
      <div
        class="absolute top-0 z-10 w-full main__nav"
        :class="{ active: isControlActive }"
      >
        <control-nav @clickControlNav="switchControlState" />
      </div>
      <div
        class="absolute top-0 main__content"
        :class="{ active: isControlActive }"
      >
        <nav-bar />
        <nuxt />
      </div>
    </div>
    <div class="fixed z-50 flex flex-col items-end btn">
      <control
        :active="isControlActive"
        @clickControlBtn="switchControlState"
      />
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue';
import Control from '~/components/Button/Control.vue';
import ControlNav from '~/components/ControlNav.vue';

export default {
  components: {
    NavBar,
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
<style lang="scss">
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
.main {
  &__nav {
    transition: 0.6s;
    opacity: 0;
    &.active {
      opacity: 1;
    }
  }
  &__content {
    transition: 0.6s;
    z-index: 10;
    &.active {
      z-index: 0;
      filter: blur(2px) opacity(50%);
    }
  }
}
</style>
