<template>
  <div class="blog">
    <h1 class="text-2xl blog__title">{{ title }}</h1>
    <div class="text-sm text-center blog__date">
      投稿日/{{ publishedAt }} 更新日/{{ updatedAt }}
    </div>
    <div class="blog__body" v-html="bodyHtml"></div>
  </div>
</template>

<script>
import { sourceFileArray } from '~/contents/blog.service';
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
