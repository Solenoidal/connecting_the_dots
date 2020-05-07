<template>
  <div class="flex flex-col items-center">
    <h1 class="text-6xl">CONNECTING THE DOTS</h1>
    <Logo />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue';

export default {
  components: {
    Logo
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
