<template>
  <div id="app" class="flex flex-wrap">
    <CV></CV>
    <div v-if="!isMobile()" class="flex flex-col w-4/5">
      <nav class="flex justify-evenly w-full h-16 bg-black text-green-500 uppercase">
        <router-link to="/" class="self-center hover:text-green-200 transition duration-200">Start</router-link>
        <router-link to="/About" class="self-center hover:text-green-200 transition duration-200">O mnie</router-link>
        <router-link to="/Skills" class="self-center hover:text-green-200 transition duration-200">Umiejętności</router-link>
        <router-link to="/Porfolio" class="self-center hover:text-green-200 transition duration-200">Moje projekty</router-link>
        <router-link to="/Contact" class="self-center hover:text-green-200 transition duration-200">Kontakt</router-link>
      </nav>
      <transition name="fade" mode="out-in">
        <router-view class="flex w-full"></router-view>
      </transition>      
    </div>
    <div v-else>
      <About></About>
    </div>    
  </div>
</template>

<script>
  import CV from '@/views/CV.vue'
  import About from '@/views/About.vue'
  export default {
    components: {
      CV,
      About,
    },
    methods: {
      isMobile() {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          return true
        } else {
          return false
        }
      }
    }
  }
</script>  

<style>
.fade-enter-active, .fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
