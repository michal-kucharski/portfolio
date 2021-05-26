<template>
  <div id="app" class="flex flex-wrap">
    <CV></CV>
    <div class="flex flex-col w-4/5">
      <nav class="flex justify-evenly w-full h-16 bg-black text-green-500 uppercase">
        <router-link to="/" class="self-center">Start</router-link>
        <router-link to="/About" class="self-center">O mnie</router-link>
        <router-link to="/Skills" class="self-center">Umiejętności</router-link>
        <router-link to="/Porfolio" class="self-center">Moje projekty</router-link>
        <router-link to="/Contact" class="self-center">Kontakt</router-link>
      </nav>
      <router-view class="flex w-full"></router-view>
    </div>
  </div>
</template>

<script>
  import CV from '@/views/CV.vue'
  export default {
    components: {
      CV,
    }
  }
</script>  

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
