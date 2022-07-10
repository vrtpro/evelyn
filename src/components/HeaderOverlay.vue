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
    <transition name="overlay">
        <Overlay v-if="render" @click.self="() => $emit('toggle')">
            <Header v-if="render" @toggle="() => $emit('toggle')" toggleIcon="eva:close-outline" />
        </Overlay>
    </transition>
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
        transition: transform 0.3s;
        transform: translateY(0%);
    }

    &-enter-from,
    &-leave-to {
        header {
            transform: translateY(-100%);
        }
    }
}
</style>
