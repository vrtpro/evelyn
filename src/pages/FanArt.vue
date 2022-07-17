<script>
import Container from '../components/Container.vue';
import ArtCard from '../components/ArtCard.vue';
export default {
    name: 'FanArt',
    components: {
        ArtCard,
        Container,
    },
};
</script>

<template>
    <Container>
        <ArtCard />
    </Container>
</template>

<style lang="scss">
@import '../styles/variable';
</style>
