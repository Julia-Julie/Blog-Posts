<template>
  <section class="posts">
    <post-list :items="formattedPosts.slice(0, 3)"/>
    <button @click="increaseFeedbackNum(5)">Change feedbacks' amounts</button>
  </section>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
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
    ...mapState([
      'posts'
    ]),
    // posts() {
    //   return this.$store.state.posts
    // },

    ...mapGetters([
      'formattedPosts'
    ])
    // formattedPosts() {
    //   return this.$store.getters.formattedPosts
    // }
  },

  methods: {
    // changeFeedbacksNum(amount) {
    //   this.$store.dispatch('increaseFeedbackNum', amount)
    // }
    ...mapActions([
      'increaseFeedbackNum'
    ])
  }
}
</script>

<style lang="scss" scoped>
button {
  margin-top: 16px;
}
</style>

