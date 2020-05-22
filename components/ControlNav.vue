<template>
  <nav class="flex items-center justify-center h-screen" @click="handleClick">
    <ul>
      <div class="flex justify-center sns__container">
        <li>
          <a href="https://twitter.com/maruisannsimai" target="_blank"
            ><i class="fab fa-twitter"></i
          ></a>
        </li>
        <li>
          <a href="https://github.com/solenoidal" target="_blank"
            ><i class="fab fa-github"></i
          ></a>
        </li>
      </div>
      <li>
        <nuxt-link to="/">HOME</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">ABOUT</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$emit('clickControlNav');
    }
  }
};
</script>

<style lang="scss" scoped>
ul > :nth-child(n) {
  margin-bottom: 2rem;
}
.sns__container > li {
  margin-right: 1rem;
  &:last-child {
    margin-right: 0;
  }
}

li {
  font-size: 2.25rem;
  text-align: center;
}
</style>
