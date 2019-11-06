<template>
    <div class="textAreaDiv">
        <h3>Add a Quote...</h3>
        <textarea 
            id="textarea" 
            name="textArea" 
            cols="40" 
            rows="5"
            @input="myInput($event)"
        ></textarea>
        <button class="btn btn-primary" @click="submitQuote(e, newQuote)">Submit</button>
        <hr>
    </div>
</template>

<script>
    export default {
        props: {
            submitQuote: Function,
        },
        data() {
            return {
                newQuote: ''
            }
        },
        methods: {
            myInput(e) {
                const newQ = e.target.value;
                this.newQuote = newQ;
            }
        }
    }
</script>

<style scoped>
    .textAreaDiv {
        margin: auto;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    textarea {
        margin: auto;
    }
    button {
        width: 10em;
        margin: 20px auto;
    }
    h3 {
        font-family: 'Cedarville Cursive', cursive;
        text-decoration: underline;
        text-align: center;
    }

</style>