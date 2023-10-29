<template>
  <nav-bar/>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/Navbar";
export default {
  name: "App",
  components: {NavBar}
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
  font-family: Arial;
}
a,a:link,a:focus,a:visited{
  color: black;
  transition: color 0.2s;
  text-decoration: none;
}
a:hover{
  color: #c93c0c;
}
</style>