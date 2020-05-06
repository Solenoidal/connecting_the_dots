<template lang="pug">
  .flex.flex-col.items-center
    h1.text-6xl CONNECTING THE DOTS
    Logo
    .btn.p-2.mt-4.text-lg.rounded-md.bg-blue-600.text-white.font-bold
      a(href="https://github.com/Solenoidal/connecting_the_dots" target="_blank") source code
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
.btn {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
}
</style>
