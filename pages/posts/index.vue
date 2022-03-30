<template>
    <section class="posts">
      <post-list/>
    </section>
</template>

<script>
import PostList from "../../components/Posts/PostList/PostList";

export default {
  name: 'Posts',
  layout: 'darkTheme',
  components: {
    PostList
  }
}
</script>

