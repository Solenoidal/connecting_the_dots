<template>
  <div>
    <div class="tag_list">
      <span v-for="tag in tags" :key="tag">
        <span
          class="inline-block p-1 mx-1 bg-white border border-black rounded-md"
        >
          #{{ tag }}
        </span>
      </span>
    </div>
    <card-list :blogs="blogs" />
  </div>
</template>
<script>
import CardList from '~/components/CardList.vue';
import { blogs, tags } from '~/contents/blog.service';
export default {
  components: {
    CardList
  },
  data() {
    return {
      blogs,
      tags
    };
  },
  head() {
    return {
      title: 'HOME'
    };
  }
};
</script>
