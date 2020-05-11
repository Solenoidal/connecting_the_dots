<template>
  <div>
    <card-list :posts="posts" />
  </div>
</template>
<script>
import CardList from '~/components/CardList.vue';
import { posts } from '~/contents/blog.service';
export default {
  components: {
    CardList
  },
  data() {
    return {
      posts
    };
  }
};
</script>
