<script lang="ts">
import Container from './Container.vue';

export default {
    name: 'Footer',
    components: {
        Container,
    },
};
</script>

<template>
    <footer>
        <p>Made with ❤️ by <b>Gifaldy Azka</b>.</p>
    </footer>
</template>

<style lang="scss">
@import '../styles/variable';

footer {
    padding-top: 100px;
    p {
        font-family: $fira-sans;
        font-size: 14px;
        border-top: 1px solid $black;
        padding: 10px 0;
        text-align: center;
    }
}
</style>
