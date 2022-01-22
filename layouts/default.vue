<template>
  <div class="wrapper">
    <!-- Header -->
    <header>
      <nav-bar></nav-bar>
    </header>

    <!-- Main -->
    <main>
      <div class="container">
        <nuxt/>
      </div>
    </main>

    <!-- Footer -->
    <footer>{{footer}}</footer>
  </div>
</template>

<script>

export default {
  name:"default",
  data(){
    return{
      footer: 'footer'
    }
  }
};
</script>

<style>
body {
  font-family: 'Montserrat', sans-serif;
}

.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  min-height: 100vh;
}
</style>
