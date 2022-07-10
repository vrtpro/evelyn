<script>
import Container from './Container.vue';
import Navigation from './Navigation.vue';

import Icon from '../shared/Icon.vue';

export default {
    name: 'HeaderDefault',
    props: {
        toggleIcon: {
            default: 'charm:menu-hamburger',
        },
    },
    components: {
        Container,
        Navigation,
        Icon,
    },
    emits: ['toggle'],
};
</script>

<template>
    <header>
        <Container>
            <h1><router-link to="#">Evelyn Logo</router-link></h1>
            <button @click="() => $emit('toggle')">
                <Icon :name="toggleIcon" />
            </button>
            <Navigation />
        </Container>
    </header>
</template>

<style lang="scss">
@import '../styles/variable';
@import '../styles/mixin';
header {
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        height: 100px;
    }

    h1 {
        font-size: 20px;
    }

    button {
        display: none;

        @include on-mobile {
            display: block;
        }
    }

    a {
        color: $black;
    }
}
</style>
