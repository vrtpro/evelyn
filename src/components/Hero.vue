<script>
import Container from './Container.vue';
export default {
    nama: 'Hero',
    components: {
        Container,
    },
};
</script>

<template>
    <section class="hero">
        <Container>
            <p>Hai Halo! I'm Evelyn but you can call me Epel~</p>
            <h1>I am aspire to become your best mood booster!</h1>
        </Container>
    </section>
</template>

<style lang="scss">
.hero {
    h1 {
        font-size: 40px;
        line-height: 44px;
    }
    p {
        font-weight: 500;
        font-size: 18px;
    }
}
</style>
