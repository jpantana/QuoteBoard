<template>
    <div class="container">
        <app-header></app-header>
        <app-progress
            :progress="progressNum"
        ></app-progress>
        <app-add-quote
            :submitQuote="submit"
        ></app-add-quote>
        <app-quotes
            :newQuote="addedQuote"
        ></app-quotes>
    </div>
</template>

<script>
    import QuoteHeader from './Components/QuoteHeader.vue';
    import QuoteProgress from './Components/QuoteProgress.vue';
    import AddQuote from './Components/AddQuote.vue'
    import Quotes from './Components/Quotes.vue';
    import { eventBus } from './main.js'; 
    
    export default {
        components: {
            appHeader: QuoteHeader,
            appProgress: QuoteProgress,
            appQuotes: Quotes,
            appAddQuote: AddQuote,
        },
        data() {
            return {
                addedQuote: null,
                progressNum: 0,
            }
        },
        methods: {
            submit(e, quote) {
                this.addedQuote = quote;
            }
        }
    }
</script>

<style>
</style>
