<template>
  <div>
    <template v-if="contents">
      <div v-for="content in contents" :key="content.id">
        <nuxt-link :to="'/content' + content.path">
          <h2>{{ content.title }}</h2>
          <p>{{ content.description }}</p>
        </nuxt-link>
      </div>
    </template>
    <template v-else>
      {{ emptyContent }}
    </template>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const contents = await $content().fetch();
    return { contents };
  },
  data() {
    return {
      emptyContent: []
    };
  }
};
</script>
