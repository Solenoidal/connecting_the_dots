<template>
  <div class="w-full py-4">
    <h3>目次</h3>
    <nav>
      <ul>
        <li
          v-for="link in toc"
          :key="link.id"
          class="text-gray-600"
          :class="{ 'border-b': link.depth === 2 }"
        >
          <a
            :href="`#${link.id}`"
            class="block text-sm"
            :class="{ 'ml-2': link.depth === 3 }"
          >
            {{ link.text }}
          </a>
        </li>
      </ul>
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
  }
};
</script>
