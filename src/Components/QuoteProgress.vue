<template>
    <div>
        <div class="outerdiv">
            <p class="fraction">{{ progress }}/10</p>
            <div 
                class="innerdiv"
                :style="{ width: myProgress(progress) }"
            ></div>
        </div>
        <hr>
    </div> 
</template>

<script>
    import { eventBus } from '../main.js';

    export default {
        data() {
            return {
                progress: 0,
            }
        },
        created() {
            eventBus.$on('changeProgress', (data) => {
                this.progress = data;
            })
        },
        methods: {
            myProgress: function(x) {
                switch(true) {
                    case x == 1:
                        return '6em';
                        break;
                    case x == 2:
                        return '12em';
                        break;
                    case x == 3:
                        return '18em';
                        break;
                    case x == 4:
                        return '24em';
                        break;
                    case x == 5:
                        return '30em';
                        break;
                    case x == 6:
                        return '36em';
                        break;
                    case x == 7:
                        return '42em';
                        break;
                    case x == 8:
                        return '48em';
                        break;
                    case x == 9:
                        return '54em';
                        break;
                    case x == 10:
                        return '60em';
                        break;
                    default:
                        return '1em';
                }
            }
        }
    }
</script>

<style scoped>
    .outerdiv {
        height: 3em;
        width: 60em;
        border: 1px solid rgb(69, 122,178);
        border-radius: 5px;
        margin: auto;
        background-color: rgb(242, 242, 242);
    }
    .innerdiv {
        height: 3em;
        width: 1em;
        background-color: rgb(69, 122,178);
        border-radius: 5px 0px 0px 5px;
    }
    .fraction {
        position: absolute;
        right: 34em;
        top: 105px;
        font-size: 24px;
        letter-spacing:0.3ch;
        color: rgb(0, 11, 128);
    }
</style>