<template>
  <div>
    <Card v-for="blog in blogs" :key="blog.id" :blog="blog" />
  </div>
</template>

<script>
import Card from '~/components/Card';
export default {
  components: { Card },
  props: {
    blogs: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped></style>
