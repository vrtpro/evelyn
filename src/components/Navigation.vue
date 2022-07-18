<script>
export default {
    name: 'Navigation',
};
</script>

<template>
    <nav>
        <ul>
            <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
            <li><router-link :to="{ name: 'About' }">About</router-link></li>
            <li><router-link :to="{ name: 'Fanart' }">Fan art</router-link></li>
        </ul>
    </nav>
</template>

<style lang="scss">
@import '../styles/variable';
@import '../styles/mixin';
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

        li {
            a {
                font-size: 16px;
                font-weight: 700;
                transition: 0.2s ease-in-out;
                &:hover {
                    color: $cyan-dark;
                }
            }
        }
    }

    @include on-mobile {
        display: none;
    }
    .router-link-exact-active {
        color: $cyan-dark !important;
    }
}
</style>
