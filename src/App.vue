<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/hacker-news">Hacker News</router-link>
      <router-link to="/cats">Cats</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
html, body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #fafafa;
}
#nav {
  padding: 1rem;
  display: flex;
}

#nav a {
  padding: 0 1rem;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.full-center {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.page-wrapper {
  flex: 1;
}
</style>
