<template>
  <div class="flex flex-wrap-reverse">
    <div class="w-full">
      <article>
        <!-- title -->
        <h1 class="mb-4 text-4xl">{{ page.title }}</h1>
        <!-- main content -->
        <nuxt-content :document="page" />
      </article>
    </div>
    <!-- table of content -->
    <div class="w-full py-4 toc">
      <h3>目次</h3>
      <nav>
        <ul>
          <li
            v-for="toc in page.toc"
            :key="toc.id"
            class="text-gray-600"
            :class="{ 'border-b': toc.depth === 2 }"
          >
            <a
              :href="`#${toc.id}`"
              class="block text-sm"
              :class="{ 'ml-2': toc.depth === 3 }"
            >
              {{ toc.text }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const slug = params.slug;

    // 'blog/md/<dirName>/index' をパスとして渡す
    const page = await $content(`blog/md/${slug}/index`).fetch();
    return { page };
  }
};
</script>

<style scoped>
.nuxt-content h2 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}
</style>
