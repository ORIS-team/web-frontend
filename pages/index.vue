<style>
.title {
    font-family: "Poppins";
    display: block;
    font-weight: 300;
    font-size: 200px;
    text-align: left;
    margin-left: 100px;
}

.title-content {
    font-family: "Poppins";
    display: block;
    font-weight: 300;
    font-size: 50px;
    color: #35495e;
    letter-spacing: 1px;
    text-align: left;
    position: relative;
    left: 100px;
}
.btn--active{
    font-family: "Poppins";
    color: #FFFFFF;
    background-color: #D337C1;
}
.card{
  background-color: transparent;
}

</style>

<template>
    <v-container fluid  fill-height>
        <v-layout row wrap text-xs-center>
            <v-flex xs7>
                <h1 class="title-content">Introducing <br /> ORIS</h1>
                <h2 class="title">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nam lobortis.
                </h2>
                <br/>
                <v-btn class="btn--active" round >Get Started</v-btn>
            </v-flex>
            <v-flex xs5>
                <Logo height="350px"/>
            </v-flex>
            <v-flex xs4>
              <card class="card">

              </card>
            </v-flex>
            <v-flex xs4>
              <card>

              </card>
            </v-flex>
            <v-flex xs4>
              <card>

              </card>
            </v-flex>
        </v-layout>
    </v-container>

</template>

<script>

import Logo from '~/components/Logo.vue'
import Card from '~/components/Card.vue'

export default {
    layout: 'oris-layout',
    data: {},
    components: {
        Logo,
        Card
    }
}

</script>
