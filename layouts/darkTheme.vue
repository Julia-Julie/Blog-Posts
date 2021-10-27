<template>
  <div class="wrapper">
    <!-- Header -->
    <header>
      <nav-bar></nav-bar>
    </header>

    <!-- Main -->
    <main>
      <div class="container container--dark ">
        <nuxt />
      </div>
    </main>

    <!-- Footer -->
    <footer>footer</footer>
  </div>
</template>

<script>
import NavBar from "@/components/Navbar";
export default {
  components: {
    NavBar,
  },
};
</script>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  min-height: 100vh;
}

.container--dark{
  background-color: grey;
}
</style>