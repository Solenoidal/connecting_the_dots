<template>
  <div class="p-2 m-2 border border-black rounded-lg  card">
    <div class="action_area hover:cursor-pointer">
      <div class="card__header">
        <img src="" alt="" class="card__image" />
        <ul class="flex tags_container">
          <li
            v-for="tag in tags"
            :key="tag"
            class="px-2 py-1 mx-1 text-xs bg-orange-300 rounded-lg tag"
          >
            {{ tag }}
          </li>
        </ul>
      </div>

      <div class="card__body">
        <h2 class="text-2xl card__title">
          {{ title }}
        </h2>
        <p class="card__description">
          {{ description }}
        </p>
      </div>
    </div>

    <footer class="text-right card__footer">
      <template v-if="publishedAt">
        <time class="publishedAt"> 投稿日 {{ publishedAt }} </time>
      </template>
      <template v-if="updatedAt">
        <time class="updatedAt"> 更新日 {{ updatedAt }} </time>
      </template>
    </footer>
  </div>
</template>

<script>
/* eslint-disable vue/require-default-prop */
export default {
  props: {
    title: {
      type: String
    },
    publishedAt: {
      type: String
    },
    updatedAt: {
      type: String
    },
    description: {
      type: String
    },
    tags: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped></style>
