<template>
  <div class="w-full">
    <article>
      <!-- title -->
      <h1 class="mb-4 text-4xl">{{ doc.title }}</h1>
      <!-- table of content -->
      <article-toc :toc="doc.toc" />
      <!-- main content -->
      <nuxt-content :document="doc" />
    </article>
  </div>
</template>

<script>
import ArticleToc from '@/components/ArticleToc.vue';
export default {
  components: {
    ArticleToc
  },
  async asyncData({ $content, params, error }) {
    const doc = await $content(params.slug).fetch();
    return { doc };
  }
};
</script>

<style scoped>
.nuxt-content h2 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}
</style>
