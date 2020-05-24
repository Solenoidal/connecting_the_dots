<template>
  <div class="w-full py-4 text-gray-600">
    <h3 class="text-center">目次</h3>
    <nav>
      <ol>
        <li
          v-for="link in links"
          :key="link.id"
          :class="{ 'border-b': link.depth === 2 }"
        >
          <a
            :href="`#${link.id}`"
            class="block text-sm"
            :class="{ 'ml-2': link.depth === 3 }"
          >
            {{ link.prefix }}&nbsp;&nbsp;{{ link.text }}
          </a>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    toc: {
      type: Array,
      required: true
    }
  },
  computed: {
    links() {
      let depth2 = 0;
      let depth3 = 0;
      this.toc.forEach((link) => {
        if (link.depth === 2) {
          depth2++;
          link.prefix = `${depth2}`;
        }
        if (link.depth === 3) {
          depth3++;
          link.prefix = `${depth2}.${depth3}`;
        }
      });
      return this.toc;
    }
  }
};
</script>
