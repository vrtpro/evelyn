<template>
    <Header />
    <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
            <component :is="Component"></component>
        </transition>
    </router-view>
    <Footer />
</template>

<script lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
    name: 'App',
    components: {
        Header,
        Footer,
    },
};
</script>

<style lang="scss">
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease-out;
}
</style>
