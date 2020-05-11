<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
      </li>
    </ul>
  </div>
</template>
<script>
import { posts } from '~/contents/blog.service';
export default {
  data() {
    return {
      posts
    };
  }
};
</script>
