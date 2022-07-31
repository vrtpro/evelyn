<script>
import Container from './Container.vue';
import Navigation from './Navigation.vue';

import Icon from '../shared/Icon.vue';
import logo from '../assets/logo.webp';

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
    data() {
        return {
            logo,
        };
    },
};
</script>

<template>
    <header>
        <Container>
            <h1>
                <router-link :to="{ name: 'Home' }">
                    <img :src="logo" alt="Evelyn Logo" />
                </router-link>
            </h1>
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
        img {
            height: 60px;
        }
    }

    button {
        display: none;
        cursor: pointer;

        @include on-mobile {
            display: block;
        }
    }

    a {
        color: $black;
    }
}
</style>
