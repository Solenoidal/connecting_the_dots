<template>
  <div>
    <div class="rounded-lg card">
      <div class="action_area hover:cursor-pointer">
        <nuxt-link :to="link">
          <div class="relative card__header">
            <div class="pt-5 mx-5 card__image">
              <img src="https://placehold.jp/237x99.png" alt="" />
            </div>
            <ul class="absolute flex ml-3 tags__container">
              <li
                v-for="tag in blog.tags"
                :key="tag"
                class="px-2 py-1 mr-2 bg-white border border-black tag__container tag__text"
              >
                #{{ tag }}
              </li>
            </ul>
          </div>

          <div class="mx-5 card__body">
            <h2 class="card__title">
              {{ blog.title }}
            </h2>
            <p class="text-sm card__description">
              {{ blog.description }}
            </p>
          </div>
        </nuxt-link>
      </div>

      <footer class="mx-5 text-right card__footer">
        <div class="date">
          <template v-if="publishedAt">
            <time class="publishedAt date__text">
              投稿日 {{ publishedAt }}
            </time>
          </template>
          <template v-if="updatedAt">
            <time class="updatedAt"> 更新日 {{ updatedAt }} </time>
          </template>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      required: true
    }
  },
  computed: {
    publishedAt() {
      return this.$date(this.blog.publishedAt);
    },
    updatedAt() {
      return this.$date(this.blog.updatedAt);
    },
    link() {
      const date = this.publishedAt.split('/').join('-');
      const slug = this.blog.slug;
      return `/blog/${date}/${slug}`;
    }
  }
};
</script>

<style lang="postcss" scoped>
.card {
  box-shadow: 4px 7px 4px #adcadb, -4px -7px 4px white;
}
.card {
  margin-bottom: 30px;
}
.card > :nth-child(n),
.action_area > :nth-child(n),
.card__body > :nth-child(n) {
  margin-bottom: 0.5rem;
}
.card > :nth-last-child(1) {
  padding-bottom: 0.625rem;
}
.tags__container {
  bottom: 6px;
}
.date {
  color: #5894bf;
}
/* font */
.tag__text {
  @apply font-tag_mini font-normal;
}
.tag__text {
  font-size: 0.625rem;
  line-height: 100%;
}
.card__title {
  @apply font-title font-medium;
}
.card__title {
  font-size: 1.125rem;
  line-height: 100%;
}
.date__text {
  @apply text-xs font-date font-normal;
}
.date__text {
  line-height: 100%;
}
</style>
