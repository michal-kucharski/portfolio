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
                <router-view class="flex w-full components-container"></router-view>
            </transition>
        </div>
        <div v-else>
            <About></About>
            <Skills></Skills>
        </div>
    </div>
</template>

<script>
import CV from "@/views/CV.vue";
import About from "@/views/About.vue";
import Skills from "./views/Skills.vue";
export default {
    components: {
        CV,
        About,
        Skills,
    },
    methods: {
        isMobile() {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true;
            } else {
                return false;
            }
        },
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap");

body {
    font-family: "Roboto", Verdana, Tahoma, sans-serif !important;
}

.fade-enter-active,
.fade-leave-active {
    transition-duration: 0.5s;
    transition-property: opacity;
    transition-timing-function: ease;
}
.fade-enter,
.fade-leave-active {
    opacity: 0;
}
.components-container {
    min-height: calc(100% - 4rem);
}
</style>
