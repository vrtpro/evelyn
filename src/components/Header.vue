<script>
import Container from './Container.vue';
import Overlay from './Overlay.vue';
import Nav from './Nav.vue';

import Icon from '../shared/Icon.vue';

export default {
    name: 'Header',
    data() {
        return {
            open: false,
        };
    },
    components: {
        Container,
        Overlay,
        Icon,
        Nav,
    },
};
</script>

<template>
    <header class="abc">
        <Container>
            <h1><router-link to="#">Evelyn Logo</router-link></h1>
            <Nav />
            <Overlay v-if="open" @click="() => (open = false)" />
            <button @click="() => (open = true)">
                <Icon name="charm:menu-hamburger" />
            </button>
        </Container>
    </header>
</template>

<style lang="scss">
@import '../styles/variable';
@import '../styles/mixin';
header {
    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100px;
    }

    .overlay {
        display: none;
        @include on-mobile {
            display: block;
        }
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
