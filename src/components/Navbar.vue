<template>
  <div class="navbar">
    <h1 @click="$router.push('/')">My News Page</h1>
    <router-link to="/posts">News Page</router-link>
    <router-link to="/storage">Storage Page</router-link>
    <router-link to="/composition">Composition Page</router-link>
  </div>
</template>

<script>
export default {
  name: "NavBar",
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: left;
  align-items: center;
  flex-wrap: nowrap;
  grid-gap: 50px;
  background: #e5e5e5;
  padding: 20px;
}
</style>