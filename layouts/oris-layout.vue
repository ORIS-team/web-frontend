<style>

.oris-btn {
    font-family: 'Quicksand', sans-serif;
    font-weight: 400;
}

</style>

<template lang="html">

    <div style="background: -webkit-canvas(circles); background-repeat: no-repeat; height: -webkit-fill-available;">
        <v-toolbar persistent app color="transparent" class="py-4 elevation-0">

            <v-toolbar-title class="grey-text pl-4">
                <Typography size="30px"></Typography>
            </v-toolbar-title>


            <v-btn class="oris-btn" style="margin-left: 100px;" flat>About us</v-btn>
            <v-btn class="oris-btn" flat>Contact</v-btn>
            <v-btn class="oris-btn" flat>Demo</v-btn>

            <v-spacer></v-spacer>


            <v-btn color="grey darken-4" round outline dark class="oris-btn mr-4">
                <i left class="fa fa-github fa-2x pr-3"></i> GITHUB
            </v-btn>

        </v-toolbar>
        <main app>
            <nuxt></nuxt>
        </main>
    </div>

</template>

<script>

import Typography from '~/components/Typography.vue'

export default {
    components: {
        Typography
    },
    mounted () {
        this.onResize()
        function draw (w, h, xpos) {
            var ctx = document.getCSSCanvasContext('2d', 'circles', w, h)
            ctx.fillStyle = '#F1F1F1'
            ctx.ellipse(xpos, -200, xpos * 0.75, 700, 0 * Math.PI / 180, 0, 2 * Math.PI)
            ctx.fill()
        }
        draw(this.windowSize.x, this.windowSize.y, this.windowSize.x)
    },
    methods: {
        onResize () {
            this.windowSize = {
                x: window.innerWidth,
                y: window.innerHeight
            }
        }
    },
    data: () => {
        return {
            windowSize: {
                x: 0,
                y: 0
            }
        }
    }
}

</script>
