<template>
  <div>
    <h2>{{ title }}</h2>
    <div v-html="bodyHtml"></div>
    <!-- hello -->
  </div>
</template>

<script>
import { sourceFileArray } from '~/contents/summary.json';
export default {
  validate({ params }) {
    return sourceFileArray.includes(`./contents/blog/${params.slug}/index.md`);
  },
  asyncData({ params }) {
    return Object.assign(
      {},
      require(`~/contents/blog/${params.slug}/index.json`),
      { params }
    );
  },
  head() {
    return {
      title: this.title
    };
  }
};
</script>

<style lang="postcss" scoped></style>
