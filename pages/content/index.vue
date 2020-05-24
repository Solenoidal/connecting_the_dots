<template>
  <div>
    <pre
      >{{ contents }}
    </pre>
    blog title
    <hr />
    <div v-for="content in contents" :key="content.id">
      <nuxt-link :to="content.dir | getLink">
        {{ content.title }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import summaryJson from '~/content/blog/json/summary.json';
export default {
  filters: {
    getLink(dir) {
      const beginIndex = '/blog/json/'.length - 1;
      return '/content' + dir.slice(beginIndex);
    }
  },
  async fetch() {
    // get blog dirs
    const fileDirArray = [];
    for (const content in summaryJson.fileMap) {
      const dirFor$content = summaryJson.fileMap[content].dir.slice(
        'content/'.length
      );
      fileDirArray.push(dirFor$content);
    }

    // fetch blgo data
    const contents = [];
    for (const path of fileDirArray) {
      contents.push(await this.$content(path).fetch());
    }
    this.contents = contents.flat();
  },
  data() {
    return {
      contents: []
    };
  }
};
</script>

<style lang="scss" scoped></style>
