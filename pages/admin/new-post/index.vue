<template>
  <section class="new-post">
    <admin-post-form :post="loadedPost"/>
  </section>
</template>

<script>
import AdminPostForm from "../../../components/Admin/AdminPostForm/AdminPostForm";

export default {
  name: 'newPost',
  components: { AdminPostForm },
  data() {
    return {
      loadedPost:{
        name:'Julia',
        title:'Sth Awesome',
        thumbnail:'https://techlogistics.net/wp-content/uploads/2021/08/hi-tech-enterprise-smart-assistant.jpg',
        content:'Here should be some content',
        feedbacks: 2
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.new-post {
  display: flex;
  flex-direction: column;
}
</style>
