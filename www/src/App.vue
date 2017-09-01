<template>
  <div id="app">
    <navbar></navbar>
    <error></error>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Error from './components/Error'
  import navbar from './components/NavBar'
  export default {
    name: 'app',
    components: {
      Error,
      navbar
    }
  }

</script>

<style>
  @import url("https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>