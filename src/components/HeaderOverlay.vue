<script>
import Header from './HeaderDefault.vue';
import Overlay from './Overlay.vue';

export default {
    name: 'HeaderOverlay',
    props: {
        render: false,
    },
    components: {
        Header,
        Overlay,
    },
};
</script>

<template>
    <Overlay v-if="render" @click="() => $emit('toggle')">
        <Header toggleIcon="eva:close-outline" />
    </Overlay>
</template>

<style lang="scss">
@import '../styles/variable';
@import '../styles/mixin';
.overlay {
    display: none;
    @include on-mobile {
        display: block;
    }

    header {
        border-radius: 0px 0px 20px 20px;
        background: $pink;
        .container {
            padding: 20px;
            height: auto;
            gap: 20px;
        }

        nav {
            display: block;
            width: 100%;
            ul {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 20px;
                gap: 20px;
            }
        }
    }
}
</style>
