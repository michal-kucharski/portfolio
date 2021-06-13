<template>
    <div id="skills" class="relative flex flex-col justify-evenly text-center">
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
                <img src="../assets/nodejs.svg" alt="Node" width="100" height="100" class="cursor-pointer" id="nodejs" />
                <img src="../assets/mongodb.svg" alt="MongoDB" width="100" height="100" class="cursor-pointer" id="mongodb" />
                <img src="../assets/typescript.svg" alt="TypeScript" width="100" height="100" class="cursor-pointer" id="typescript" />
                <img src="../assets/jest.svg" alt="Jest" width="100" height="100" class="cursor-pointer" id="jest" />
            </div>
            <div class="hidden bg-gray-900 bg-opacity-90 absolute inset-0 w-full h-full" id="modal" @click="hideModal"></div>
            <div class="hidden absolute w-2/4 h-2/3 border-solid border-2 rounded-md border-green-600 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white flex flex-col items-center justify-center" id="modalContent">
                <img src="" alt="" id="modalImg" width="100" height="100" />
                <h2>{{ this.technologyName }}</h2>
                <span class="absolute top-4 right-6 text-4xl cursor-pointer" @click="hideModal">X</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Skills",
    data() {
        return {
            technologyName: "",
            html: ["tworzenie semantycznego kodu HTML", "znajomość atrybutów", "tworzenie list i formularzy", "praca z obrazami i video"],
            css: ["znajomość tailwind.css i bootstrapa", "znajomość flexboxa i grida", "tworzenie animacji"],
            sass: ["umiejętność konfiguracji", "znajomość składni scss", "znajomość mixins, functions i variables"],
            js: ["znajomość standardu ES6", "asynchroniczność", "korzystanie z API", "umiejętność korzystania z zewnętrznych rozwiązań", "programowanie zorientowane obiektowo", "praca z tablicami"],
            vue: [],
            laravel: [],
        };
    },
    methods: {
        showModal(e) {
            const modal = document.querySelector("#modal");
            const modalImg = document.querySelector("#modalImg");
            const modalContent = document.querySelector("#modalContent");

            const eraseParagraphs = modalContent.querySelectorAll("p");
            eraseParagraphs.forEach((item) => item.remove());

            modalImg.setAttribute("src", e.target.currentSrc);
            modalImg.setAttribute("alt", e.target.id);

            this.technologyName = e.target.id.toUpperCase();
            const data = this[e.target.id];

            data.forEach((item) => {
                const paragraph = document.createElement("p");
                paragraph.innerText = item;
                modalContent.appendChild(paragraph);
            });

            modal.classList.remove("hidden");
            modalContent.classList.remove("hidden");
        },
        hideModal() {
            modal.classList.add("hidden");
            modalContent.classList.add("hidden");
        },
    },
};
</script>

<style scoped></style>
