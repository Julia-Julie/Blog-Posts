<template>
  <section class="posts">
    <post-list :items="formattedPosts.slice(0, 3)"/>
  </section>
</template>

<script>
import PostList from "../../components/Posts/PostList/PostList";

export default {
  name: 'Posts',
  layout: 'darkTheme',
  components: {
    PostList
  },
  data() {
    return {}
  },
  computed: {
    posts() {
      return this.$store.state.posts
    },
    formattedPosts() {
      return this.$store.getters.formattedPosts
    }
  }
}
</script>

