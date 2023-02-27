<template>
  <div id="app">
    <nav>
      <router-link to="/">promise</router-link> |
      <router-link to="/Verticalcenter">Verticalcenter</router-link> |
      <router-link to="/Boxmodel">Boxmodel</router-link> |
      <router-link to="/input">input</router-link> |
      <router-link to="/password">password</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
