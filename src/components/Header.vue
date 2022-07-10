<script>
import { Icon } from '@iconify/vue';
import Container from './Container.vue';
import Overlay from './Overlay.vue';
import Nav from './Nav.vue';
import Overlay from './Overlay.vue';

export default {
    name: 'Header',
    data() {
        return {
            open: false,
        };
    },
    components: {
        Container,
        Icon,
        Nav,
        Overlay,
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
                <Icon icon="charm:menu-hamburger" width="28" height="28" />
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
