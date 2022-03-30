<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li
            v-for="(nav, i) in navs"
            :key="i"
            class="nav-item"
          >
            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
            <NuxtLink
              :to="nav.url"
              class="nav-link">
              {{ nav.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      navs: [
        {url: '/', title: 'Home'},
        {url: '/posts', title: 'Posts'},
        {url: '/about', title: 'About'},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-light .navbar-nav .nav-link:hover,
.navbar-light .navbar-nav .nav-link.nuxt-link-active.nuxt-link-exact-active {
  color: #112b69;
}

</style>
