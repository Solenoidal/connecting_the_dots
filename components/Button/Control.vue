<template>
  <div
    class="flex items-center justify-center p-3 btn__container"
    :class="{ 'is-active': active }"
    @click="navOpen"
  >
    <div class="w-full h-full line__container">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    navOpen() {
      this.active = !this.active;
      this.$emit('clickControlBtn');
    }
  }
};
</script>

<style lang="scss" scoped>
$btn-bg: linear-gradient(180deg, #0181c9 0.12%, rgba(1, 129, 201, 0) 209.6%);
.btn__container {
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 20px;
  background: $btn-bg;
  .line__container {
    position: relative;
  }
  span {
    position: absolute;
    height: 4px;
    background: white;
    display: block;
    transition: 0.6s;
    &:first-child {
      top: 0;
      width: 100%;
    }
    &:nth-child(2) {
      top: 43%;
      width: 85%;
    }
    &:last-child {
      bottom: 0;
      width: 70%;
    }
  }
  &.is-active {
    span {
      width: 100%;
      &:first-child {
        top: 40%;
        transform: rotate(45deg);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:last-child {
        bottom: 45%;
        transform: rotate(-45deg);
      }
    }
  }
}
</style>
