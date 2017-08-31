<template>
  <div id="app">
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-header-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a href="#" class="navbar-brand">
                <p>Kanban</p>
              </a>

<!--               <form clas="form-inline">
                  <input class="form-control" type="text" name="usernameBox">
                  <input class="form-control" type="password" name="passwordBox">
                  <button class="form-control"  type="submit">Login</button>
              </form> -->
          </div>
        </div>
    </nav>
    <error></error>
    <router-view></router-view>
  </div>
</template>

<script>
import Error from './components/Error'
export default {
  name: 'app',
  components:{
    Error
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
