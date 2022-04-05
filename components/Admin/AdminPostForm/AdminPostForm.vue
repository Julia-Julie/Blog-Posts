<template>
  <section class="new-post">
    <form @submit.prevent="onSave">
      <label for="name">Author Name</label>
      <input v-model="editedPost.name" id="name" type="text">

      <label for="title">Title</label>
      <input v-model="editedPost.title" id="title" type="text">

      <label for="thumbnail">Thumbnail link</label>
      <input v-model="editedPost.thumbnail" id="thumbnail" type="text">

      <label for="feedbacks">Post's feedbacks</label>
      <input v-model="editedPost.feedbacks" id="feedbacks" type="text">

      <label for="content">Content</label>
      <textarea v-model="editedPost.content" id="content" rows="5"></textarea>

      <input type="submit" id="submit">

      <button id="cancel" @click.prevent="onCancel">Cancel</button>
    </form>
  </section>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AdminPostForm',
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      editedPost:
        this.post ? {...this.post} : {
          name: '',
          title: '',
          thumbnail: '',
          content: '',
          feedbacks: 0
        }
    }
  },

  computed: {
    posts() {
      return this.$store.state.posts
    }
  },

  mounted() {
    // console.log('this.$store', this.$store);
    // console.log('{...this.post}', {...this.post})
    // console.log('this.post', this.post)
  },

  methods: {
    ...mapActions([
      'actionAddPosts'
    ]),
    onSave() {
      // console.log(this.editedPost)
      const newPost = {
        author: this.editedPost.name,
        header: this.editedPost.title,
        thumbnail: this.editedPost.thumbnail,
        feedbacks: Number(this.editedPost.feedbacks),
        content: this.editedPost.content,
      }
      this.actionAddPosts(newPost);
      this.$router.push('/admin')
    },
    onCancel() {
      this.$router.push('/admin')
    }
  }
}
</script>
<style lang="scss" scoped>

input,
textarea,
button {
  border: none;
  outline: none;
  width: 100%;
  padding: 10px 15px;
  background-color: #ffffff;
  font-size: 1.2rem;
  color: slategray;
  border-radius: 3px;
}

button[id="cancel"],
input[id="submit"] {
  display: inline-block;
  width: auto;
  margin-top: 15px;
  margin-right: 15px;
  background-color: slategray;
  color: bisque;
  border-radius: 5px;
}
</style>
