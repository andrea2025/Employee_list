<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>   
      <router-link to="/create">Create</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background: #2c3e50;
  width: 70%;
  margin: 0 auto;
  
}

#nav a {
  font-weight: bold;
  color: #ffffff;
  font-size: 30px;
  text-decoration: none;
  padding: 20px;
  
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
