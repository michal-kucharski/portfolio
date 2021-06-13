<template>
    <div class="home flex flex-col items-center justify-center">
        <div class="bg-gray-100 border-2 border-green-500 rounded-lg">
            <blockquote class="flex flex-wrap flex-col bg-white text-green-700 border-l-8 italic border-green-500 px-4 py-3">
                {{ quoteText }}
                <span class="flex justify-end text-sm text-green-700 font-semibold pt-2 underline ">{{ quoteAuthor }}</span>
            </blockquote>
        </div>
        <h2>Witam na mojej stronie. Zachęcam do zapoznania się z moim portfolio.</h2>
    </div>
</template>

<script lang="ts">
export default {
    name: "Home",
    data: function() {
        return {
            quoteText: "" as string,
            quoteAuthor: "" as string,
        };
    },
    methods: {
        quoteBody() {
            fetch("https://type.fit/api/quotes")
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    const quotes = data;
                    function getRandomQuote(): number {
                        return Math.floor(Math.random() * (quotes.length - 1));
                    }
                    this.quoteText = quotes[getRandomQuote()].text;
                    this.quoteAuthor = quotes[getRandomQuote()].author;
                })
                .catch(function(err) {
                    console.log(err);
                });
        },
    },
    created() {
        this.quoteBody();
    },
};
</script>
