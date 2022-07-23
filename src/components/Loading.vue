<script>
import LoadEffect from '../shared/LoadEffect.vue';
import Container from './Container.vue';

export default {
    name: 'Loading',
    components: {
        LoadEffect,
        Container,
    },
};
</script>

<template>
    <Container>
        <div class="loading">
            <LoadEffect class="loading-text">Loading</LoadEffect>
        </div>
    </Container>
</template>

<style lang="scss">
@import '../styles/variable';
.loading {
    font-family: $poppins;
    font-size: 36px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 560px;
    transition: 0.2s ease-in-out;
    &-text {
        font-family: $fira-sans;
        font-weight: 700;
    }
}
</style>
