<template>
    <div
        :id="index"
        @click="deactivate" 
        class="singleQuote"
    >
    <p class="text-wrap">{{ quote }}</p>
    </div>
 </template>

<script>
    export default {
        props: {
            quote: String,
            deactivate: Function,
            index: Number,
        },
        data() {
            return {
                
            }
        },
        destroyed() {
            console.log('destroyed');
        }
    }
</script>

<style scoped>
    .singleQuote {
        border: 1px solid rgb(120, 120, 120);
        border-radius: 4px;
        width: 14em;
        height: 5.5em;
        margin: 2em;
        font-family: 'Cedarville Cursive', cursive;
        font-size: 20px;
        background-color: rgb(255, 255, 255);
        /* object-fit:contain; */
        overflow: auto;

    }
    p {
        text-align: center;
        margin: 5px;
    }
</style>