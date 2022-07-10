<script>
export default {
    name: 'Navigation',
};
</script>

<template>
    <nav>
        <ul>
            <li><router-link to="#">Home</router-link></li>
            <li><router-link to="#">Lorem</router-link></li>
            <li><router-link to="#">Ipsum</router-link></li>
            <li><router-link to="#">About</router-link></li>
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
            }
        }
    }

    @include on-mobile {
        display: none;
    }
}
</style>
