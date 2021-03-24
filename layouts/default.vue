<template>
  <div id="main-body">
    <header id="nav-header">
      <div class="container">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/users">Users</nuxt-link>
      </div>
    </header>
    <main class="container">
      <Nuxt />
    </main>
    <footer><div class="container">Latif Sulistyo</div></footer>
  </div>
</template>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

main {
  display: flex;
  flex: auto;
}

footer {
  width: 100%;
  height: 40px;
  background-color: #3b8070;
  color: aliceblue;
  text-align: center;
  line-height: 40px;
}

#main-body {
  min-height: 100vh;
  display: flex;
  flex-flow: column;
}

#nav-header {
  width: 100%;
  height: 40px;
  background-color: #35495e;
  color: aliceblue;
  line-height: 40px;

  a {
    color: aliceblue;
    text-decoration: none;
  }
}

.container {
  width: 1000px;
  margin: 0 auto;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;

  &:hover {
    color: #fff;
    background-color: #3b8070;
  }
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;

  &:hover {
    color: #fff;
    background-color: #35495e;
  }
}
</style>
