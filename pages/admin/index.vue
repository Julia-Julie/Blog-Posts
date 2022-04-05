<template>
  <section class="admin-page">
    <section class="new-post">
      <h2>New Post</h2>
      <button @click="moveToNewPost">Create new post</button>
    </section>
    <section class="existing-posts">
      <h2>Existing posts</h2>
      <post-list :items="posts"/>
    </section>
  </section>
</template>
<script>
import PostList from "../../components/Posts/PostList/PostList";

export default {
  name: 'Admin',
  data() {
    return {
    }
  },
  components: {
    PostList
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
  methods:{
    moveToNewPost(){
      this.$router.push('/admin/new-post')
    }
  }
}
</script>

<style>
button{
  border: none;
  outline: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  border-radius: 3px;
  color: #ffffff;
  background-color: #333;
  margin-bottom: 20px;
}
</style>
