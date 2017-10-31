<style>

.typo-oris {
    font-family: 'Quicksand', sans-serif;

    font-weight: 500;
    color: #35495e;
    letter-spacing: 1px;
}
.typo-dot {
    font-family: 'Quicksand', sans-serif;

    color: #007A84;
}

</style>

<template lang="html">
    <div>
        <div class="typo-oris" :style="{'font-size': size}">
            ORIS
        </div>

    </div>

</template>

<script>

export default {
    props: ['size'],
    data: () => {
        return {}
    }
}

</script>
