<script>
import { Icon } from '@iconify/vue';
import Container from './Container.vue';
export default {
    name: 'Header',
    components: {
        Container,
        Icon,
    },
};
</script>

<template>
    <header class="abc">
        <Container>
            <h1><router-link to="#">Evelyn Logo</router-link></h1>
            <nav>
                <ul>
                    <li><router-link to="#">Home</router-link></li>
                    <li><router-link to="#">Lorem</router-link></li>
                    <li><router-link to="#">Ipsum</router-link></li>
                    <li><router-link to="#">About</router-link></li>
                </ul>
            </nav>
            <button>
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
    h1 {
        font-size: 20px;
    }

    nav {
        ul {
            display: flex;
            gap: 60px;

            padding: 10px 20px;
            border-radius: 10px;
            background: rgba($white, 0.4);
            // TODO background blur

            @include on-tablet {
                gap: 40px;
            }
            @include on-mobile {
                display: none;
            }

            li {
                a {
                    font-size: 16px;
                    font-weight: 700;
                }
            }
        }
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
