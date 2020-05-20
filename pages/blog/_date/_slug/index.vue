<template>
  <div class="blog">
    <h1 class="text-2xl blog__title">{{ title }}</h1>
    <div class="text-sm text-center blog__date">
      <template v-if="date.publishedAt">
        投稿日 {{ date.publishedAt }}
      </template>
      <template v-if="date.updatedAt"> 更新日 {{ date.updatedAt }} </template>
    </div>
    <div class="blog__body" v-html="bodyHtml"></div>
  </div>
</template>

<script>
import { sourceFileArray } from '~/contents/blog.service.js';
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
  computed: {
    date() {
      return {
        publishedAt: this.$date(this.publishedAt),
        updatedAt: this.$date(this.updatedAt)
      };
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        }
      ]
    };
  }
};
</script>

<style lang="postcss">
.blog__body > h2 {
  @apply text-lg border-b border-gray-700 mb-2;
}
.blog__body > p {
  @apply pl-3;
}
.blog > :nth-child(n) {
  @apply mb-2;
}
</style>
