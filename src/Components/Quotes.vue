<template>
    <div class="outerDiv">
        <h3>My quote board</h3>
        <hr>
        <!-- <p>{{ progress }} this is prog</p> -->
        <div class="quoteWrapper">
            <component 
                v-for="(q, i) in quotes" 
                :is="singleQuote" 
                :quote="q"
                :index="i"
                :deactivate="deactivateComponent"
            ></component>
        </div>
    </div>
</template>

<script>
    import SingleQuote from './SingleQuote.vue';
    import { eventBus } from '../main.js'; 
    export default {
        props: {
            newQuote: String,
        },
        components: {
            appSingleQuote: SingleQuote,
        },
        data() {
            return {
                singleQuote: 'appSingleQuote',
                quotes: ['To be or not to be', 'Etu Brute?', 'This too shall pass', 'You without sin cast the first stone'],
            }
        },
        methods: {
            deactivateComponent(e) {
                const id = e.target.id;
                const ammendedArr = this.quotes;
                ammendedArr.splice(id, 1);
                this.quotes = ammendedArr;
                this.getArrLegth();
            },
            getArrLegth() {
                const myLength = this.quotes.length;
                eventBus.$emit('changeProgress', myLength);
            }
        },
        watch: { 
            newQuote: function(newVal, oldVal) {
                const addToArr = this.quotes;
                addToArr.push(newVal);
                this.quotes = addToArr;
                this.getArrLegth();
            },
        },
        created() {
            this.getArrLegth();
        }
    }
</script>

<style scoped>
    .outerDiv {
        display: flex;
        flex-direction: column;
    }
    .quoteWrapper {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        border: .5px solid rgb(181, 177, 177);
        background-color: rgb(242, 242, 242);
        border-radius: 5px;
    }
    h3 {
        font-family: 'Cedarville Cursive', cursive;
        text-decoration: underline;
        margin: auto;
    }
</style>