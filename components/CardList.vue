<template>
  <div>
    <Card
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :published-at="post.publishedAt"
      :updated-at="post.updatedAt"
      :description="post.description"
      :tags="post.tags"
    />
  </div>
</template>

<script>
import Card from '~/components/Card';
export default {
  components: { Card },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
