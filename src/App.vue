<template>
  <div id="app">
    <nav class="nav">
      
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/sheetdb">SheetDB</router-link>
      
    </nav>

      <router-view />
  </div>
</template>

<script>
import Home from './components/Home.vue'
import About from './components/About.vue'
import SheetDB from './components/SheetDB.vue'

export default {
  name: 'app',
  components: {
    Home,
    About,
    SheetDB
  }
}
</script>

<style>

body {
   background-image: url('./assets/ul.jpg');
   background-size: cover; /* Современные браузеры */
     
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #000000;
  margin-top: 20px;
  margin-bottom: 10px;
  }

.nav {
padding: 0px 0px 0px 0;
margin-left: 30px;
margin-top: 0px;
}
.nav a {
background: rgba(76, 175, 79, 0.616);
float: left;
padding: 10px;
text-decoration: none;
border-radius: 5px;
color: rgb(233, 233, 233);
margin-right: 5px;
font-style: bold;
margin-bottom: 10px;
}
.nav a:hover {
  color: #ffffff;
  font-style: bold;
  background: #4CAF50;
}

</style>
