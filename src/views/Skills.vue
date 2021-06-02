<template>
    <div id="skills" class="flex flex-col justify-evenly text-center">
        <div>
            <h2 class="uppercase text-xl">Umiejętności</h2>
            <div class="flex justify-evenly">
                <img src="../assets/html.svg" alt="HTML" width="100" height="100" class="cursor-pointer" id="html" @click="showModal" />
                <img src="../assets/css.svg" alt="CSS" width="100" height="100" class="cursor-pointer" id="css" @click="showModal" />
                <img src="../assets/sass.svg" alt="Sass" width="100" height="100" class="cursor-pointer" id="sass" @click="showModal" />
                <img src="../assets/js.svg" alt="JavaScript" width="100" height="100" class="cursor-pointer" id="js" @click="showModal" />
                <img src="../assets/vue.svg" alt="Vue" width="100" height="100" class="cursor-pointer" id="vue" @click="showModal" />
                <img src="../assets/laravel.svg" alt="Laravel" width="100" height="100" class="cursor-pointer" id="laravel" @click="showModal" />
            </div>
            <h2 class="uppercase text-xl">Narzędzia</h2>
            <div class="flex justify-evenly">
                <img src="../assets/npm.svg" alt="NPM" width="100" height="100" class="cursor-pointer" id="npm" @click="showModal" />
                <img src="../assets/git.svg" alt="Git" width="100" height="100" class="cursor-pointer" id="git" @click="showModal" />
                <img src="../assets/webpack.svg" alt="Webpack" width="100" height="100" class="cursor-pointer" id="webpack" @click="showModal" />
                <img src="../assets/vsc.svg" alt="VSC" width="100" height="100" class="cursor-pointer" id="vsc" @click="showModal" />
            </div>
            <h2 class="uppercase text-xl">Do nauki</h2>
            <div class="flex justify-evenly">
                <img src="../assets/nodejs.svg" alt="Node" width="100" height="100" class="cursor-pointer" id="node" @click="showModal" />
                <img src="../assets/mongodb.svg" alt="MongoDB" width="100" height="100" class="cursor-pointer" id="mongodb" @click="showModal" />
                <img src="../assets/typescript.svg" alt="TypeScript" width="100" height="100" class="cursor-pointer" id="typescript" @click="showModal" />
                <img src="../assets/jest.svg" alt="Jest" width="100" height="100" class="cursor-pointer" id="jest" @click="showModal" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Skills",
    data() {
        return {
            html: [1, 2, 3, 4],
        };
    },
    methods: {
        showModal(e) {
            const data = this[e.target.id];
            data.forEach((item) => console.log(item));
        },
    },
};
</script>

<style scoped></style>
