<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="container-fluid-pages-link">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li
            v-for="({ url, title }, i) in navs"
            :key="i"
            :class="['nav-item', title.toLowerCase() === 'admin' ? 'nav-item--admin' : '']"
          >
            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
            <NuxtLink
              :to="url"
              class="nav-link">
              {{ title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="container-fluid-auth-link">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li
            v-for="({ url, title  }, iAuth) in navsAuth"
            :key="iAuth"
            class="nav-item"
          >
            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
            <NuxtLink
              :to="url"
              class="nav-link">
              {{ title }}
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
        {url: '/admin', title: 'Admin'}
      ],
      navsAuth: [
        {url: '/login', title: 'Login'},
        {url: '/register', title: 'Register'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-light .navbar-nav .nav-link:hover,
.navbar-light .navbar-nav .nav-link.nuxt-link-active.nuxt-link-exact-active {
  color: orange;
}
.navbar-nav {
  flex-direction: row!important;
  li:not(:last-child) {
    margin-right: 16px;
  }
}

.nav-item--admin {
  box-shadow: 0 0 4px 1px #aaa;
}
</style>
