<style>
.title {
    font-family: "Poppins";
    display: block;
    font-weight: 300;
    font-size: 200px;
    color: #35495e;
    letter-spacing: 1px;
}

.title-content {
    font-family: "Poppins";
    display: block;
    font-weight: 300;
    font-size: 50px;
}
</style>

<template>
    <v-container fluid  fill-height>
        <v-layout row wrap text-xs-center>
            <v-flex xs7>
                <h1 class="title">Introducing <br /> ORIS</h1>
                <h2 class="title-content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nam lobortis.
                </h2>
            </v-flex>
            <v-flex xs5>
                <Logo height="350px"/>
            </v-flex>
        </v-layout>
    </v-container>


</template>

<script>

import Logo from '~/components/Logo.vue'

export default {
    layout: 'oris-layout',
    data: {},
    components: {
        Logo
    }
}

</script>
