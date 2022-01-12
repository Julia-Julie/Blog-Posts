<template>
  <section class="post">
    <div class="post__container">
      {{ title }} - {{$route.params.id}}
    </div>
  </section>
</template>

<script>
export default {
  name: 'Post',
  data() {
    return {
      title: 'here should be a single post'
    }
  }
}
</script>
