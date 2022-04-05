<template>
  <section class="post">
    <article class="post__article">
      <nuxt-link :to="`/posts/${index +1}`" class="post__link">
        <div class="post__thumbnail" :style="{backgroundImage: `url( ${thumbnail} )`}"></div>
        <div class="post__content">
          <header class="post__header">{{ header }}</header>
          <div class="post__body" v-html="content"></div>
          <div class="post__feedbacks"> Feedbacks - <i>{{ feedbacks }}</i></div>
          <footer class="post__footer" v-html="author"></footer>
          <!--          <some-component v-bind="$attrs" />-->
        </div>
      </nuxt-link>
    </article>
  </section>
</template>

<script>
export default {
  name: 'PostPreview',
  props: {
    index: {
      type: Number, required: true
    },
    header: {
      type: String, default: ''
    },
    content: {
      type: String, default: ''
    },
    author: {
      type: String, default: ''
    },
    thumbnail: {
      type: String, default: ''
    },
    feedbacks: {
      type: Number,
      default: 0
    },
    post: {
      type: Object
    }
  },
  // mounted() {
  //   console.log(this.$attrs);
  // }
}
</script>
<style lang="scss" scoped>
@import "./PostPreview";
</style>
