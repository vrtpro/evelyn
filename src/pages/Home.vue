<template>
    <Container></Container>
</template>

<script lang="ts">
import Container from '../components/Container.vue';
export default {
    name: 'Home',
    components: {
        Container,
    },
};
</script>

<style lang="scss">
@import '../styles/variable';

h1 {
    font-family: $lexend;
}
p {
    font-family: $poppins;
}
</style>
