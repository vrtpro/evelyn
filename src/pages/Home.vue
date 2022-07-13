<script>
import Hero from '../components/Hero.vue';
export default {
    name: 'Home',
    components: {
        Hero,
    },
};
</script>

<template>
    <Hero />
</template>

<style lang="scss">
@import '../styles/variable';

h1 {
    font-family: $lexend;
}
p {
    font-family: $poppins;
}
</style>
