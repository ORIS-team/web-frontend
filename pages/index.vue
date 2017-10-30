<style>

.container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: "Poppins";
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}

</style>

<template>

    <div>
        <Logo height="150px"/>
        <h1 class="title">ORIS</h1>
    </div>

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
