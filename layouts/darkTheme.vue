<template>
  <div class="wrapper">
    <!-- Header -->
    <header>
      <nav-bar></nav-bar>
    </header>

    <!-- Main -->
    <main>
      <div class="container container--dark ">
        <nuxt/>
      </div>
    </main>

    <!-- Footer -->
    <footer>footer</footer>
  </div>
</template>

<script>
import NavBar from "~/components/NavBar";

export default {
  components: {
    NavBar,
  },
};

</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  min-height: 100vh;
  /*background-image: url("../assets/images/apple_bg.jpg");*/
  background-image: url("~/assets/images/apple_bg.jpg");
  background-color: #cccccc;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

}

.container--dark {
  /*background-color: #a16969;*/
}
</style>
